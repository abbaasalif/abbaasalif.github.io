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
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
      <path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.2 288 416 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-306.7 0L214.6 118.6c-12.5-12.5-12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z"></path>
    </svg>
  </button>
  <button class="carousel-button right" id="carousel-right" aria-label="Next slide">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
      <path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L229.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"></path>
    </svg>
  </button>
</div>

<!-- Link to Carousel Styles and Scripts -->
<link rel="stylesheet" href="{{ '/assets/css/carousel.css' | relative_url }}">
<script src="{{ '/assets/js/carousel.js' | relative_url }}"></script>
---
