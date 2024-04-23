const spans = document.querySelectorAll('.word span');

spans.forEach((span, idx) => {
  span.addEventListener('click', (e) => {
    e.target.classList.add('active');
  });
  span.addEventListener('animationend', (e) => {
    e.target.classList.remove('active');
  });
  

  setTimeout(() => {
    span.classList.add('active');
  }, 1200 * (idx+1))
});

document.getElementById("better-button").addEventListener("mouseenter", function() {
  this.textContent = "Stop!";
});

document.getElementById("better-button").addEventListener("mouseleave", function() {
  this.textContent = "What else can I do?";
});

document.getElementById("better-button").addEventListener("click", function() {
  this.classList.add("clicked");
  
  setTimeout(() => {
    window.location.href = "../page4/page4.html"; 
  }, 500); 
});