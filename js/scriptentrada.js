document.addEventListener("DOMContentLoaded", () => {
    // ✅ Botón para volver al index
    const botonsalir = document.getElementById("botonsalir");
    botonsalir?.addEventListener("click", () => {
        window.location.href = "index.html#light-effect-section";
    });

    // ✅ Selección de los modales y configuración con Bootstrap
    const livingRoomModal = document.getElementById('livingroom-modal');
    const bathroomModal = document.getElementById('bathroom-modal');
    const productModalElement = document.getElementById("productModal");

    // ✅ Apertura y cierre de los modales sin Bootstrap (modales simples)
    document.getElementById('open-livingroom-modal')?.addEventListener('click', () => {
        livingRoomModal.style.display = 'block';
    });

    document.getElementById('close-livingroom-modal')?.addEventListener('click', () => {
        livingRoomModal.style.display = 'none';
    });

    document.getElementById('open-bathroom-modal')?.addEventListener('click', () => {
        bathroomModal.style.display = 'block';
    });

    document.getElementById('close-bathroom-modal')?.addEventListener('click', () => {
        bathroomModal.style.display = 'none';
    });

    // ✅ Redirección al hacer clic en la nota del baño
    document.getElementById('baño')?.addEventListener('click', () => {
        window.location.href = 'https://gotdem.cargo.site/notita-2';
    });

    // ✅ Apertura del modal de la camiseta con Bootstrap (modo correcto)
    const productModal = new bootstrap.Modal(productModalElement);
    const salonImage = document.getElementById("salon");

    salonImage?.addEventListener('click', () => {
        productModal.show();
    });

    // ✅ Cerrar el modal del producto
    document.getElementById('closeproduct')?.addEventListener('click', () => {
        productModal.hide();
    });

    // ✅ Cerrar los modales haciendo clic fuera de ellos
    window.addEventListener('click', (event) => {
        if (event.target === livingRoomModal) {
            livingRoomModal.style.display = 'none';
        }
        if (event.target === bathroomModal) {
            bathroomModal.style.display = 'none';
        }
    });
});
