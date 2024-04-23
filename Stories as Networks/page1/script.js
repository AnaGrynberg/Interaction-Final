
var changeableElements = document.querySelectorAll('#changeable');

changeableElements.forEach(function(element) {
    element.addEventListener('mouseover', function() {
        element.textContent = 'and';
        this.classList.add('change-letter-and');
    });

    element.addEventListener('mouseout', function() {
        element.textContent = 'end';
        this.classList.remove('change-letter-and');
    });
});

document.getElementById("better-button").addEventListener("mouseenter", function() {
    this.textContent = "Are you sure?";
  });
  
  document.getElementById("better-button").addEventListener("mouseleave", function() {
    this.textContent = "I can do it better";
  });
  
  document.getElementById("better-button").addEventListener("click", function() {
    this.classList.add("clicked");
    
    setTimeout(() => {
      window.location.href = "../page2/page2.html"; 
    }, 500); 
  });
  