let endWordVisible = true;

function animateButton1(button) {
    if (button.classList.contains('button1')) {
        const endWords = document.querySelectorAll('.end-word');
        endWords.forEach(endWord => {
            if (endWordVisible) {
                endWord.style.display = 'none';
            } else {
                endWord.style.display = 'inline';
            }
        });
        endWordVisible = !endWordVisible; 
    }
}

function openNewPage() {
    window.open('../Index.html');
}

let highlightOn = false;

function highlightWord() {
    const words = document.querySelectorAll('.highlight');
    words.forEach(word => {
        if (word.textContent.toLowerCase() === 'and') {
            if (highlightOn) {
                word.classList.remove('highlighted');
            } else {
                word.classList.add('highlighted');
            }
        }
    });
    highlightOn = !highlightOn;
}

function openNewPage1() {
    window.open('../page3/page3.html');
    let underlineOn = false;

}  
let underlineOn = false;

function underlineWord() {
    const words = document.querySelectorAll('.beginning-word');
    words.forEach(word => {
        if (underlineOn) {
            word.style.textDecoration = 'none';
        } else {
            word.style.textDecoration = 'underline double';
            word.style.textDecorationColor = 'blue'; 
        }
    });
    underlineOn = !underlineOn;
}

let styleChanged = false;
let originalStyles = [];

function changeTextStyle() {
    const paragraphs = document.querySelectorAll('.container p');
    if (!styleChanged) {
        paragraphs.forEach((paragraph, index) => {
            originalStyles[index] = {
                fontFamily: paragraph.style.fontFamily,
                fontSize: paragraph.style.fontSize,
                fontWeight: paragraph.style.fontWeight,
                color: paragraph.style.color
            };
            paragraph.style.fontFamily = 'Shantell Sans';
            paragraph.style.fontSize = '36px';
            paragraph.style.fontWeight = 'bold';
            paragraph.style.wordspace = '5px';
            paragraph.style.color = 'yellow';
        });
    } else {
        paragraphs.forEach((paragraph, index) => {
            const originalStyle = originalStyles[index];
            paragraph.style.fontFamily = originalStyle.fontFamily;
            paragraph.style.fontSize = originalStyle.fontSize;
            paragraph.style.fontWeight = originalStyle.fontWeight;
            paragraph.style.color = originalStyle.color;
        });
    }
    styleChanged = !styleChanged;
}

document.getElementById("better-button").addEventListener("mouseenter", function() {
    this.textContent = "Maybe not...";
  });
  
  document.getElementById("better-button").addEventListener("mouseleave", function() {
    this.textContent = "I can go further!";
  });
  
  document.getElementById("better-button").addEventListener("click", function() {
    this.classList.add("clicked");
    
    setTimeout(() => {
      window.location.href = "../page3/page3.html"; 
    }, 500); 
  });