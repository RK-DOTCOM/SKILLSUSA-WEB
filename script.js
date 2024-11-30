//JavaScript for smooth scroll and interactivity

// Smooth scroll for internal links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

// Button click event for "Get Involved"
document.querySelector('.cta-button').addEventListener('click', function () {
  alert('Thanks for your interest! Get ready to join and make a difference.');
});