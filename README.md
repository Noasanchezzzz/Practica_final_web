# Practica_final_web








#huellas {
  gap: 30px;
  position: relative;
  height: 135vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: hidden; /* Ocultar las huellas que salen del viewport */
}
.huella-container {
  position: relative; /* Establecer el contenedor con posición relativa */
  display: flex;
  justify-content: center;
  opacity: 0; /* Se mantiene invisible hasta que esté en vista */
  transform: translateY(50px); /* Desplazamiento inicial */
  transition: opacity 0.9s ease, transform 0.4s ease; /* Animación */
}
.huella-container.is-visible {
  opacity: 1;  /* Hace visibles las huellas y el texto */
  transform: translateY(0); /* Las mueve a su posición original */
}

.huella-text {
  position: absolute;
  left: -250%;  /* Posiciona el texto al lado de las huellas */
  top: 50%;  /* Centra el texto verticalmente */
  transform: translateY(-50%);  /* Ajuste fino para centrar el texto */
  text-align: left;
  white-space: nowrap;
  max-width: 200px;  /* Ajusta el ancho máximo si el texto es largo */
  font-family: var(--ff-title);
  color: var(--clr-secondary);
  position: absolute;
  font-size: 25px;
}




.huella {
  width: 120px; /* Tamaño de las huellas */
}

.huella1 {
  width: 120px; /* Tamaño de las huellas */
  transform: translateX(80px) rotate(344deg); /* Zigzag a la derecha */
}
.huella2{
  width: 120px; /* Tamaño de las huellas */
  transform: translateX(160px) rotate(352deg); /* Zigzag a la izquierda */
}
.huella3{
  width: 120px; /* Tamaño de las huellas */
  transform: translateX(160px) rotate(12deg); /* Zigzag a la izquierda */
}
.huella4{
  width: 120px; /* Tamaño de las huellas */
  transform: translateX(120px) rotate(34deg); /* Zigzag a la izquierda */
}
.huella5{
  width: 120px; /* Tamaño de las huellas */
  transform: translateX(50px) rotate(35deg); /* Zigzag a la izquierda */
}
.huella6{
  width: 120px; /* Tamaño de las huellas */
  transform: translateX(0px) rotate(16deg); /* Zigzag a la izquierda */
}


/* Estilo para el área de arrastre */
#linterna{
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 40px;
}
#draggable {
  width: 400px;
  height: 200px;
  float: left;
  cursor: pointer;
  background-image: url(../img/LINTERNA.png);
  background-size: cover;
  background-position: center;
  display:flex !important;
  color: var(--clr-primary);
}#draggable:hover {
  transform: scale(1.1); /* Aumenta el tamaño en un 10% */
  transition: transform 0.3s ease, box-shadow 0.3s ease; /* Transición suave */
}


/* Estilo para el área de drop */
#droppable {
  width: 600px;
  height: 600px;
  float: left;
  background-color: black; /* Fondo negro */
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  color: var(--clr-primary);
}

/* Imagen contenedor */
#droppedImage {
  display: none; /* Inicialmente oculta */
  width: 600px;
  height: 600px;
  background-image: url(../img/ESCENA_CRIMEN.png);
  background-size: cover;
  background-position: center;
  position: relative;
}
/* Estilo para el libro */
#book {
  position: absolute;
  width: 80px; /* Ajusta el tamaño del libro */
  cursor: pointer;
}

/* Estilo para la camiseta */
#tshirt {
  position: absolute;
  width: 90px; /* Ajusta el tamaño de la camiseta */
  cursor: pointer;
}

/* Hover Zoom In para libro */
#book:hover {
  transform: scale(1.05); /* Aumenta el tamaño al 120% */
  transition: transform 0.3s ease-in-out; /* Transición suave */
}

/* Hover Zoom In para camiseta */
#tshirt:hover {
  transform: scale(1.05); /* Aumenta el tamaño al 120% */
  transition: transform 0.3s ease-in-out; /* Transición suave */
}
#productModal{
  background-color: var(--clr-secondary);
}
.close {
  position: absolute;
  right: 30px;
  color: white;
  font-size: 35px;
  font-weight: bold;
  cursor: pointer;
  top: 0;
}

.close:hover,
.close:focus {
  color: red;
  text-decoration: none;
  cursor: pointer;
}
.modal-backdrop.show {
  opacity: 0
}
.modal-backdrop {
  position: relative;
}
.modal-content{
  background-color: var(--ff-opacity);
  max-width: 100%;
  width: 100%;
  margin:auto 20px;
  border-radius: 0;
}
.modal-header {
  border-bottom: 0;
  border-top-left-radius: 0;
  border-top-right-radius: 0;
  margin: 4px;
  display: flex;
  justify-content: flex-end;
  padding: 10px;
}
.modal-body {
  padding: 0;
  color: var(--clr-white);
  overflow: hidden;
}
.text-muted {
  color: var(--clr-white) !important;
  font-weight: bold;
}
.product-info {
  max-width: 600px;
  font-family: var(--ff-body);
  padding: 10px;
}
.product-info h2 {
  font-family: Inconsolata;
  color: var(--clr-primary);
}

