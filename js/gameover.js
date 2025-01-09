document.addEventListener("DOMContentLoaded", () => {
    console.log("Gameover page loaded");

    const torchVideo = document.getElementById("torch-video");
    const torchModal = document.getElementById("torch-modal");
    const gameoverContainer = document.getElementById("gameover-container");
    const productModalElement = document.getElementById("productModal");
    const closeButton = document.getElementById("closeproduct");

    // ✅ Activar solo si se llega desde la linterna
    if (localStorage.getItem("playScareVideo") === "true") {
        localStorage.removeItem("playScareVideo");

        // ✅ Mostrar el video y reproducirlo
        torchModal.style.display = "flex";
        gameoverContainer.style.display = "none"; 
        productModalElement.style.display = "none";  

        torchVideo.play().catch(error => {
            console.error("Error al intentar reproducir el video:", error);
        });

        // ✅ Al finalizar el video, mostrar el mensaje "¡Has muerto!" y modal
        torchVideo.onended = () => {
            torchModal.style.display = "none"; 
            gameoverContainer.style.display = "flex"; 

            setTimeout(() => {
                const productModal = new bootstrap.Modal(productModalElement, {
                    backdrop: 'static',
                    keyboard: false
                });
                productModal.show();
            }, 4000);
        };
    } else {
        console.warn("El video no se activó desde la linterna. Redirigiendo al inicio.");
        window.location.href = "index.html";
    }

    // ✅ Cerrar modal y redirigir al enlace externo
    closeButton?.addEventListener("click", () => {
        window.location.href = "https://gotdem.cargo.site/";
    });
});
