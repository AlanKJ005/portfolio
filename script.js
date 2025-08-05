// Smooth scroll for all anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

// Optional: Basic form validation
const form = document.querySelector('form');
if (form) {
  form.addEventListener('submit', function(e) {
    const name = form.querySelector('input[type="text"]');
    const email = form.querySelector('input[type="email"]');
    if (!name.value.trim() || !email.value.trim()) {
      alert("Please fill out all required fields.");
      e.preventDefault();
    }
  });
}

// Optional: Mobile menu toggle (if you add a hamburger later)
// const menuToggle = document.querySelector('.menu-toggle');
// const nav = document.querySelector('nav');
// menuToggle.addEventListener('click', () => {
//   nav.classList.toggle('open');
// });





