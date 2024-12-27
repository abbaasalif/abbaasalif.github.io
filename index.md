---
layout: about
image: /assets/img/logo.jpeg
description: >
  Welcome to my portfolio! Explore my projects, gallery, and achievements in business analytics, data science, and more.
hide_description: true
cover: true
redirect_from:
  - 
---

<!-- Welcome Section -->
![Hello World Image](/assets/img/hello.gif)

---

<!--author-->

<!-- Custom Carousel Section -->
<div id="galleryCarousel" class="carousel">
  <div class="carousel-images" id="carousel-images">
    {% assign images = site.static_files | where_exp: "image", "image.path contains '/assets/gallery/'" %}
    {% if images.size > 0 %}
      {% for image in images %}
      <div class="carousel-item {% if forloop.first %}active{% endif %}">
        <img src="{{ image.path }}" alt="Gallery Image {{ forloop.index }}" loading="lazy">
      </div>
      {% endfor %}
    {% else %}
      <div class="carousel-item active">
        <img src="/assets/img/default.jpg" alt="Default Image" loading="lazy">
      </div>
    {% endif %}
  </div>
  <button class="carousel-button left" id="carousel-left" aria-label="Previous slide">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" style="width: 24px; height: 24px; fill: white;">
      <path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.2 288 416 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-306.7 0L214.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z"/>
    </svg>
  </button>
  <button class="carousel-button right" id="carousel-right" aria-label="Next slide">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" style="width: 24px; height: 24px; fill: white;">
      <path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L229.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"/>
    </svg>
  </button>
</div>

<style>
  .carousel {
    position: relative;
    width: 400px;
    margin: 0 auto;
    overflow: hidden;
    background-color: #f4f4f4;
  }

  .carousel-images {
    display: flex;
    transition: transform 0.5s ease-in-out;
  }

  .carousel-item {
    flex: 0 0 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .carousel-item img {
    max-width: 100%;
    height: auto;
    object-fit: contain;
    display: block;
  }

  .carousel-button {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    background-color: rgba(0, 0, 0, 0.5);
    border: none;
    padding: 10px;
    cursor: pointer;
    z-index: 10;
  }

  .carousel-button.left {
    left: 10px;
  }

  .carousel-button.right {
    right: 10px;
  }

  @media (max-width: 768px) {
    .carousel-button {
      padding: 5px;
      top: 40%;
    }
  }
</style>

<script>
  {% raw %}
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
  {% endraw %}
</script>
---
