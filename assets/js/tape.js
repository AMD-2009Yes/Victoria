const initSlider = () => {
    const DEFAULT_SPEED = 1.5;

    const slider = document.querySelector(".slider");
    if (!slider) return;

    const wrapper = document.querySelector(".slider-track");

    wrapper.innerHTML += wrapper.innerHTML;

    let speed = DEFAULT_SPEED;
    let position = 0;

    slider.addEventListener("mouseenter", () => {
      speed = DEFAULT_SPEED / 1.5;
    });

    slider.addEventListener("mouseleave", () => {
      speed = DEFAULT_SPEED;
    });

    function animate() {
      position -= speed;

      if (Math.abs(position) >= wrapper.scrollWidth / 1.5) {
        position = 0;
      }

      wrapper.style.transform = `translateX(${position}px)`;
      requestAnimationFrame(animate);
    }

    animate();
  }

  initSlider();