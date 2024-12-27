---
layout: about
image: /assets/img/logo.jpeg
description: >
hide_description: true
cover: true
redirect_from:
  -
---

<!-- Typed-out Hello World container -->
<div id="hello-world"></div>

<!-- Simple typing effect in vanilla JavaScript -->
<script>
  const textToType = "Hello, world!";
  const typingSpeed = 100; // ms delay between each character
  let index = 0;

  function typeHelloWorld() {
    if (index < textToType.length) {
      document.getElementById("hello-world").innerHTML += textToType.charAt(index);
      index++;
      setTimeout(typeHelloWorld, typingSpeed);
    }
  }

  // Start typing as soon as the page loads
  window.addEventListener('DOMContentLoaded', (event) => {
    typeHelloWorld();
  });
</script>



<!--author-->
---
<br>
<br>




