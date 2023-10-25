(function (){
  const scroll       = document.getElementById('menu-pc');
  const scrollMobile = document.getElementById('menu-mobile');

  window.onscroll = () => {
    if ((document.documentElement.scrollTop > 140) || (document.querySelector('.change'))) {
      // scroll.style.backgroundColor = "#001531";
      scroll.style.background = "rgba( 255, 255, 255, 0.25 )";
      scroll.style.boxShadow = "0 8px 32px 0 rgba( 31, 38, 135, 0.37 )";
      scroll.style.backdropFilter = "blur( 4px )";
      scroll.style.transition = "all .1s ease-in";

      
      scrollMobile.style.background = "rgba( 255, 255, 255, 0.25 )";
      scrollMobile.style.boxShadow = "0 8px 32px 0 rgba( 31, 38, 135, 0.37 )";
      scrollMobile.style.backdropFilter = "blur( 4px )";
      scrollMobile.style.transition = "all .5s ease-out";


    } else {
      scroll.style.background = "transparent";
      scroll.style.boxShadow = "none";
      scroll.style.backdropFilter = "none";
      scroll.style.transition = "all .1s ease-out";
      
      scrollMobile.style.backgroundColor = "transparent";
      scrollMobile.style.boxShadow = "none";
      scrollMobile.style.transition = "all .5s ease-in";
    }
  }

})();
