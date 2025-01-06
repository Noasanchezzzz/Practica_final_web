document.addEventListener("DOMContentLoaded", () => {
  const scroll = new LocomotiveScroll({
      el: document.querySelector("[data-scroll-container]"),
      smooth: true
  });
  scroll.update(); // Asegura que Locomotive Scroll se inicialice correctamente al volver a la página
});
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
// Obtener el modal y el botón de cierre
const productModal = document.querySelector('#productModal');
const closeButton = document.querySelector('.close');

// Función para abrir el modal
const openModal = () => {
  productModal.style.display = 'block'; // Mostrar el modal
  document.body.style.overflow = 'hidden'; // Deshabilitar desplazamiento de la página cuando el modal está abierto
};

// Función para cerrar el modal
const closeModal = () => {
  productModal.style.display = 'none'; // Cerrar el modal
  document.body.style.overflow = ''; // Restaurar el desplazamiento de la página
};

// Al hacer clic en el botón de cierre (la "x"), ocultar el modal y restaurar el desplazamiento
closeButton.addEventListener('click', (e) => {
  e.stopPropagation(); // Evitar que el clic en la "x" se propague
  closeModal();
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

  // Agregar un evento de clic en la imagen para redirigir a "entrada.html"
  lightEffectElement.addEventListener('click', () => {
    window.location.href = 'entrada.html'; // Redirigir a la página "entrada.html"
  });
});


document.addEventListener("DOMContentLoaded", () => {
  const scroll = new LocomotiveScroll({
    el: document.querySelector("[data-scroll-container]"),
    smooth: true,
  });

  const finalEffectElement = document.getElementById("final-effect-image");
  const finalEffectSection = document.getElementById("final-effect-section");

  // Esta es la manera correcta de escuchar el evento de scroll en Locomotive Scroll
  scroll.on('scroll', (position) => {
    const sectionTop = finalEffectSection.offsetTop;
    const sectionHeight = finalEffectSection.offsetHeight;
    const windowHeight = window.innerHeight;
    const scrollY = position.scroll.y;

    // Determinar el progreso del scroll dentro de la sección final
    const progress = Math.min((scrollY + windowHeight - sectionTop) / sectionHeight, 1);

    // Ajustar opacidad y mostrar la imagen
    if (progress > 0 && progress <= 1) {
      finalEffectElement.style.opacity = progress; // Aumenta la opacidad según el scroll
    } else {
      finalEffectElement.style.opacity = 0; // Ocultar la imagen fuera de vista
    }
  });
});
document.addEventListener("DOMContentLoaded", () => {
  // Obtener el video de la linterna
  const torchVideo = document.getElementById('torch-video');

  // Verificar si el video está disponible
  if (torchVideo) {
    // Cuando el video termine, redirigir a la página 'gameover.html'
    torchVideo.onended = () => {
      window.location.href = 'gameover.html'; // Cambia esta URL si es necesario
    };
  } else {
    console.error('El video de la linterna no se encontró en el DOM.');
  }

  // Lógica para abrir y cerrar el modal de la linterna
  const torchSwitch = document.getElementById("torch-switch");
  const torchModal = document.getElementById("torch-modal");
  const closeTorchModal = document.getElementById("close-torch-modal");

  // Evento para abrir el modal de la linterna
  torchSwitch.addEventListener("click", () => {
    torchModal.style.display = "flex"; // Mostrar el modal en pantalla completa
    torchVideo.play(); // Reproducir el video automáticamente
  });

  // Evento para cerrar el modal de la linterna
  closeTorchModal.addEventListener("click", () => {
    torchModal.style.display = "none"; // Ocultar el modal
    torchVideo.pause();  // Pausar el video cuando se cierra el modal
    torchVideo.currentTime = 0;  // Reiniciar el video
  });
});
document.getElementById("torch-switch-index").addEventListener("click", () => {
  const torchModal = document.getElementById("torch-modal");
  const torchVideo = document.getElementById("torch-video");
  
  if (!localStorage.getItem("videoPlayed")) {
      torchModal.style.display = "flex";
      torchVideo.play();
      torchVideo.onended = () => {
          localStorage.setItem("videoPlayed", "true");
          window.location.href = "gameover.html";
      };
  }
});

document.getElementById("close-torch-modal").addEventListener("click", () => {
  document.getElementById("torch-modal").style.display = "none";
  torchVideo.pause();
  torchVideo.currentTime = 0;
});

document.getElementById("close-torch-modal").addEventListener("click", () => {
  document.getElementById("torch-modal").style.display = "none";
  torchVideo.pause();
  torchVideo.currentTime = 0;
});

