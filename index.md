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
    <span class='icon-arrow-left2'></span>
  </button>
  <button class="carousel-button right" id="carousel-right" aria-label="Next slide">
    <span class='icon-arrow-right2'></span>
  </button>
</div>

<!-- Link to Carousel Styles and Scripts -->
<link rel="stylesheet" href="{{ '/assets/css/carousel.css' | relative_url }}">
<script src="{{ '/assets/js/carousel.js' | relative_url }}"></script>
---
