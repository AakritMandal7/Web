
const hamburger = document.getElementById('hamburger');
  const navbar = document.getElementById('navbar');

  hamburger.addEventListener('click', () => {
    navbar.classList.toggle('active');
  });

  window.addEventListener("scroll", function () {
    const bg = document.querySelector(".animated-bg");
    const scrollY = window.scrollY;
    bg.style.transform = `translateY(${scrollY * 0.2}px)`;
  });

