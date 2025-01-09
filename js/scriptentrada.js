document.addEventListener("DOMContentLoaded", () => {
  const botonsalir = document.getElementById("botonsalir");

botonsalir.addEventListener("click", () => {
    window.location.href = "index.html#light-effect-section";
});


  // ✅ Apertura y cierre de modales
  document.getElementById('open-livingroom-modal')?.addEventListener('click', () => {
      document.getElementById('livingroom-modal').style.display = 'block';
  });

  document.getElementById('close-livingroom-modal')?.addEventListener('click', () => {
      document.getElementById('livingroom-modal').style.display = 'none';
  });

  document.getElementById('open-bathroom-modal')?.addEventListener('click', () => {
      document.getElementById('bathroom-modal').style.display = 'block';
  });

  document.getElementById('close-bathroom-modal')?.addEventListener('click', () => {
      document.getElementById('bathroom-modal').style.display = 'none';
  });

  // ✅ Redirección al hacer clic en la nota del baño
  document.getElementById('baño')?.addEventListener('click', () => {
      window.location.href = 'https://gotdem.cargo.site/notita-2';
  });
});
