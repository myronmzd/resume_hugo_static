document.addEventListener("DOMContentLoaded", () => {
  const elements = document.querySelectorAll(".scroll-animate");

  // If no elements, don't set up observer
  if (elements.length === 0) return;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
        }
      });
    },
    { 
      threshold: 0.05,
      rootMargin: "0px 0px -100px 0px"
    }
  );

  elements.forEach(el => {
    // Check if element is already visible on page load
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight && rect.bottom > 0) {
      el.classList.add("show");
    }
    observer.observe(el);
  });
});
