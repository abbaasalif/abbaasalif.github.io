---
layout: page
title: Gallery
permalink: /gallery/
---

<h1>Gallery</h1>

<div class="gallery-container">
  {% assign images = site.static_files | where: "path", "/assets/gallery" %}
  {% for image in images %}
  <div class="gallery-item">
    <a href="{{ image.path }}" data-lightbox="gallery" data-title="Gallery Image">
      <img src="{{ image.path }}" alt="Gallery Image" loading="lazy">
    </a>
  </div>
  {% endfor %}
</div>

<!-- Add Lightbox CSS -->
<link href="https://cdnjs.cloudflare.com/ajax/libs/lightbox2/2.11.3/css/lightbox.min.css" rel="stylesheet">

<!-- Add Lightbox JS -->
<script src="https://cdnjs.cloudflare.com/ajax/libs/lightbox2/2.11.3/js/lightbox.min.js"></script>

<style>
  .gallery-container {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
    gap: 10px;
    margin-top: 20px;
  }
  .gallery-item img {
    width: 100%;
    height: auto;
    border-radius: 8px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s ease;
  }
  .gallery-item img:hover {
    transform: scale(1.05);
  }
</style>
