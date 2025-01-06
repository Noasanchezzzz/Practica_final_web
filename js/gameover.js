document.addEventListener('DOMContentLoaded', () => {
    // Lógica para la página 'gameover.html'
    if (document.getElementById('gameover-container')) {
        // Después de 4 segundos, abrir el modal de producto automáticamente
        setTimeout(() => {
            const productModal = new bootstrap.Modal(document.getElementById('productModal'));

            // Mostrar el modal
            productModal.show();

            const closeButton = document.querySelector('.close');

<<<<<<< HEAD
            // Cerrar el modal al hacer clic en la "X"
            closeButton.addEventListener('click', () => {
                productModal.hide();
                
                // Volver a la página principal (última parte visitada) y desplazarse al final
                window.history.back(); // Esto hace que vuelva a la última página
                // Desplazarse al final de la página
                setTimeout(() => {
                    window.scrollTo(0, document.body.scrollHeight); // Desplazar al final de la página
                }, 500); // Un pequeño retraso para asegurar que la página haya vuelto
            });
        }, 4000); // El modal se abrirá después de 4 segundos
=======
    if (torchCompleted === "true") {
        console.log("torchCompleted is true");

        // Mostrar el contenedor de "has muerto"
        const gameoverContainer = document.getElementById("gameover-container");
        console.log("gameoverContainer:", gameoverContainer);

        if (gameoverContainer) {
            gameoverContainer.style.display = "flex"; // Asegúrate de que el contenedor sea visible
            console.log("Gameover container displayed");
        }

        // Mostrar el modal de producto después de 4 segundos
        const productModalElement = document.getElementById("productModal");
        const closeButton = document.getElementById("closeproduct");

        if (productModalElement) {
            setTimeout(() => {
                console.log("Initializing product modal...");
                const productModal = new bootstrap.Modal(productModalElement);
                productModal.show();
                console.log("Product modal displayed");

                if (closeButton) {
                    const closeButtonGameOver = document.getElementById("closeproduct-gameover").addEventListener("click", () => {
                        window.location.href = "index.html#final-effect-section-index";
                    });
                }
            }, 4000); // Esperar 4 segundos para mostrar el modal
        }

    } else {
        console.log("torchCompleted is not 'true'");
>>>>>>> parent of c8564af (Revert "eliminar")
    }
});
document.getElementById("closeproduct-gameover").addEventListener("click", () => {
    window.location.href = "index.html#final-effect-section-index";
});

