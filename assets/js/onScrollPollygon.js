document.addEventListener('DOMContentLoaded', () => {
  // Triangle Animation
  const TriangleTarget = document.querySelector('[data-animation="triangle"]');
  if (TriangleTarget) {
    const observer = new IntersectionObserver(
      ([entry]) => {
        const VidBtn = document.querySelector(".playvid");
        if (entry.isIntersecting) {
          TriangleTarget.classList.add('reveal-clip1');

          if(entry.intersectionRatio >= 0.1) {
            VidBtn.classList.add('opacity-100', 'transition-opacity', 'duration-[1000ms]');
          }
          
        } else {
          // Scroll out: reverse stepwise collapse
          TriangleTarget.classList.remove('reveal-clip1');
          setTimeout(() => {
            TriangleTarget.classList.remove('expanded');
          }, 1500); // wait for transition of reveal-clip1 removal
        }
      },
      { threshold: 0.1 }
    );
    observer.observe(TriangleTarget);
  }


  // Global Animation with Marquee
  const globalTarget = document.querySelector('[data-animation="global"]');
  if (globalTarget) {
    const globalObserver = new IntersectionObserver(
      ([entry]) => {
        const marquees = document.querySelectorAll('.cmMarquee');
        if (entry.isIntersecting) {

          console.log('Trapezoid observer triggered', entry.isIntersecting); // 👈 ADD THIS

          globalTarget.classList.add('reveal-clip');

          marquees.forEach(el => {
            el.classList.remove('hidden');
            el.classList.add('opacity-0', 'transition-opacity', 'duration-[1000ms]');

            setTimeout(() => {
              el.classList.replace('opacity-0', 'opacity-100');
            }, 100);
          });
        } else {
          globalTarget.classList.remove('reveal-clip');

          marquees.forEach(el => {
            el.classList.replace('opacity-100', 'opacity-0');

            setTimeout(() => {
              el.classList.add('hidden');
            }, 1000);
          });
        }
      },
      {
        threshold: 0.3
      }
    );
    globalObserver.observe(globalTarget);
  }
});
