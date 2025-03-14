// Validación email por jquery

$(document).ready(function () {
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  $(".btn").click(function () {
    const email = $("#email").val();
    const usuario = $("#usuario").val();
    const pass = $("#pass").val();

    // Ocultar los mensajes de error del html
    $("#error").css("visibility", "hidden");
    $("#empty-field-error").css("visibility", "hidden");

    // Validar campos vacíos
    if (usuario === "" || email === "" || pass === "") {
      $("#empty-field-error").css("visibility", "visible");
      return;
    }

    // Validar el mail si es un formato correcto
    if (!emailRegex.test(email)) {
      $("#error").css("visibility", "visible");
    } else {
      // to
      alert("Formulario enviado correctamente.");
    }
  });
});

document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("btn-reg").addEventListener("click", function () {
    window.location.href = "map.html";
  });
});
