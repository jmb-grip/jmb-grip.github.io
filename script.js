// Subtle background parallax / texture following the cursor
(function () {
  const root = document.documentElement;

  function handleMove(e) {
    const x = (e.clientX / window.innerWidth) * 100;
    const y = (e.clientY / window.innerHeight) * 100;
    root.style.setProperty("--bg-x", `${x}%`);
    root.style.setProperty("--bg-y", `${y}%`);
  }

  window.addEventListener("mousemove", handleMove);
})();

// Scroll reveal animations
(function () {
  const items = document.querySelectorAll(".reveal");
  if (!("IntersectionObserver" in window) || items.length === 0) {
    items.forEach((el) => el.classList.add("reveal-visible"));
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("reveal-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.16,
    }
  );

  items.forEach((el) => observer.observe(el));
})();

// Set current year in footer
(function () {
  const yearSpan = document.getElementById("year");
  if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
  }
})();
