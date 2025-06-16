// main.js

// Fade logo on scroll
window.addEventListener('scroll', () => {
  const logoSection = document.querySelector('.hero');
  const scroll = window.scrollY;
  logoSection.style.opacity = 1 - scroll / 600;
});

console.log('Zeditron JS Loaded');
// Scroll fade-out effect for hero
window.addEventListener('scroll', () => {
  const hero = document.querySelector('.hero');
  const scroll = window.scrollY;
  hero.style.opacity = 1 - scroll / 600;

  // Scroll animation for sections
  document.querySelectorAll('section').forEach(section => {
    const rect = section.getBoundingClientRect();
    if (rect.top < window.innerHeight - 100) {
      section.classList.add('visible');
    }
  });
});

console.log('Zeditron effects loaded');