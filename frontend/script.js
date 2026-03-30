document.addEventListener("DOMContentLoaded", function () {

  // Wake up backend when site loads (Render free tier fix)
  fetch("https://bhooshan-portfolio-backend.onrender.com/");

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
      name: contactForm.name.value.trim(),
      email: contactForm.email.value.trim(),
      projectType: contactForm.projectType.value,
      message: contactForm.message.value.trim()
    };

    // Empty fields check
    if (!data.name || !data.email || !data.message) {
      alert("Please fill all required fields.");
      return;
    }

    // Name validation (only letters)
    const nameRegex = /^[A-Za-z ]+$/;
    if (!nameRegex.test(data.name)) {
      alert("Name should contain only letters.");
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(data.email)) {
      alert("Enter a valid email address.");
      return;
    }

    try {
      // Auto switch between local and deployed backend
      const API_URL =
        window.location.hostname === "localhost" ||
        window.location.hostname === "127.0.0.1"
          ? "http://localhost:5000/api/contact"
          : "https://bhooshan-portfolio-backend.onrender.com/api/contact";

      const response = await fetch(API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (response.ok) {
        alert("Message sent successfully! I will contact you soon.");
        contactForm.reset();
      } else {
        alert(result.error || "Something went wrong");
      }

    } catch (error) {
      console.error(error);
      alert("Server is waking up, please try again in a few seconds.");
    }
  });

});