<<<<<<< HEAD
// INICIO MAPA
let map = L.map("my_map").setView([42.23662, -8.72617], 16);

L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
  attribution: "&copy; 2025 all rights reserved",
}).addTo(map);
// Custom marker icon for proof
const customIcon = L.icon({
  iconUrl: "../assets/img/paint-roller-bucket-icon.svg",
  iconSize: [60, 70],
  iconAnchor: [15, 40],
  popupAnchor: [0, -40],
});
// Custom marker icon for proof
const customIconProof = L.icon({
  iconUrl: "../assets/img/paint-roller-bucket-icon-2.svg",
  iconSize: [80, 90],
  iconAnchor: [15, 40],
  popupAnchor: [0, -40],
});

const cesarMarker = L.marker([42.22620904302501, -8.728609240478043], {
  icon: customIcon,
}).addTo(map);

const annaMarker = L.marker([42.25139203963025, -8.698357016943074], {
  icon: customIcon,
}).addTo(map);
const expostasMarker = L.marker([42.24662815289485, -8.69288543742985], {
  icon: customIcon,
}).addTo(map);
const evaMarker = L.marker([42.20142659509914, -8.736144079759125], {
  icon: customIcon,
}).addTo(map);
const loyolaMarker = L.marker([42.24539028364775, -8.697166686506081], {
  icon: customIcon,
}).addTo(map);
const playMarker = L.marker([42.22193352879065, -8.718056818403587], {
  icon: customIcon,
}).addTo(map);
const slimMarker = L.marker([42.214109816551954, -8.747251008594489], {
  icon: customIcon,
}).addTo(map);
const avioneMarker = L.marker([42.22620904302501, -8.728609240478043], {
  icon: customIcon,
}).addTo(map);
const delioMarker = L.marker([42.22620904302501, -8.728609240478043], {
  icon: customIcon,
}).addTo(map);
const saxMarker = L.marker([42.230548087269526, -8.729902657670763], {
  icon: customIconProof,
}).addTo(map);

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
=======
let map = L.map('my_map').setView([42.23662, -8.72617], 16)

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; 2025 all rights reserved'
}).addTo(map);


const intro = document.querySelector('.inicio')

const logo = document.querySelector('.logo-principal')
const logoSpan = document.querySelector('.logo')

window.addEventListener('DOMcontentLoad', () => {
    setTimeout(()=> {
        logoSpan.forEach((span, idx)=>{
            setTimoout(()=>{
                span.classList.add('active');
            }, (dx + 1) * 400)
        });
        setTimeout(()=> {
            logoSpan.forEach((span, idx)=>{
                setTimoout(()=>{
                    span.classList.remove('active');
                    span.classList.add('fade');
                }, (idx + 1) * 50)
            })

        },2000);

        setTimeout(()=> {
        intro.style.top = "-100vh";

        },2300);
    })

})
>>>>>>> 55c63b5e977ea231fbaff22fbe417603b02c3692
