document.addEventListener("DOMContentLoaded", () => {
    // ✅ Botón para volver al index
    const botonsalir = document.getElementById("botonsalir");
    botonsalir?.addEventListener("click", () => {
        window.location.href = "index.html#light-effect-section";
    });

    // ✅ Apertura y cierre de los modales con Bootstrap
    const livingRoomModal = document.getElementById('livingroom-modal');
    const bathroomModal = document.getElementById('bathroom-modal');

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

    // ✅ Apertura del modal de la camiseta con Bootstrap
    const productModal = new bootstrap.Modal(document.getElementById("productModal"));
    const salonImage = document.getElementById("salon");

    salonImage?.addEventListener('click', () => {
        productModal.show();
    });

    // ✅ Cerrar el modal de la camiseta
    document.getElementById('closeproduct')?.addEventListener('click', () => {
        productModal.hide();
    });
});
