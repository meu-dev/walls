$(document).ready(function() {
    // Expresión regular para validar el correo electrónico
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    // Evento de clic en el botón de registro
    $(".btn").click(function() {
      const email = $("#email").val(); // Obtener el valor del campo de correo electrónico
      const usuario = $("#usuario").val(); // Obtener el valor del campo de usuario
      const pass = $("#pass").val(); // Obtener el valor del campo de contraseña

      // Ocultar los mensajes de error al hacer clic en el botón
      $("#error").hide();
      $("#emptyFieldsError").hide();

      // Validar que todos los campos estén llenos
      if (usuario === "" || email === "" || pass === "") {
        $("#emptyFieldsError").show(); // Mostrar mensaje de error si algún campo está vacío
        return; // Salir de la función para no continuar con la validación de correo
      }

      // Validar el correo electrónico
      if (!emailRegex.test(email)) {
        $("#error").show(); // Mostrar mensaje de error si el correo no es válido
      } else {
        alert("Formulario enviado correctamente.");
        // Aquí podrías agregar lógica para enviar el formulario, por ejemplo, hacer un AJAX.
      }
    });
  });