// main.js

// Fade logo on scroll
window.addEventListener('scroll', () => {
  const logoSection = document.querySelector('.hero');
  const scroll = window.scrollY;
  logoSection.style.opacity = 1 - scroll / 600;
});

console.log('Zeditron JS Loaded');