/* Visor 3D */
#modelViewerContainer > model-viewer {
  height: 400px;
  max-height: 400px;
}

/* Estilos del botón */
.btn-custom {
  background-color: var(--clr-primary);
  font-family: var(--ff-body);
  color: var(--clr-black);
  border: none;
  padding: 10px 20px;
  font-size: 16px;
  border-radius: 0 !important;
  transition: background-color 0.3s ease, transform 0.2s ease;
  
}

.btn-custom:hover {
  background-color: var(--clr-black);
  transform: scale(1.05);
  color: var(--clr-primary);
}
/* Cambiar el color de fondo de los botones */
.btn-outline-secondary {
  background-color: var(--clr-primary); /* Color de fondo normal */
  font-family: var(--ff-body);
  color: var(--clr-black); /* Color de texto */
  border: 1px solid var(--clr-black); /* Color del borde */
  border-radius: 0; /* Elimina los bordes redondeados */
}

/* Cambiar el color de fondo cuando pasas el cursor sobre el botón (hover) */
.btn-outline-secondary:hover {
  background-color: var(--clr-black); /* Color de fondo en hover */
  color: var(--clr-primary); /* Color de texto en hover */
  border-color: rgba(255, 255, 255, 0); /* Color del borde en hover */
}

/* Diseño principal */
.product-detail-section {
  display: flex;
  justify-content: space-around;
  gap: 30px;
}

/* Columnas para el modelo 3D y la info */
.col-md-6 {
  flex: 0 0 auto;
  width: 50%;
}

.product-info .mt-4 h5 {
  font-size: 20px;
}/* ESCENARIO CASA */
#light-effect-section {
  position: relative;
  width: 100%;
  height: 90vh; /* Ocupa la pantalla completa */
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column-reverse;
}

.light-effect-container {
  position: relative;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

#light-effect-image {
  width: 600px; /* Ajusta el tamaño de la imagen */
  height: 600px;
  opacity: 0; /* Inicialmente invisible */
  transition: opacity 0.5s ease-in-out; /* Transición suave para opacidad */
  cursor: pointer;
}
.product-info h3 {
  font-family: var(--ff-title);
  color: var(--clr-primary);
  font-size: 25px;
}
h4{
  font-family: var(--ff-title);
  color: var(--clr-secondary);
  font-size: 25px;
}#final-effect-section {
  gap: 30px;
  width: 100%;
  height: 90vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column-reverse;
}

#final-effect-image {
  width: 600px; /* Ajusta el tamaño de la imagen */
  height: 600px;
  opacity: 0; /* Inicialmente invisible */
  transition: opacity 0.5s ease-in-out; /* Transición suave para opacidad */
}
/* Estilo para el interruptor de linterna */
.btn-torch-switch {
  background-color: var(--clr-primary);
  font-family: var(--ff-body);
  color: var(--clr-black);
  border: none;
  padding: 10px 20px;
  font-size: 16px;
  border-radius: 0 !important;
  transition: background-color 0.3s ease, transform 0.2s ease;
  cursor: pointer;
}

.btn-torch-switch:hover {
  background-color: var(--clr-black);
  transform: scale(1.05);
  color: var(--clr-primary);
}

#modelViewerContainer{
  display: flex;
  justify-content: center;
}












/* Menú de navegación principal */
.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: var(--clr-black);
  padding: 20px;
  color: var(--clr-primary);
  position: fixed;
  width: 100%;
  top: 0;
  left: 0;
  z-index: 1000;
  box-shadow: 0 2px 5px rgba(0,0,0,0.5);
}

.logo {
  font-family: var(--ff-title);
  font-size: 28px;
  color: var(--clr-primary);
}

/* ✅ Estilo de los enlaces con hover */
.nav-links {
  list-style: none;
  display: flex;
  gap: 20px;
}

.nav-links li a {
  text-decoration: none;
  color: var(--clr-primary);
  font-size: 18px;
  transition: color 0.3s ease, transform 0.2s ease;
}

/* ✅ Efecto hover solo en los enlaces del menú */
.nav-links a:hover {
  color: var(--clr-white);
  transform: scale(1.1);
}

/* ✅ Estilo del icono de hamburguesa con hover */
.hamburger {
  display: none;
  font-size: 32px;
  cursor: pointer;
  color: var(--clr-primary);
  transition: color 0.3s ease, transform 0.2s ease;
}

.hamburger:hover {
  color: var(--clr-white);
  transform: scale(1.2);
}

