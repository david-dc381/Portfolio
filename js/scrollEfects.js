(function() {
  window.addEventListener('scroll', function() {
    // function effects() {
    //   let about_img = document.getElementsByClassName(
    //       "about__container--img"
    //     )[0],
    //     about_decription = document.getElementsByClassName(
    //       "about__container--descrip"
    //     )[0],
    //     about__technologies = document.getElementsByClassName(
    //       "about__technologies"
    //     )[0],
    //     projects_portfolio = document.getElementsByClassName(
    //       "card__container"
    //     )[0],
    //     form_container = document.getElementsByClassName("input-group")[0],
    //     form_img = document.getElementsByClassName("img-container")[0];

    //     let distancia = window.pageYOffset;

    //     if (distancia <= about_img.offsetTop) {
    //       about_img.classList.add(
    //         "animate__animated",
    //         "animate__fadeInLeft",
    //         "animate__delay-2s"
    //       );
    //     }

    //     if (distancia <= about_decription.offsetTop) {
    //       about_decription.classList.add(
    //         "animate__animated",
    //         "animate__fadeInRight",
    //         "animate__delay-2s"
    //       );
    //     }
        
    //     if (distancia <= about__technologies.offsetTop) {
    //       about__technologies.classList.add(
    //         "animate__animated",
    //         "animate__fadeInDown",
    //         "animate__delay-3s"
    //       );
    //     }
        
    //     if (distancia <= projects_portfolio.offsetTop) {
    //       projects_portfolio.classList.add(
    //         "animate__animated",
    //         "animate__zoomIn",
    //         "animate__delay-4s"
    //       );
    //     }
        
    //     if (distancia <= form_container.offsetTop) {
    //       form_container.classList.add(
    //         "animate__animated",
    //         "animate__slideInLeft",
    //         "animate__delay-5s"
    //       );
    //     }
        
    //     if (distancia <= form_img.offsetTop) {
    //       form_img.classList.add(
    //         "animate__animated",
    //         "animate__slideInRight",
    //         "animate__delay-5s"
    //       );
    //     }
    // }
    // effects();


     function fade(direction) {
       let contenedor = document.querySelectorAll(".fade_" + direction);

       for (let i = 0; i < contenedor.length; i++) {
         // obtenemos el tamaño de la pantalla y lo dividimos para que el efecto surga un poco antes
         let alturaPantalla = window.innerHeight / 1.3;
         // este método nos devuelve el tamaño de un elemento y su posicion con respecto al viewport.
         let distancia = contenedor[i].getBoundingClientRect().top;

         contenedor[i].classList.add("transform_" + direction);

         if (distancia <= alturaPantalla) {
           contenedor[i].classList.add("aparece");
         }
       }
     }

     fade("left");
     fade("right");
     fade("up");
     fade("up2");
     fade("down");
     
  })
}());