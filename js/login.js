//
document.addEventListener("DOMContentLoaded", function () {
  const loginForm = document.getElementById("loginForm");

  loginForm.addEventListener("submit", function (event) {
    event.preventDefault();
    loguear();
  });
});

function loguear() {
  const user = document.getElementById("usuario").value;
  const password = document.getElementById("pass").value;
  const errorContainer = document.getElementById("error-container");
  const errorMessage = document.getElementById("error-sms");

  // Validar si los campos están vacíos
  if (user === "" || password === "") {
    errorMessage.textContent = "Por favor, ingresa usuario y contraseña.";
    errorContainer.style.visibility = "visible";
    return;
  }

  // Verificar los datos correctos
  if (user === "user" && password === "12345") {
    window.location.href = "map.html";
  } else {
    errorMessage.textContent =
      "Datos incorrectos. Por favor, verifica tu usuario y contraseña.";
    errorContainer.style.visibility = "visible";
  }
}
const passwordInput = document.getElementById("pass");
const togglePassword = document.getElementById("togglePassword");

// Cuando el usuario hace click en el icono del ojo, se ejecuta la función. para el cambio de input e icono
togglePassword.addEventListener("click", () => {
  // Aquí si el tipo de input es paassword, se cambia a text, si no, se cambia a password
  passwordInput.type = passwordInput.type === "password" ? "text" : "password";
  // Aqui agrega el estilo para cambiar el ojo
  togglePassword.classList.toggle("bx-hide");
  togglePassword.classList.toggle("bx-show");
});

// validación del correo electrónico
$(document).ready(function () {
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  $("#emailForm").submit(function (event) {
    event.preventDefault();

    const email = $("#email").val();
    const usuario = $("#usuario").val();
    const password = $("#pass").val();

    // Verificar campos vacíos
    if (!email || !usuario || !password) {
      $("#empty-field-error").css("visibility", "visible");
      $("#error").css("visibility", "hidden");
      return;
    }

    // Validar formato de email
    if (!emailRegex.test(email)) {
      $("#error").css("visibility", "visible");
      $("#empty-field-error").css("visibility", "hidden");
    } else {
      $("#error").css("visibility", "hidden");
      $("#empty-field-error").css("visibility", "hidden");
      // Aquí puedes agregar el código para procesar el registro
      console.log("Registro OK");
    }
  });
});
