---
layout: about
image: /assets/img/logo.jpeg
description: >
hide_description: true
cover: true
redirect_from:
  -
---


<!-- Container for typed-out text -->
<div id="typed-hello-world" style="font-size: 2rem; font-family: monospace;"></div>

<script>
  const textToType = "Hello, world!";
  const typingSpeed = 100; // Adjust as desired (milliseconds)
  let index = 0;

  function typeHelloWorld() {
    if (index < textToType.length) {
      document.getElementById("typed-hello-world").innerHTML += textToType.charAt(index);
      index++;
      setTimeout(typeHelloWorld, typingSpeed);
    }
  }

  // Start typing effect on page load
  document.addEventListener("DOMContentLoaded", () => {
    typeHelloWorld();
  });
</script>

---



<!--author-->
<br>
<br>




