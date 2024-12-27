document.addEventListener("DOMContentLoaded", () => {
    const images = document.querySelectorAll(".carousel-item");
    const imagesContainer = document.getElementById("carousel-images");
    const leftButton = document.getElementById("carousel-left");
    const rightButton = document.getElementById("carousel-right");
    let currentIndex = 0;
  
    function updateCarousel() {
      const offset = currentIndex * -100;
      imagesContainer.style.transform = `translateX(${offset}%)`;
    }
  
    function moveSlide(direction) {
      currentIndex = (currentIndex + direction + images.length) % images.length;
      updateCarousel();
    }
  
    // Button Click Handlers
    leftButton.addEventListener("click", () => moveSlide(-1));
    rightButton.addEventListener("click", () => moveSlide(1));
  
    // Auto-Switch Slides
    let autoSwitch = setInterval(() => moveSlide(1), 5000);
  
    // Pause Auto-Switch on Interaction
    [leftButton, rightButton].forEach(button =>
      button.addEventListener("click", () => {
        clearInterval(autoSwitch);
        autoSwitch = setInterval(() => moveSlide(1), 5000);
      })
    );
  
    // Initialize carousel
    updateCarousel();
  });
  