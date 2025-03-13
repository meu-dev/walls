<<<<<<< HEAD
function loguear() {
  const user = document.getElementById("usuario").value;
  const password = document.getElementById("pass").value;
  const errorContainer = document.getElementById("errorContainer");
  const errorMessage = document.getElementById("errorMessage");

  // Validar si los campos están vacíos
  if (user === "" || password === "") {
    errorMessage.textContent = "Por favor, ingresa usuario y contraseña.";
    errorContainer.style.display = "block"; // Mostrar el mensaje de error
    return; // Detener la ejecución si hay campos vacíos
  }

  // Verificar los datos correctos (Con backen)
  if (user === "user" && password === "12345") {
    // Almacenar el estado de autenticación en localStorage
    localStorage.setItem("authenticated", "true");
    // Redirigir al usuario a index.html si los datos son correctos
    window.location = "index.html";
  } else {
    // Si los datos son incorrectos, muestra este
    errorMessage.textContent =
      "Datos incorrectos. Por favor, verifica tu usuario y contraseña.";
    errorContainer.style.display = "block"; // Mostrar el mensaje de error
  }
}

const passwordInput = document.getElementById("pass");

// Evento para detectar el clic en el input (cuando se hace clic en el icono del ojo)
passwordInput.addEventListener("click", () => {
  // Si la contraseña está oculta, la mostramos
  if (passwordInput.type === "password") {
    passwordInput.type = "text"; // Muestra la contraseña
    passwordInput.classList.add("show-pass"); // Cambia el icono
  } else {
    passwordInput.type = "password"; // Oculta la contraseña
    passwordInput.classList.remove("show-pass"); // Restaura el icono original
  }
});

// Expresión regular para validar el correo electrónico
const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

$(document).ready(function () {
  // Evento de envío del formulario
  $("#emailForm").submit(function (event) {
    event.preventDefault(); // Prevenir el envío del formulario por defecto

    const email = $("#email").val(); // Obtener el valor del campo de correo

    // Validar el correo electrónico
    if (emailRegex.test(email)) {
      alert("Correo electrónico válido!");
      $("#error").hide(); // Ocultar el mensaje de error
    } else {
      $("#error").show(); // Mostrar el mensaje de error
    }
  });
});
=======
function loguear()
{

    const user=document.getElementById('usuario').value;
    const password=document.getElementById('pass').value;


    if(user == 'user' && password == "12345")
    {
        window.location="index.html";
    }
    else
    {
        alert("Datos incorrectos")
    }

}
>>>>>>> 55c63b5e977ea231fbaff22fbe417603b02c3692
