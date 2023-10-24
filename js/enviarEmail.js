const d = document,
      enviarForm = d.getElementById("enviarForm"),
      loader = d.getElementById('loader'),
      mensajeEnviado = d.getElementById('mensajeEnviado'),
      nombre = d.getElementById('name'),
      email = d.getElementById('email'),
      mensaje = d.getElementById('message');

      enviarForm.addEventListener('submit', (e) => {
        
        e.preventDefault();
        // alert("Se envio el mensaje")
        
        if (nombre.value !== "" && email.value !== "" && mensaje.value !== "") {
            fetch("https://formsubmit.co/ajax/52cd00cb127682b39d871ef42d3ede4e", {
              method: "POST",
              body: new FormData(e.target)
            })
              .then(res => res.ok ? res.json(): Promise.reject(res))
              .then(json => {
                console.log(json);
                loader.classList.remove("hide-loader");
                loader.classList.add("show-loader");
          
                setTimeout(() => {
                  enviarForm.reset();
                  loader.classList.add("hide-loader");
                  loader.classList.remove("show-loader");  
                }, 1500);
          
                setTimeout(() => {
                  mensajeEnviado.classList.add("show-mensaje");
                  mensajeEnviado.classList.remove("hide-mensaje");
                }, 1600);
          
                setTimeout(() => {
                  mensajeEnviado.classList.remove("show-mensaje");
                  mensajeEnviado.classList.add("hide-mensaje");
                }, 4000);
                
          
              })
              .catch(err => {
                console.log(err);
              })
            
            } else {
              return;
            } 
      
  });
    