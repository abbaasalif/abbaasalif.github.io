---
layout: about
image: /assets/img/logo.jpeg
description: >
  Explore my projects, gallery, and achievements in business analytics, data science, and more.
hide_description: true
cover: true
redirect_from:
  - 
---

<!-- Welcome Section -->


![Hello World Image](/assets/img/hello.gif)

---

<!--author-->

</br>
</br>

<!-- Carousel Section -->
<div id="galleryCarousel" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-inner">
    {% assign images = site.static_files | where_exp: "image", "image.path contains '/assets/gallery/'" %}
    {% if images.size > 0 %}
      {% for image in images %}
      <div class="carousel-item {% if forloop.first %}active{% endif %}">
        <img src="{{ image.path }}" class="d-block w-100" alt="Gallery Image">
      </div>
      {% endfor %}
    {% else %}
      <p>No images available in the gallery. Please check back later!</p>
    {% endif %}
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#galleryCarousel" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#galleryCarousel" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>

---

<!-- Add Bootstrap CSS -->
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">

<!-- Add Bootstrap JS -->
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"></script>






