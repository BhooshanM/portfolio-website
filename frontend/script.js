document.addEventListener("DOMContentLoaded", function () {

  // Intersection Observer for animations
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('show');

        if (entry.target.classList.contains('skill-progress')) {
          const level = entry.target.getAttribute('data-level');
          entry.target.style.setProperty('--skill-level', level);
        }
      }
    });
  }, { threshold: 0.2 });

  document.querySelectorAll('.fade-up, .skill-progress').forEach(el => observer.observe(el));

  // Mobile menu toggle
  const menuToggle = document.getElementById('menu-toggle');
  const mobileMenu = document.getElementById('mobile-menu');

  if (menuToggle) {
    menuToggle.addEventListener('click', () => {
      mobileMenu.classList.toggle('hidden');
    });
  }

  // Back to top button
  const backToTopButton = document.getElementById('back-to-top');

  window.addEventListener('scroll', () => {
    if (window.pageYOffset > 300) {
      backToTopButton.classList.remove('hidden');
    } else {
      backToTopButton.classList.add('hidden');
    }
  });

  backToTopButton.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  // Form submission
  const contactForm = document.getElementById('contact-form');

  contactForm.addEventListener("submit", async (e) => {
    e.preventDefault();

    const data = {
      name: contactForm.name.value,
      email: contactForm.email.value,
      projectType: contactForm.projectType.value,
      message: contactForm.message.value
    };

    try {
      const response = await fetch(
        "https://bhooshan-portfolio-backend.onrender.com/api/contact",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(data),
        }
      );

      const result = await response.json();

      if (response.ok) {
        alert(result.message);
        contactForm.reset();
      } else {
        alert(result.error || "Something went wrong");
      }
    } catch (error) {
      alert("Network error. Please try again later.");
    }
  });

});