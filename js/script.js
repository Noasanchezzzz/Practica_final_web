document.addEventListener("DOMContentLoaded", () => {
    const scrollContainer = document.querySelector("[data-scroll-container]");
    const scroll = new LocomotiveScroll({
        el: scrollContainer,
        smooth: true
    });

    // Actualizar Locomotive Scroll al cargar completamente
    window.addEventListener("load", () => {
        scroll.update();
    });

    // Menú hamburguesa
    const hamburgerMenu = document.getElementById("hamburger-menu");
    const navLinks = document.querySelector(".nav-links");

    hamburgerMenu.addEventListener("click", () => {
        navLinks.classList.toggle("active");
    });

    // Scroll suave SOLO en enlaces internos (ignora externos)
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', function (e) {
            const href = this.getAttribute('href');

            // Evitar solo si es un enlace interno
            if (href.startsWith("#")) {
                e.preventDefault();
                const targetId = href.replace("#", "");
                const targetElement = document.getElementById(targetId);
                if (targetElement) {
                    scroll.scrollTo(targetElement);
                }
            }
        });
    });

    // Redirección desde entrada.html
    const botonsalir = document.getElementById("botonsalir");
    botonsalir?.addEventListener("click", () => {
        window.location.href = "index.html#light-effect-section";
    });

    // Efecto de luz al hacer scroll
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

    // Redirigir al hacer clic en la imagen de luz
    lightEffectElement.addEventListener("click", () => {
        window.location.href = "entrada.html";
    });
});
