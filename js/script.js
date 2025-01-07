document.addEventListener("DOMContentLoaded", () => {
  console.log("DOMContentLoaded fired");

  // Obtener el botón de encender linterna
  const torchSwitch = document.getElementById("torch-switch");

  // ✅ Evento para redirigir al gameover.html al pulsar el botón
  torchSwitch.addEventListener("click", () => {
      localStorage.setItem("playScareVideo", "true"); // Marca que el video debe reproducirse
      window.location.href = "gameover.html"; // Redireccionar al gameover.html
  });

  // ✅ Lógica de Drag & Drop (sin cambios, ya que es funcional)
  $("#draggable").draggable();
  $("#droppable").droppable({
      drop: function (event, ui) {
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
      },
  });

  // ✅ Redirección al hacer clic en el libro
  $("#book").on("click", () => {
      window.location.href = "https://www.cargo.com"; 
      
  });
   

  

  // ✅ Efecto de luz (Mantiene la transición de imágenes)
  const lightEffectImages = ["img/casa_apagada.png", "img/casa.png"];
  const lightEffectElement = document.getElementById("light-effect-image");
  const lightEffectSection = document.getElementById("light-effect-section");
  let interval;
  let lightEffectVisible = false;

  const scroll = new LocomotiveScroll({
      el: document.querySelector("[data-scroll-container]"),
      smooth: true,
  });

  scroll.on("scroll", (position) => {
      const sectionTop = lightEffectSection.offsetTop;
      const sectionHeight = lightEffectSection.offsetHeight;
      const windowHeight = window.innerHeight;
      const scrollY = position.scroll.y;

      const progress = Math.min((scrollY + windowHeight - sectionTop) / sectionHeight, 1);

      if (progress > 0 && progress <= 1) {
          lightEffectElement.style.opacity = progress;
          if (!lightEffectVisible) {
              lightEffectVisible = true;
              interval = setInterval(() => {
                  const randomImage = lightEffectImages[Math.floor(Math.random() * lightEffectImages.length)];
                  lightEffectElement.src = randomImage;
              }, 500);
          }
      } else {
          lightEffectElement.style.opacity = 0;
          lightEffectVisible = false;
          clearInterval(interval);
      }
  });

  // ✅ Redirección al hacer clic en la imagen para entrar a "entrada.html"
  lightEffectElement.addEventListener("click", () => {
      window.location.href = "entrada.html";
  });

  // ✅ Efectos finales (sin cambios)
  const finalEffectElement = document.getElementById("final-effect-image");
  const finalEffectSection = document.getElementById("final-effect-section");

  scroll.on("scroll", (position) => {
      const sectionTop = finalEffectSection.offsetTop;
      const sectionHeight = finalEffectSection.offsetHeight;
      const windowHeight = window.innerHeight;
      const scrollY = position.scroll.y;

      const progress = Math.min((scrollY + windowHeight - sectionTop) / sectionHeight, 1);

      if (progress > 0 && progress <= 1) {
          finalEffectElement.style.opacity = progress;
      } else {
          finalEffectElement.style.opacity = 0;
      }
  });
});



document.addEventListener("DOMContentLoaded", () => {
  const hamburgerMenu = document.getElementById("hamburger-menu");
  const navLinks = document.querySelector(".nav-links");

  // ✅ Configuración de Locomotive Scroll
  const scroll = new LocomotiveScroll({
      el: document.querySelector("[data-scroll-container]"),
      smooth: true
  });

  // ✅ Activar menú hamburguesa
  hamburgerMenu.addEventListener("click", () => {
      navLinks.classList.toggle("active");
  });

  // ✅ Scroll suave y cierre del menú al hacer clic en un enlace
  document.querySelectorAll('.nav-links a').forEach(link => {
      link.addEventListener('click', function (e) {
          e.preventDefault(); // Evitar el comportamiento por defecto del enlace
          const targetId = this.getAttribute('href');
          scroll.scrollTo(targetId); // Desplazamiento suave con Locomotive Scroll
          navLinks.classList.remove("active"); // Cerrar menú hamburguesa
      });
  });
});

document.addEventListener("DOMContentLoaded", () => {
    // Selección del modal y creación de la instancia de Bootstrap Modal
    var modalElement = document.getElementById("productModal");
    var modal = new bootstrap.Modal(modalElement);

    // Mostrar el modal al hacer clic en la camiseta (elemento con id 'tshirt')
    document.getElementById("tshirt").addEventListener("click", () => {
        modal.show(); // Muestra el modal
    });

    // Cerrar el modal al hacer clic en la "X" (botón de cierre)
    document.getElementById("closeproduct").addEventListener("click", () => {
        modal.hide(); // Oculta el modal
    });
});
