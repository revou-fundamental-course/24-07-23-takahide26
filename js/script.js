/* Image Slider Script */

const slider = document.querySelector('.slider');
let slideIndex = 0;

function showSlides() {
    slideIndex++;
    if (slideIndex >= slider.children.length) {
        slideIndex = 0;
    }
    slider.style.transform = `translateX(-${slideIndex * 100}%)`;
    setTimeout(showSlides, 10000); /*Change slide every 10 seconds*/
}

showSlides();

/* Smooth Scroll Script */

document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('.menu a' );
    
    for (const link of navLinks) {
      link.addEventListener('click', smoothScroll);
    }
  
    function smoothScroll(event) {
      event.preventDefault();
  
      const targetId = this.getAttribute('href');
      const targetElement = document.querySelector(targetId);
  
      if (targetElement) {
        const headerOffset = 50; // Adjust this value based on your header height
        const elementPosition = targetElement.getBoundingClientRect().top;
        const offsetPosition = elementPosition - headerOffset;
  
        window.scrollBy({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    }
  });

/* validation Form Script */

  function validateForm() {
    var name = document.getElementById('name').value.trim();
    var email = document.getElementById('email').value.trim();
    var interest = document.getElementById('interest').value;

    /* Name check */
    if (name === '') {
        alert('Why your name is empty? :(');
        return false;
    }
    
    /* Email check */
    if (email === '') {
        alert('Why your email is empty? :(');
        return false;
    }

    /* Email validation Check */
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email.match(emailRegex)) {
        alert('You sure your email is right? no typos?');
        return false;
    }

    /* Interest Validation check */
    if (interest === 'null') {
        alert('Please select your interest.');
        return false;
    }

    return true; /* All Clear, Form is valid, allow submission */ 
}

/* Add event listener to the form on submit */
document.querySelector('form').addEventListener('submit', function (event) {
    if (!validateForm()) {
        event.preventDefault(); /* "YOU SHALL NOT PASS SCRIPT" Prevent form submission if validation fails */
    }
});
  