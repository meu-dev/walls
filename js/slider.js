// Cargar página
$(document).ready(function () {
  // Cuando hacemos click en un punto
  $(".dot").click(function () {
    // Guardar click del punto
    let puntoClickeado = $(this).index();

    // Ocultar todas las imágenes
    $(".slide").removeClass("active");
    // Desactivar todos los puntos
    $(".dot").removeClass("active");

    // Mostrar la imagen que queremos
    $(".slide").eq(puntoClickeado).addClass("active");
    // Activar el punto que clickeamos
    $(this).addClass("active");
  });

  // Cambiar imagen automáticamente
  function cambiarImagen() {
    // Ver qué imagen está activa
    let imagenActual = $(".slide.active").index();
    //  siguiente imagen
    let siguienteImagen = imagenActual + 1;

    // Si llegamos al final, volver al principio bucle
    if (siguienteImagen >= $(".slide").length) {
      siguienteImagen = 0;
    }

    // Ocultar todas las imágenes
    $(".slide").removeClass("active");
    // Desactivar todos los puntos
    $(".dot").removeClass("active");

    // Mostrar siguiente imagen
    $(".slide").eq(siguienteImagen).addClass("active");
    // Activar siguiente punto
    $(".dot").eq(siguienteImagen).addClass("active");
  }

  // Cambio de fotografía cada 30 deg
  setInterval(cambiarImagen, 30000);
});
