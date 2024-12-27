---
layout: about
image: /assets/img/logo.jpeg
description: >
hide_description: true
cover: true
redirect_from:
  -
---

<!-- type out Hello World -->
![Hello World Image](/assets/img/hello.gif)

---



<!--author-->
<br>
<br>

<div id="galleryCarousel" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-inner">
    {% assign images = site.static_files | where: "path", "/assets/gallery" %}
    {% for image in images %}
    <div class="carousel-item {% if forloop.first %}active{% endif %}">
      <img src="{{ image.path }}" class="d-block w-100" alt="Gallery Image">
    </div>
    {% endfor %}
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

<!-- Add Bootstrap CSS -->
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">

<!-- Add Bootstrap JS -->
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"></script>





