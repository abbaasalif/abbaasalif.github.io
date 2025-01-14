---
layout: list
title: Gallery
permalink: /gallery/
---

<div class="gallery-container">
  {% assign images = site.static_files | where_exp: "image", "image.path contains '/assets/gallery/'" %}
  {% if images.size > 0 %}
    {% for image in images %}
    <div class="gallery-item">
      <a href="{{ image.path }}" data-lightbox="gallery" data-title="Gallery Image">
        <img src="{{ image.path }}" alt="Gallery Image" loading="lazy">
      </a>
    </div>
    {% endfor %}
  {% else %}
    <p>No images available in the gallery. Please add some images to the <code>assets/gallery</code> directory.</p>
  {% endif %}
</div>


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
