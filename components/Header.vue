<template>
    <header>
        <nav>
          <h2 class="logo">
            <a href="#">Kama<span>chi</span></a>
          </h2>
          <ul class="nav-links">
            <li><a href="https://kamablog.netlify.app/">Blog</a></li>
            <li><a href="#">Portfolio</a></li>
            <li>
              <a href="https://twitter.com/akcatchang" class="btn">Contact</a>
            </li>
            <li>
              <a id="toggleTheme">
                <span>Dark</span>
              </a>
            </li>
          </ul>

          <!-- burger menu-->
          <div class="burger" id="burgerMenu">
            <div class="line1"></div>
            <div class="line2"></div>
            <div class="line3"></div>
          </div>
        </nav>
      </header>
</template>
  
<script setup>
// const burger = document.querySelector(".burger");
// const nav = document.querySelector(".nav-links");
// const navLinks =document.querySelectorAll(".nav-links li");

// burger.addEventListener("click", () => {
//     nav.classList.toggle("nav-active");

//     navLinks.forEach((link, index) => {
//         if(link.style.animation) {
//             link.style.animation = ""
//         } else {
//             link.style.animation = `navLinksFade 0.5s ease forwards ${
//                 index / 7 + 0.4
//             }s`;
//         }
//     });
//     burger.classList.toggle("toggle");
// });

</script>
  
<style>

</style>