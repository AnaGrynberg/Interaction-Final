const input = document.getElementById('user-input');
const output = document.getElementById('output');
const submitBtn = document.getElementById('submit-btn');

input.addEventListener('input', (event) => {
  output.innerText = event.target.value;
});

submitBtn.addEventListener('click', () => {
  input.value = ''; 
  output.innerText = ''; 
});


document.getElementById("submit-btn").addEventListener("mouseenter", function() {
    this.textContent = "You are never done!";
  });
  
  document.getElementById("submit-btn").addEventListener("mouseleave", function() {
    this.textContent = "Submit!";
  });
  
  document.getElementById("submit-btn").addEventListener("click", function() {
    this.classList.add("clicked");
    
    setTimeout(() => {
      window.location.href = "../lastpage/lastpage.html"; 
    }, 500); 
  });