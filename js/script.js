document.addEventListener("DOMContentLoaded", () => {
    const scrollContainer = document.querySelector("[data-scroll-container]");
    const scroll = new LocomotiveScroll({
        el: scrollContainer,
        smooth: true
    });

    // ✅ Actualizar Locomotive Scroll al cargar la página
    scroll.update(); 

    console.log("Página cargada correctamente.");

    // ✅ Menú hamburguesa
    const hamburgerMenu = document.getElementById("hamburger-menu");
    const navLinks = document.querySelector(".nav-links");

    hamburgerMenu.addEventListener("click", () => {
        navLinks.classList.toggle("active");
    });

    // ✅ Scroll suave con Locomotive para los enlaces del menú
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').replace("#", "");
            const targetElement = document.getElementById(targetId);
            if (targetElement) {
                scroll.scrollTo(targetElement);
            }
        });
    });

    // ✅ Al regresar desde entrada.html, desplazarse a la sección correcta
    const urlParams = new URLSearchParams(window.location.search);
    const targetSection = urlParams.get('section');
    if (targetSection) {
        const targetElement = document.getElementById(targetSection);
        if (targetElement) {
            setTimeout(() => {
                scroll.scrollTo(targetElement, { duration: 1000, offset: 0 });
            }, 500);
        }
    }

    // ✅ Botón de encender linterna y redirección
    const torchSwitch = document.getElementById("torch-switch");
    torchSwitch?.addEventListener("click", () => {
        localStorage.setItem("playScareVideo", "true");
        window.location.href = "gameover.html";
    });

    // ✅ Drag & Drop con jQuery UI
    $("#draggable").draggable();
    $("#droppable").droppable({
        drop: function (event, ui) {
            $(this).addClass("ui-state-highlight").find("p").html("");
            $("#droppedImage").fadeIn(2000);
            $("#book").css({ top: "440px", left: "410px" }).fadeIn(2000);
            $("#tshirt").css({ top: "400px", left: "100px" }).fadeIn(2000);
            $("#draggable").fadeOut(2000);
        },
    });

    // ✅ Redirección al hacer clic en el libro
    $("#book").on("click", () => {
        window.location.href = "https://gotdem.cargo.site/notita-1"; 
    });

    // ✅ Efecto de luz al hacer scroll
    const lightEffectImages = ["img/casa_apagada.png", "img/casa.png"];
    const lightEffectElement = document.getElementById("light-effect-image");
    const lightEffectSection = document.getElementById("light-effect-section");
    let interval;
    let lightEffectVisible = false;

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

    // ✅ Redirigir al hacer clic en la imagen de luz
    lightEffectElement.addEventListener("click", () => {
        window.location.href = "entrada.html";
    });

    // ✅ Efecto final con Locomotive Scroll
    const finalEffectElement = document.getElementById("final-effect-image");
    const finalEffectSection = document.getElementById("final-effect-section");

    scroll.on("scroll", (position) => {
        const sectionTop = finalEffectSection.offsetTop;
        const sectionHeight = finalEffectSection.offsetHeight;
        const windowHeight = window.innerHeight;
        const scrollY = position.scroll.y;

        const progress = Math.min((scrollY + windowHeight - sectionTop) / sectionHeight, 1);

        finalEffectElement.style.opacity = progress > 0 && progress <= 1 ? progress : 0;
    });
});
