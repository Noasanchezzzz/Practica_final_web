document.addEventListener("DOMContentLoaded", () => {
    const scrollContainer = document.querySelector("[data-scroll-container]");
    const scroll = new LocomotiveScroll({
        el: scrollContainer,
        smooth: true
    });

    // ✅ Actualizar Locomotive Scroll al cargar completamente
    window.addEventListener("load", () => {
        scroll.update();
    });

    // ✅ Menú hamburguesa
    const hamburgerMenu = document.getElementById("hamburger-menu");
    const navLinks = document.querySelector(".nav-links");

    hamburgerMenu.addEventListener("click", () => {
        navLinks.classList.toggle("active");
    });

    // ✅ Scroll suave SOLO en enlaces internos
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            if (href.startsWith("#")) {
                e.preventDefault();
                const targetElement = document.querySelector(href);
                if (targetElement) {
                    scroll.scrollTo(targetElement);
                }
            }
        });
    });

    // ✅ Redirección desde entrada.html
    const botonsalir = document.getElementById("botonsalir");
    botonsalir?.addEventListener("click", () => {
        window.location.href = "index.html#light-effect-section";
    });

    // ✅ Efecto de luz al hacer scroll
    const lightEffectImages = ["img/casa_apagada.png", "img/casa.png"];
    const lightEffectElement = document.getElementById("light-effect-image");
    let interval;
    let lightEffectVisible = false;

    scroll.on("scroll", (position) => {
        const progress = Math.min(position.scroll.y / window.innerHeight, 1);
        lightEffectElement.style.opacity = progress;
        if (progress > 0 && !lightEffectVisible) {
            lightEffectVisible = true;
            interval = setInterval(() => {
                const randomImage = lightEffectImages[Math.floor(Math.random() * lightEffectImages.length)];
                lightEffectElement.src = randomImage;
            }, 500);
        } else if (progress === 0) {
            lightEffectVisible = false;
            clearInterval(interval);
        }
    });

    // ✅ Redirigir al hacer clic en la imagen de luz
    lightEffectElement.addEventListener("click", () => {
        window.location.href = "entrada.html";
    });

    // ✅ Inicializar Drag & Drop correctamente con jQuery UI
    $("#draggable").draggable({
        scroll: false, // Evitar interferencias con Locomotive Scroll
        containment: "body" // Limitar el arrastre al cuerpo de la página
    });

    $("#droppable").droppable({
        drop: function (event, ui) {
            $(this).addClass("ui-state-highlight").find("p").html("¡Objeto colocado!");
            $("#droppedImage").fadeIn(2000);
            $("#book").css({ top: "440px", left: "410px" }).fadeIn(2000);
            $("#tshirt").css({ top: "400px", left: "100px" }).fadeIn(2000);
            $("#draggable").fadeOut(2000);
        }
    });

    // ✅ Efecto final con Locomotive Scroll (corregido y movido dentro del bloque)
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
            finalEffectElement.style.display = "block";
        } else {
            finalEffectElement.style.opacity = 0;
            finalEffectElement.style.display = "none";
        }
    });
});
// ✅ Redirigir al hacer clic en el botón "Encender la linterna"
const torchSwitch = document.getElementById("torch-switch");
    if (torchSwitch) {
        torchSwitch.addEventListener("click", () => {
            localStorage.setItem("playScareVideo", "true"); // Activar secuencia
            window.location.href = "gameover.html";
        });
    }
