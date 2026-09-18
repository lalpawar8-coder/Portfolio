// Smooth active navigation
const navLinks = document.querySelectorAll(".nav-links a");

navLinks.forEach(link => {
  link.addEventListener("click", () => {
    navLinks.forEach(item => item.classList.remove("active"));
    link.classList.add("active");
  });
});

// Reveal elements when they enter the viewport
const observer = new IntersectionObserver((entries, obs) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
      obs.unobserve(entry.target);
    }
  });
}, {
  threshold: 0.12
});

document.querySelectorAll(".reveal").forEach(el => observer.observe(el));

// Current year
document.getElementById("year").textContent = new Date().getFullYear();

// Demo CV button
document.getElementById("cvBtn").addEventListener("click", (event) => {
  event.preventDefault();
  alert("Add your CV PDF link here.");
});
