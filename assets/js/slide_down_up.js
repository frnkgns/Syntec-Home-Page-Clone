document.addEventListener("DOMContentLoaded", () => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          } else {
            entry.target.classList.remove("visible");
          }
        });
      },
      {
        threshold: 0.1, // Adjust this if needed
      }
    );

    document.querySelectorAll(".slide-up").forEach((el) => {
      observer.observe(el);
    });
  });