// document.addEventListener("DOMContentLoaded", () => {
//     const scroll = new LocomotiveScroll({
//         el: document.querySelector("#main"),
//         smooth: true,
//         multiplier: 1, // Opcional: ajusta la velocidad del scroll
//         class: "is-revealed" // Clase añadida cuando un elemento entra en vista
//     });

//     // Ejemplo: Cambio dinámico del tamaño del texto
//     const el = document.getElementById("titleH1");

//     scroll.on("scroll", (args) => {
//         const scrollY = args.scroll.y || 0;
//         const newSize = 50 + scrollY * 0.05;
//         el.style.fontSize = `${newSize}px`;
//     });
// });


    document.addEventListener('DOMContentLoaded', () => {
        try {
            // Inicializa Locomotive Scroll
            const scroll = new LocomotiveScroll({
                el: document.querySelector('[data-scroll-container]'),
                smooth: true,  // Desplazamiento suave
                direction: 'vertical', // Asegúrate de que sea vertical si ese es tu diseño
            });

            console.log("Locomotive Scroll inicializado correctamente.");
        } catch (error) {
            console.error("Error al inicializar Locomotive Scroll:", error);
        }
    });

