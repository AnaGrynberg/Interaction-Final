jQuery(document).ready(function($){
    $('.text-content').mousemove(function(e){
        var rXP = (e.pageX - this.offsetLeft-$(this).width()/2);
        var rYP = (e.pageY - this.offsetTop-$(this).height()/2);
        $(this).css('text-shadow', +rYP/10+'px '+rXP/80+'px rgba(227,6,19,.8), '+rYP/8+'px '+rXP/60+'px rgba(255,237,0,1), '+rXP/70+'px '+rYP/12+'px rgba(0,159,227,.7)');
    });
});

document.getElementById("better-button").addEventListener("mouseenter", function() {
    this.textContent = "What else?";
  });
  
  document.getElementById("better-button").addEventListener("mouseleave", function() {
    this.textContent = "Let's try something else!";
  });
  
  document.getElementById("better-button").addEventListener("click", function() {
    this.classList.add("clicked");
    
    setTimeout(() => {
      window.location.href = "../page5/page5.html"; 
    }, 500); 
  });