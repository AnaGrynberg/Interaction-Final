document.addEventListener('DOMContentLoaded', function() {
    const letterSpan = document.querySelector('.change-letter');
    const arrowLink = document.querySelector('.arrow-link');

    letterSpan.addEventListener('mouseover', function() {
        this.textContent = 'A';
        this.classList.add('change-letter-a');
    });

    letterSpan.addEventListener('mouseout', function() {
        this.textContent = 'E';
        this.classList.remove('change-letter-a');
    });

   
    setTimeout(function() {
        arrowLink.style.display = 'inline';
    });
});