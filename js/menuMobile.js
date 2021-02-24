(function() {

  // Propiedades
  let propiedadesMenu = {
    burgerMenu:    document.getElementById('burger-menu'),
    slideMenu:     document.getElementById('slide-menu'),
    elementosMenu: document.querySelectorAll('#slide-menu .main-menu__list .main-menu__item .main-menu__link'),
    closeMenu:     document.getElementById('close-image'),
    menuActivo:    false,   
  }

  // Métodos
  let metodosMenu = {
    inicio: () => {
      propiedadesMenu.burgerMenu.addEventListener(
        "click",
        metodosMenu.toggleMenu
      );

      for (let i = 0; i < propiedadesMenu.elementosMenu.length; i++) {
        propiedadesMenu.elementosMenu[i].addEventListener("click", metodosMenu.ocultarMenu);
      }

      propiedadesMenu.closeMenu.addEventListener('click', metodosMenu.ocultarMenu);
    },

    toggleMenu: () => {
      if (propiedadesMenu.menuActivo == false) {
        propiedadesMenu.menuActivo = true;
        propiedadesMenu.slideMenu.style.top = "0";
        propiedadesMenu.slideMenu.style.left = "0";
        propiedadesMenu.slideMenu.style.transition = "all .5s ease-out";
      } else {
        propiedadesMenu.menu_activo = false;
        propiedadesMenu.slideMenu.style.top = "-100vh";
        propiedadesMenu.slideMenu.style.transition = "all .5s ease-out";
      }
    },

    ocultarMenu: () => {
      propiedadesMenu.menuActivo = false;
      propiedadesMenu.slideMenu.style.top = "-100vh";
      propiedadesMenu.slideMenu.style.transition = "all .5s ease-out";
    },
  };

  metodosMenu.inicio();
})();