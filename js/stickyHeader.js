(function (){
  const scroll       = document.getElementById('menu-pc');
  const scrollMobile = document.getElementById('menu-mobile');

  window.onscroll = () => {
    if (document.documentElement.scrollTop > 140) {
      scroll.style.backgroundColor = "#006bff";
      scroll.style.boxShadow = "0px 20px 50px 0px rgba(0, 0, 0, 0.1)";
      scroll.style.transition = "all .5s ease-out";
      
      scrollMobile.style.backgroundColor = "#006bff";
      scrollMobile.style.boxShadow = "0px 20px 50px 0px rgba(0, 0, 0, 0.1)";
      scrollMobile.style.transition = "all .5s ease-out";


    } else {
      scroll.style.backgroundColor = "#006bff";
      scroll.style.boxShadow = "none";
      scroll.style.transition = "all .5s ease-in";
      
      scrollMobile.style.backgroundColor = "#006bff";
      scrollMobile.style.boxShadow = "none";
      scrollMobile.style.transition = "all .5s ease-in";
    }
  }

})();
