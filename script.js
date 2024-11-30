// JavaScript to toggle the hamburger menu and hide/show navbar
const hamburger = document.getElementById('hamburger-menu');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
    // Toggle 'active' class to show or hide the navbar
    navLinks.classList.toggle('active');
    
    // Toggle the visibility of the navbar links
    if (navLinks.classList.contains('active')) {
        navLinks.style.display = 'block'; // Show navbar links
    } else {
        navLinks.style.display = 'none'; // Hide navbar links
    }
});

