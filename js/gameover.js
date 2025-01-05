document.addEventListener('DOMContentLoaded', () => {
    // Lógica para la página 'gameover.html'
    if (document.getElementById('gameover-container')) {
        // Después de 4 segundos, abrir el modal de producto automáticamente
        setTimeout(() => {
            const productModal = new bootstrap.Modal(document.getElementById('productModal'));

            // Mostrar el modal
            productModal.show();

            const closeButton = document.querySelector('.close');

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
    }
});
