if (!sessionStorage.getItem("animationShown")) {
  // Aparece animación
  document.querySelector(".inicio").style.display = "flex";
  // CODIGO ANIMACIÓN INTRO
  document.addEventListener("DOMContentLoaded", () => {
    const intro = document.querySelector(".inicio");
    const logoSpans = document.querySelectorAll(".logo span"); // Seleccionar los spans dentro de .logo

    setTimeout(() => {
      // Mostrar letras una por una
      logoSpans.forEach((span, idx) => {
        setTimeout(() => {
          span.classList.add("active");
        }, (idx + 1) * 400);
      });

      // Desvanecer letras
      setTimeout(() => {
        logoSpans.forEach((span, idx) => {
          setTimeout(() => {
            span.classList.remove("active");
            span.classList.add("fade");
          }, (idx + 1) * 50);
        });
      }, 2000);

      // Mover la pantalla de inicio hacia arriba (dandole un stilo)
      setTimeout(() => {
        intro.style.top = "-100vh";
      }, 2300);
    }, 500);
  });

  // Marca la animación como mostrada en sessionStorage
  sessionStorage.setItem("animationShown", "true");
} else {
  // no muestra animación
  document.querySelector(".inicio").style.display = "none";
}
