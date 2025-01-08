document.addEventListener("DOMContentLoaded", () => {
    console.log("Gameover page loaded");

    const torchVideo = document.getElementById("torch-video");
    const torchModal = document.getElementById("torch-modal");
    const gameoverContainer = document.getElementById("gameover-container");
    const productModalElement = document.getElementById("productModal");
    const closeButton = document.getElementById("closeproduct");

    if (localStorage.getItem("playScareVideo") === "true") {
        localStorage.removeItem("playScareVideo");

        // Mostrar el video y reproducirlo
        torchModal.style.display = "flex";
        torchVideo.play();

        // Al finalizar el video, mostrar el mensaje de "Has muerto"
        torchVideo.onended = () => {
            torchModal.style.display = "none"; 
            gameoverContainer.style.display = "flex"; 

            // Mostrar el modal de la camiseta 4 segundos después
            setTimeout(() => {
                const productModal = new bootstrap.Modal(productModalElement, {
                    backdrop: 'static',
                    keyboard: false
                });
                productModal.show();
            }, 4000);
        };
    }

    // Cerrar modal y redirigir a un enlace externo al hacer clic en la "X"
    closeButton.addEventListener("click", () => {
        window.location.href = "https://gotdem.cargo.site/";
    });
});
