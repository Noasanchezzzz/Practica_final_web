document.addEventListener("DOMContentLoaded", () => {
  console.log("DOMContentLoaded fired");

  // Obtener el botón de encender linterna
  const torchSwitch = document.getElementById("torch-switch");

  //Evento para redirigir al gameover.html al pulsar el botón
  torchSwitch.addEventListener("click", () => {
      localStorage.setItem("playScareVideo", "true");
      window.location.href = "gameover.html";
  });

  //Drag & Drop
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

  //Redirección al hacer clic en el libro
  $("#book").on("click", () => {
      window.location.href = "https://gotdem.cargo.site/notita-1"; 
      
  });
   

  
  //Efecto de luz
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


  //Redirección al hacer clic en la imagen para entrar a "entrada.html"
  lightEffectElement.addEventListener("click", () => {
      window.location.href = "entrada.html";
  });

  //Efectos finales
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


// MENU
document.addEventListener("DOMContentLoaded", () => {
    const hamburgerMenu = document.getElementById("hamburger-menu");
    const navLinks = document.querySelector(".nav-links");

    //Configuración de Locomotive Scroll
    const scroll = new LocomotiveScroll({
        el: document.querySelector("[data-scroll-container]"),
        smooth: true
    });

    //Activar menú hamburguesa
    hamburgerMenu.addEventListener("click", () => {
        navLinks.classList.toggle("active");
    });

    //Scroll suave para enlaces internos
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', function (e) {
            const targetId = this.getAttribute('href');
            
            if (targetId.startsWith("#")) {
                e.preventDefault();
                scroll.scrollTo(targetId);
                navLinks.classList.remove("active"); 
            } else {
                navLinks.classList.remove("active");
            }
        });
    });
});
