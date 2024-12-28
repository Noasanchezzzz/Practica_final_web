document.addEventListener("DOMContentLoaded", () => {
    const scroll = new LocomotiveScroll({
        el: document.querySelector("[data-scroll-container]"),  // Contenedor principal
        smooth: true,
        multiplier: 1,
        class: 'is-revealed',
    });
});

$(function() {
    // Hacer que el elemento con id "draggable" sea arrastrable
    $("#draggable").draggable();

    // Hacer que el elemento con id "droppable" sea una zona de "drop"
    $("#droppable").droppable({
        drop: function(event, ui) {
            $(this).addClass("ui-state-highlight").find("p").html("");

            // Hacer que la imagen se muestre poco a poco
            $("#droppedImage").fadeIn(2000); // 2 segundos para hacerla visible

            // Hacer que la linterna desaparezca
            $("#draggable").fadeOut(2000); // 1 segundo para ocultar la linterna
        }
    });
});