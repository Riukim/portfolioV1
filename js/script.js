document.addEventListener("DOMContentLoaded", function () {
  var navbar = document.getElementById("navbar-modified");

  function updateNavbarStyle() {
      var scrollPosition = window.scrollY;
      var windowWidth = window.innerWidth;

      if (windowWidth > 992) {
          if (scrollPosition > 0) {
              navbar.classList.remove("bg-transparent");
              navbar.classList.add("bg-body-tertiary", "navbar-scrolled");
          } else {
              navbar.classList.remove("bg-body-tertiary", "navbar-scrolled");
              navbar.classList.add("bg-transparent");
          }
      } else {
          navbar.classList.remove("bg-transparent", "navbar-scrolled");
          navbar.classList.add("bg-body-tertiary");
      }
  }

  // funzione di aggiornamento al caricamento della pagina
  updateNavbarStyle();

  // scroll per gestire i cambiamenti nella posizione di scroll
  document.addEventListener("scroll", function () {
      updateNavbarStyle();
  });

  // resize per gestire i cambiamenti nella larghezza della finestra
  window.addEventListener("resize", function () {
      updateNavbarStyle();
  });
});


const toggleBtn = document.querySelector(".navbar-toggler");
const toggleBtnIcon = document.querySelector(".navbar-toggler i");
const dropDownMenu = document.querySelector(".collapse");
  
toggleBtn.onclick = function () {
    dropDownMenu.classList.toggle("open");
    const isOpen = dropDownMenu.classList.contains("open");
  
    toggleBtnIcon.classList = isOpen ? "fa-solid fa-xmark fa-2x" : "fa-solid fa-bars fa-2x";
};
