$(document).ready(function(){
  // Seleccionamos elementos en variables
  var slider = $('#slider');
  var btnAnterior = $('#btnAnterior');
  var btnSiguiente = $('#btnSiguiente');

  // Se paso el último slide al primer lugar

  /*En jquery podemos acceder a los elementos como en css, accedemos
  a el contenedor slider y de los sliders que tiene al último slider
  y después al primer slider. Con esto cambiamos de lugar el último
  slider al lugar del primero.*/
  $('#slider .card__container .slide:last').insertBefore('#slider .card__container .slide:first');

  // Con margen negativo se vuelve a mostrar el primer slide
  // Mostramos el primer slider en medio
  slider.css('margin-left', '-43%');

  // Función para el silde se mueva a la derecha
  function moverDerecha() {
    /*Si el slider no está animado, ejecutamos el código, está condicional
    nos sirve para evitar el desplazamiento continuo cuando apretamos varias
    veces el boton de siguiente*/
    if (!slider.is(':animated')) {
      //creamos una animación
      slider.animate({
        //La animación hara que el slide recorra a la siguiente img en 7milisegundos
        marginLeft: '-75.6%'
      }, 700, function() {
        //este callback, hace que la primera img se ponga delante la última img
        $('#slider .card__container .slide:first').insertAfter('#slider .card__container .slide:last');
        /*y al cambiar de posisción recorremos otra vez -43% de margen, para centrar
        la img actual y no se nos muestre la img bruscamente*/
        slider.css('margin-left', '-33%');
        //limpiamos el intervalo cada vez que presionemos el botón
        resetInterval();
      });
    }
  }
  //la función la repetimos cada vez que demos clik en el botón de la derecha
  btnSiguiente.on('click', moverDerecha);




  //Funcion para que el slide se mueva a la izquierda
  function moverIzquierda() {
    /*Si el slider no está animado, ejecutamos el código, está condicional
    nos sirve para evitar el desplazamiento continuo cuando apretamos varias
    veces el boton de izquierda*/
    if (!slider.is(':animated')) {
      //Primero cambiamos las ultima img antes de la primera
      $('#slider .card__container .slide:last').insertBefore('#slider .card__container .slide:first');
      //mantenemos el margen en -105.6%, para que no haga un cambio brusco a la anteior img
      slider.css('margin-left', '-105.6%');
      //despues damos la animacion de 7milisegundos, recorriendo el margen -43%, para evitar el cambio brusco
      slider.animate({
        marginLeft: '-43%'
      }, 700, function(){
        //limpiamos el intervalo cada vez que presionemos el botón
        resetInterval();
      });
    }
  }
  // repetimos la funcion cada vez que demos click en el boton de la izquierda
  btnAnterior.on('click', moverIzquierda);


  //Intervalo para que el slide se mueva automaticamente
  //le damos un intervalo de 5segundos para mover automaticamente
  var intervalo = setInterval(moverDerecha, 5000);

  //creamos una funcion para usar el intervalo
  function resetInterval(){
    //limpiamos el intervalo, para que nos se ejecute cada vez que demos click a un botón
    clearInterval(intervalo);
    //una vez limpiado el intervalo, lo volvemos a crear para que siga automaticamente
    intervalo = setInterval(moverDerecha, 5000);
  }

});