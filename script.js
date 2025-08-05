// Smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

// Simple form handler
document.querySelector('form')?.addEventListener('submit', function(e) {
  e.preventDefault();
  alert('Thanks! Your message has been sent.');
});




