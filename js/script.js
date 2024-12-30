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

