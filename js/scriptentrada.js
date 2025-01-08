document.addEventListener("DOMContentLoaded", () => {
  // Abre el modal del salón al hacer clic en la flecha izquierda
  document.getElementById('open-livingroom-modal').addEventListener('click', () => {
    document.getElementById('livingroom-modal').style.display = 'block'; // Muestra el modal del salón
  });
  // Abre el modal del baño al hacer clic en la flecha derecha
  document.getElementById('open-bathroom-modal').addEventListener('click', () => {
    document.getElementById('bathroom-modal').style.display = 'block'; // Muestra el modal del baño
  });


  // Cerrar el modal del salón cuando se hace clic en el botón de cerrar
  document.getElementById('close-livingroom-modal').addEventListener('click', () => {
    document.getElementById('livingroom-modal').style.display = 'none'; // Oculta el modal del salón
  });
  // Cerrar el modal del baño cuando se hace clic en el botón de cerrar
  document.getElementById('close-bathroom-modal').addEventListener('click', () => {
    document.getElementById('bathroom-modal').style.display = 'none'; // Oculta el modal del baño
  });

  
  // Redirigir al hacer clic en la nota del baño
  document.getElementById('baño').addEventListener('click', () => {
    window.location.href = 'https://www.cargo.com'; // Cambia este enlace al que desees
  });
  // Cerrar el modal del producto cuando se hace clic en la "X" (botón de cierre)
  document.getElementById("botonsalir").addEventListener("click", () => {
    window.location.href = "index.html"; // Redirige a la página principal
  });

  // Selección del modal
  var modalElement = document.getElementById("productModal");
  var modal = new bootstrap.Modal(modalElement);

  // Mostrar el modal al hacer clic en la camiseta (elemento con id 'salon')
  document.getElementById("salon").addEventListener("click", () => {
      modal.show(); // Muestra el modal
  });

  // Cerrar el modal al hacer clic en la "X" (botón de cierre)
  document.getElementById("closeproduct").addEventListener("click", () => {
      modal.hide(); // Oculta el modal
  });
});
