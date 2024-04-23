
document.addEventListener('DOMContentLoaded', function() {
  fetch('data.json')
    .then(response => response.json())
    .then(data => {
      console.log(data)
      initializeCards(data);
    });
});

function initializeCards(data) {
  const cards = document.querySelectorAll('.card');
  const modal = document.getElementById('modal');
  const modalTitle = document.getElementById('modal-title');
  const modalDescription = document.getElementById('modal-description');
  const closeModal = document.getElementById('close');
  const addToFridgeButton = document.getElementById('addToFridgeBtn');

  cards.forEach(card => {
    const buyButton = card.querySelector('.buy-btn');
    buyButton.addEventListener('click', () => {
      const cardTitle = card.querySelector('h2').textContent;
      const itemData = data.find(item => item["YOU EAT WHAT YOU ARE"] === cardTitle);
      console.log(cardTitle)
      console.log(data.find(item => item["YOU EAT WHAT YOU ARE"]))
      if (itemData) {
        modalTitle.textContent = cardTitle;
        modalDescription.innerHTML = `
          <div class="title">How often I buy it:</div> ${itemData["__1"]}</p>
          <div class="title">How long it will last in the fridge:</div> ${itemData["__2"]}</p>
          <div class="title">Good with:</div> ${itemData["__3"]}</p>
          <div class="title">Aesthetic on my fridge %:</div> ${itemData["__4"]}</p>
          <div class="title">Price average:</div> ${itemData["__5"]}</p>
          <div class="title">Fun fact:</div> ${itemData["__6"]}</p>
          <div class="title">More info:</div> <a href="${itemData["__7"]}" target="_blank">Click here</a></p>
        `;
      } else {
        modalTitle.textContent = 'Food Item Not Found';
        modalDescription.textContent = 'No additional information is available.';
      }
      modal.style.display = 'block';
    });
  });

  closeModal.addEventListener('click', () => {
    modal.style.display = 'none';
  });

  window.addEventListener('click', (event) => {
    if (event.target === modal) {
      modal.style.display = 'none';
    }
  });

  addToFridgeButton.addEventListener('click', () => {
    window.location.href = 'supermarket.html';
  });
}
