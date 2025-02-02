document.addEventListener("DOMContentLoaded", function () {
  const themeToggle = document.getElementById("theme-toggle");
  const body = document.body;

  // Check saved theme
  if (localStorage.getItem("theme") === "dark") {
    body.classList.add("dark-mode");
  }

  themeToggle.addEventListener("click", () => {
    body.classList.toggle("dark-mode");

    // Save preference
    localStorage.setItem(
      "theme",
      body.classList.contains("dark-mode") ? "dark" : "light"
    );
  });
});
document.addEventListener("DOMContentLoaded", function () {
  const sections = document.querySelectorAll("section");
  const fadeElements = document.querySelectorAll(".fade-in");

  function revealOnScroll() {
    const triggerBottom = window.innerHeight * 0.85;

    sections.forEach((section) => {
      const sectionTop = section.getBoundingClientRect().top;

      if (sectionTop < triggerBottom) {
        section.classList.add("visible");
      }
    });

    fadeElements.forEach((el) => {
      const fadeTop = el.getBoundingClientRect().top;

      if (fadeTop < triggerBottom) {
        el.classList.add("visible");
      }
    });
  }

  window.addEventListener("scroll", revealOnScroll);
  revealOnScroll();
});
