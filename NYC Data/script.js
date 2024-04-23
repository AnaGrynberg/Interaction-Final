window.onload = function() {
    const calendarContainer = document.getElementById('calendar-container');
    const monthsSlider = document.getElementById('monthsSlider');
    const daysSlider = document.getElementById('daysSlider');
    const calendar = document.getElementById('calendar');

    // Function to clear highlights and reset content
    function clearHighlights() {
        const cells = calendar.getElementsByTagName('td');
        for (let cell of cells) {
            cell.classList.remove('highlighted');
            cell.innerHTML = cell.dataset.marketname || ''; // Restore market name
        }
    }

    // Function to load and parse JSON data
    async function loadMarketData() {
        const response = await fetch('market.json');
        const data = await response.json();
        return data;
    }

    async function loadMarketData() {
        try {
            const response = await fetch('market.json');
            if (!response.ok) { // Check if response status is 200
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            const data = await response.json();
            return data;
        } catch (error) {
            console.error('Could not load the JSON file:', error);
        }
    }
    
    // Populate the calendar with one market per square
    function populateCalendar(data) {
        let counter = 0;
        const numCols = 7; // 7 days a week
        const numRows = Math.ceil(data.length / numCols); // Calculate the number of rows needed

        // Clear previous calendar if any
        calendar.innerHTML = '';

        // Generate rows and cells based on data length
        for (let i = 0; i < numRows; i++) {
            let row = calendar.insertRow();
            for (let j = 0; j < numCols; j++) {
                let cell = row.insertCell();
                if (counter < data.length) {
                    const market = data[counter++];
                    cell.dataset.market = JSON.stringify(market);
                    cell.dataset.marketname = market.marketname;
                    cell.innerHTML = market.marketname;
                    cell.onclick = function() {
                        clearHighlights();
                        this.classList.add('highlighted');
                        this.innerHTML = market.streetaddress; // Show address on click
                    };
                } else {
                    cell.innerHTML = 'No market'; // Fill empty cells if any
                }
            }
        }
    }

    // Highlight markets based on the selected month
    function highlightMonth(monthIndex) {
        const cells = calendar.getElementsByTagName('td');
        clearHighlights();
        Array.from(cells).forEach(cell => {
            if (cell.dataset.market) {
                const market = JSON.parse(cell.dataset.market);
                const marketMonth = new Date(market.season_begin).getMonth();
                if (marketMonth === monthIndex) {
                    cell.classList.add('highlighted');
                    cell.innerHTML = market.streetaddress; // Show address
                }
            }
        });
    }

    // Highlight markets based on the selected day
    function highlightDay(dayIndex) {
        const cells = calendar.getElementsByTagName('td');
        clearHighlights();
        Array.from(cells).forEach(cell => {
            if (cell.dataset.market) {
                const market = JSON.parse(cell.dataset.market);
                const marketDay = new Date(market.season_begin).getDay();
                if (marketDay === dayIndex) {
                    cell.classList.add('highlighted');
                    cell.innerHTML = market.streetaddress; // Show address
                }
            }
        });
    }

    // Generates the month buttons and attaches event listeners
    function generateMonths() {
        const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
        months.forEach((month, index) => {
            let button = document.createElement('button');
            button.textContent = month;
            button.className = 'month-button';
            button.addEventListener('click', () => highlightMonth(index));
            monthsSlider.appendChild(button);
        });
    }

    // Generates the day buttons and attaches event listeners
    function generateDays() {
        const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
        days.forEach((day, index) => {
            let button = document.createElement('button');
            button.textContent = day;
            button.className = 'day-button';
            button.addEventListener('click', () => highlightDay(index));
            daysSlider.appendChild(button);
        });
    }

    // Generates the calendar grid
    function generateCalendar() {
        const numRows = 5; // 5 weeks approximation
        const numCols = 7; // 7 days a week
        for (let i = 0; i < numRows; i++) {
            let row = calendar.insertRow();
            for (let j = 0; j < numCols; j++) {
                let cell = row.insertCell();
                cell.dataset.tooltip = 'No market'; // Default tooltip
            }
        }
    }

    // Initialize everything
    async function initialize() {
        generateMonths();
        generateDays();
        generateCalendar();
        const marketData = await loadMarketData();
        populateCalendar(marketData);
    }

    initialize();
};
