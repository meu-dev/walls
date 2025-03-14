// selecciono form por ID

document
  .getElementById("addArtistForm")
  // atencion a que se envíe el formulario y le añado un evento para detener comportamiento normal
  .addEventListener("submit", function (e) {
    e.preventDefault();

    // Redirigir a index.html
    window.location.href = "map.html"; // Aquí simplemente redirige a la página principal map
  });