/* ✅ Media Query para hacerlo responsive */
@media screen and (max-width: 768px) {
  .hamburger {
      display: block;
  }

  .nav-links {
      display: none;
      flex-direction: column;
      background: var(--clr-black);
      width: 100%;
      position: absolute;
      top: 80px;
      left: 0;
      text-align: center;
  }

  .nav-links a {
      padding: 15px;
      border-top: 1px solid var(--clr-secondary);
  }

  /* ✅ Mostrar menú hamburguesa cuando está activo */
  .nav-links.active {
      display: flex;
  }
}



















/* MEDIA QUERY */
/* General: Ajusta el diseño para pantallas pequeñas */
@media (max-width: 1024px) {
  #background-section {
    background-position: center center;
    background-size: cover;
  }

  #huellas {
    height: 125vh; /* Ajusta la altura automáticamente */
    gap: 20px; /* Reduce el espacio entre huellas */
  }
}
@media (max-width: 842px) {
  .row{
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .col-md-6 {
    flex: 0 0 auto;
    width: 100%;
    display: flex;
    justify-content: center;
  }
  .product-info h3{
    margin-bottom: 0;
    margin-left: 0;
  }
  .text-muted{
    margin-bottom: 0;
  }
  h4{
    margin-bottom: 0;
  }.mt-3 {
    margin-top: 0.5rem !important;
}
.mt-4 {
  margin-top: 1rem !important;
}
.container{
  width: 300px;
    height: 300px;
}
#modelViewerContainer > model-viewer {
  height: 300px; /* Ajusta el visor 3D */
  width: 300px;
  max-height: 100%;
}
}

/* Para ipad */
@media (max-width: 768px) {
  .product-info h3{
    margin-bottom: 0;
    margin-left: 0;
  }
  #background-section {
    margin-bottom: 20px; /* Reduce el margen */
  }

  h1,h2,h3 {
    margin-left: 20px;
  }

  #huellas {
    gap: 15px;
  }
  #linterna #draggable {
    width: 250px;
    height: 100px;
  }

  #droppable {
    width: 450px;
    height: 450px;
  }
  #droppedImage {
    width: 450px;
    height: 450px;
  }
  #light-effect-image {
    width: 450px;
    height: 450px;
  }
  #book{
    top: 330px !important;
    left: 310px !important;
  }
  #tshirt{
    top: 308px !important;
    left: 89px !important;
  }
  #droppedImage img {
    width: 50px; /* Ajusta el tamaño de los ítems */
  }

  #modelViewerContainer > model-viewer {
    height: 300px; /* Ajusta el visor 3D */
    width: 300px;
    max-height: 100%;
  }.modal-body {
    padding: 10px;
  }

  .btn-custom {
    font-size: 14px;
    padding: 8px 16px;
  }
  .huella-text {
    left: -150%;
  }
  #final-effect-image {
    width: 450px;
    height: 450px;
  }
  #light-effect-section {
    height: 70vh; /* Ocupa la pantalla completa */
  }
  #final-effect-section{
    height: 70vh; /* Ocupa la pantalla completa */
  }
}
@media (max-width: 576px) {
  .modal-dialog {
      max-width: 800px !important;
      margin-right: auto;
      margin-left: auto;
  }
}
/* Para pantallas aún más pequeñas */
@media (max-width: 480px) {
  h1,h2,h3 {
    margin-left: 20px;
    right: 0px;
  }.product-info h3{
    margin-bottom: 0;
    margin-left: 0;
  }
  #linterna #draggable {
    width: 250px;
    height: 100px;
  }

  #droppable {
    width:350px;
    height: 350px;
  }
  #droppedImage {
    width: 350px;
    height: 350px;
  }
  #light-effect-image {
    width: 350px;
    height: 350px;
  }
  #book{
    top: 260px !important;
    left: 240px !important;
  }
  #tshirt{
    top: 235px !important;
    left: 70px !important;
  }
  
  .huella{
    width: 100px;
  }
  .modal-body {
    font-size: 14px;
  }.huella-text {
    left: -100%;
  }
  #final-effect-image {
    width: 350px;
    height: 350px;
  }
  #light-effect-section {
    height: 60vh; /* Ocupa la pantalla completa */
  }
  #final-effect-section{
    height: 50vh; /* Ocupa la pantalla completa */
  }
}

@media (min-width: 576px) {
  .modal-dialog {
      min-width: 600px;
      margin-right: auto;
      margin-left: auto;
  }
}















@import url('https://fonts.googleapis.com/css2?family=Inconsolata:wght@200..900&family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&family=Kumar+One&display=swap');

