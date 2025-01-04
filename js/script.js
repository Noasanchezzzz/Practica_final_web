document.addEventListener("DOMContentLoaded", () => {
  const scroll = new LocomotiveScroll({
      el: document.querySelector("[data-scroll-container]"), // Contenedor principal
      smooth: true,
      multiplier: 1,
      class: 'is-revealed',
  });

  // Hacer que el elemento con id "draggable" sea arrastrable
  $("#draggable").draggable();

  // Hacer que el elemento con id "droppable" sea una zona de "drop"
  $("#droppable").droppable({
      drop: function(event, ui) {
          $(this).addClass("ui-state-highlight").find("p").html("");

          // Mostrar la imagen de fondo
          $("#droppedImage").fadeIn(2000);

          // Establecer las posiciones del libro y la camiseta
          const bookPosition = { top: "440px", left: "410px" };
          const tshirtPosition = { top: "400px", left: "100px" };

          $("#book").css(bookPosition).fadeIn(2000);
          $("#tshirt").css(tshirtPosition).fadeIn(2000);

          // Ocultar la linterna
          $("#draggable").fadeOut(2000);
      }
  });

  // Redirección al hacer clic en el libro
  $("#book").on("click", () => {
      window.location.href = "https://www.cargo.com"; // Cambia este enlace al deseado
  });
});
document.addEventListener("DOMContentLoaded", () => {
  const scroll = new LocomotiveScroll({
    el: document.querySelector("[data-scroll-container]"),
    smooth: true,
  });

  const lightEffectImages = ["img/casa_apagada.png", "img/casa.png"]; // Rutas de las imágenes
  const lightEffectElement = document.getElementById("light-effect-image");
  const lightEffectSection = document.getElementById("light-effect-section");

  let interval; // Almacena el intervalo para cambiar imágenes
  let lightEffectVisible = false; // Estado de visibilidad de la imagen

  scroll.on("scroll", (position) => {
    const sectionTop = lightEffectSection.offsetTop;
    const sectionHeight = lightEffectSection.offsetHeight;
    const windowHeight = window.innerHeight;
    const scrollY = position.scroll.y;

    // Determinar el progreso del scroll dentro de la sección
    const progress = Math.min((scrollY + windowHeight - sectionTop) / sectionHeight, 1);

    // Ajustar opacidad
    if (progress > 0 && progress <= 1) {
      lightEffectElement.style.opacity = progress;

      // Iniciar cambio de imagen si no está en marcha
      if (!lightEffectVisible) {
        lightEffectVisible = true;
        interval = setInterval(() => {
          const randomImage = lightEffectImages[Math.floor(Math.random() * lightEffectImages.length)];
          lightEffectElement.src = randomImage;
        }, 500); // Cambiar imagen cada segundo
      }
    } else {
      lightEffectElement.style.opacity = 0; // Ocultar la imagen fuera de vista
      lightEffectVisible = false;
      clearInterval(interval); // Detener cambio de imagen al salir de la vista
    }
  });
});