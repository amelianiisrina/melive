document.addEventListener("DOMContentLoaded", () => {
    const elements = document.querySelectorAll('.fade-up');

    console.log("fade-up elements:", elements.length);

    const observer = new IntersectionObserver((entries, obs) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                obs.unobserve(entry.target);
            }
        });
    }, { threshold: 0,
         rootMargin: '0px 0px -50px 0px'   });

    elements.forEach((el, i) => {
        console.log(i, el.id || el.className);
        observer.observe(el);
    });
});