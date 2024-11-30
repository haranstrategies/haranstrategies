// JavaScript to toggle the hamburger menu
const hamburger = document.getElementById('hamburger-menu');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});