/* VARIABLES DE COLORES Y FUENTES */
:root {
    --clr-black: #000000;
    --clr-white: #ffffff;
    --clr-primary: #fff700;
    --clr-secondary: #ffffff8b;
    --background: #03172f;
    --ff-title: "Kumar One", serif;
    --ff-body: "inconsolata";
    --ff-opacity: rgba(0, 0, 0, 0.5);
}

/* RESET GENERAL */
body, html {
    margin: 0;
    padding: 0;
    height: 100%;
    background-color: var(--background);
    overflow: hidden; /* Bloqueo de overflow para scroll controlado */
    font-family: var(--ff-body);
}

/* CONTENEDOR PRINCIPAL PARA LOCOMOTIVE */
[data-scroll-container] {
    overflow: visible;
    position: relative;
    height: auto;
}

/* ✅ MENÚ DE NAVEGACIÓN */
.navbar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: var(--clr-black);
    padding: 20px;
    position: fixed;
    width: 100%;
    top: 0;
    left: 0;
    z-index: 1000;
    box-shadow: 0 2px 5px rgba(0,0,0,0.5);
}

.logo {
    font-family: var(--ff-title);
    font-size: 28px;
    color: var(--clr-primary);
}

/* ✅ ESTILO DE LOS ENLACES DEL MENÚ */
.nav-links {
    list-style: none;
    display: flex;
    gap: 20px;
}

.nav-links li a {
    text-decoration: none;
    color: var(--clr-primary);
    font-size: 18px;
    transition: color 0.3s ease, transform 0.2s ease;
}

/* ✅ EFECTO HOVER */
.nav-links a:hover, .hamburger:hover {
    color: var(--clr-white);
    transform: scale(1.1);
}

/* ✅ ICONO HAMBURGUESA */
.hamburger {
    display: none;
    font-size: 32px;
    cursor: pointer;
    color: var(--clr-primary);
    transition: color 0.3s ease, transform 0.2s ease;
}

/* ✅ MEDIA QUERY PARA MÓVILES */
@media screen and (max-width: 768px) {
    .hamburger {
        display: block;
    }

    .nav-links {
        display: none;
        flex-direction: column;
        background: var(--clr-black);
        width: 100%;
        position: absolute;
        top: 80px;
        left: 0;
        text-align: center;
    }

    .nav-links a {
        padding: 15px;
        border-top: 1px solid var(--clr-secondary);
    }

    .nav-links.active {
        display: flex;
    }
}

/* ✅ SECCIÓN DE FONDO */
#background-section {
    background-image: url('../img/amanecer.jpg');
    background-size: cover;
    min-height: 100vh;
    width: 100%;
    position: relative;
}

/* ✅ PRIMER TITULO */
h1 {
    font-family: var(--ff-title);
    color: var(--clr-secondary);
    font-size: 30px;
    position: absolute;
    right: 20px;
    top: 200px;
}

/* ✅ ARBOLES */
#arboles {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    position: relative;
    height: 100vh;
}

.arboles1 img {
    height: 90vh;
    display: block;
    transition: transform 0.3s ease;
}

/* ✅ EFECTO HUELLAS */
#huellas {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 30px;
    position: relative;
    height: 135vh;
    overflow: hidden;
}

.huella-container {
    opacity: 0;
    transform: translateY(50px);
    transition: opacity 0.9s ease, transform 0.4s ease;
}

.huella-container.is-visible {
    opacity: 1;
    transform: translateY(0);
}

.huella-text {
    position: absolute;
    left: -250%;
    top: 50%;
    transform: translateY(-50%);
    color: var(--clr-secondary);
    font-family: var(--ff-title);
    font-size: 25px;
}

/* ✅ LINTERNAS */
#linterna {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 40px;
}

#draggable {
    width: 400px;
    height: 200px;
    cursor: pointer;
    background-image: url(../img/LINTERNA.png);
    background-size: cover;
    transition: transform 0.3s ease;
}

#draggable:hover {
    transform: scale(1.1);
}

#droppable {
    width: 600px;
    height: 600px;
    background-color: black;
    display: flex;
    justify-content: center;
    align-items: center;
}

/* ✅ EFECTOS FINALES Y CASA */
#final-effect-section {
    height: 90vh;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column-reverse;
}

#light-effect-section {
    height: 90vh;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column-reverse;
}

#light-effect-image, #final-effect-image {
    width: 600px;
    height: 600px;
    opacity: 0;
    transition: opacity 0.5s ease-in-out;
}

/* ✅ BOTÓN DE LINTERNAS */
.btn-torch-switch {
    background-color: var(--clr-primary);
    font-family: var(--ff-body);
    color: var(--clr-black);
    border: none;
    padding: 10px 20px;
    font-size: 16px;
    transition: background-color 0.3s ease, transform 0.2s ease;
}

.btn-torch-switch:hover {
    background-color: var(--clr-black);
    color: var(--clr-primary);
    transform: scale(1.05);
}
