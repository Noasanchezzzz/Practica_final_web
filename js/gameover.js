document.addEventListener("DOMContentLoaded", () => {
    console.log("DOMContentLoaded fired");

    // Establecer temporalmente el valor de torchCompleted para pruebas
    localStorage.setItem("torchCompleted", "true");  // Solo por prueba

    // Verificar si el valor de torchCompleted está presente en localStorage
    const torchCompleted = localStorage.getItem("torchCompleted");
    console.log("torchCompleted (from localStorage):", torchCompleted);

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
                    closeButton.addEventListener("click", () => {
                        console.log("Close button clicked");
                        productModal.hide();
                        window.history.back();

                        setTimeout(() => {
                            window.scrollTo(0, document.body.scrollHeight);
                            console.log("Scrolled to bottom of page");
                        }, 500);
                    });
                }
            }, 4000); // Esperar 4 segundos para mostrar el modal
        }

    } else {
        console.log("torchCompleted is not 'true'");
    }

    // Eliminar el valor de `torchCompleted` solo para depuración si es necesario
    // localStorage.removeItem("torchCompleted");
});