// INICIO MAPA
let map = L.map("my_map").setView([42.23662, -8.72617], 16);

L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
  attribution: "&copy; 2025 all rights reserved",
}).addTo(map);
// Marcador personalizado
const customIcon = L.icon({
  iconUrl: "../assets/img/paint-roller-bucket-icon.svg",
  iconSize: [60, 70],
  iconAnchor: [15, 40],
  popupAnchor: [0, -40],
});
// Marcador personalizado para prueba
const customIconProof = L.icon({
  iconUrl: "../assets/img/paint-roller-bucket-icon-2.svg",
  iconSize: [80, 90],
  iconAnchor: [15, 40],
  popupAnchor: [0, -40],
});

// Add this at the beginning after map initialization
window.addEventListener("load", () => {
  if (window.location.hash) {
    const hash = window.location.hash.substring(1);
    const [artist, coords] = hash.split("=");
    if (coords) {
      const [lat, lng] = coords.split(",");
      map.setView([parseFloat(lat), parseFloat(lng)], 18);

      // Open the corresponding marker popup
      if (artist === "anna") {
        annaMarker.openPopup();
      }
    }
  }
});
// Marcador cesar <<<<--------------

const cesarMarker = L.marker([42.22620904302501, -8.728609240478043], {
  icon: customIcon,
}).addTo(map);

cesarMarker.bindPopup(`
    <div class="marker-popup">
      <h3>Cesar Bahamonte</h3>
      <img src="../assets/img/cesar-2.jpg" alt="Ana's Work" style="width:100%;margin:10px 0;">
      <p><strong>Dirección:</strong> Rúa dos Irmáns Misioneiros dos Enfermos Pobres, 12, Teis</p>
      <button onclick="window.location.href='artist.html'" style="background:#ec6356;color:white;border:none;padding:8px 15px;border-radius:5px;margin-top:10px;">
        <i class='bx bx-info-circle'></i> Ver Perfil
      </button>
    </div>
  `);

// Marcador Anna <<<<--------------
const annaMarker = L.marker([42.25139203963025, -8.698357016943074], {
  icon: customIcon,
}).addTo(map);

annaMarker.bindPopup(`
    <div class="marker-popup">
      <h3>Ana Langeheldt</h3>
      <img src="assets/img/anna-langehedt.jpg" alt="Ana's Work" style="width:100%;margin:10px 0;">
      <p><strong>Dirección:</strong> Rúa dos Irmáns Misioneiros dos Enfermos Pobres, 12, Teis</p>
      <P></P>
      <button onclick="window.location.href='artist-ana.html'" style="background:#ec6356;color:white;border:none;padding:8px 15px;border-radius:5px;margin-top:10px;">
        <i class='bx bx-info-circle'></i> Ver Perfil
      </button>
    </div>
  `);

// Marcador expostas <<<<--------------
const expostasMarker = L.marker([42.24662815289485, -8.69288543742985], {
  icon: customIcon,
}).addTo(map);
expostasMarker.bindPopup(`
    <div class="marker-popup">
      <h3>Expostas</h3>
      <img src="../assets/img/expostas-2.jpg" alt="Expostas Work" style="width:100%;margin:10px 0;">
      <p><strong>Dirección:</strong> Rúa da Travesía de Vigo, 222, Teis</p>
      <button onclick="window.location.href='artist-expostas.html'" style="background:#ec6356;color:white;border:none;padding:8px 15px;border-radius:5px;margin-top:10px;">
        <i class='bx bx-info-circle'></i> Ver Perfil
      </button>
    </div>
  `);
const evaMarker = L.marker([42.20142659509914, -8.736144079759125], {
  icon: customIcon,
}).addTo(map);
evaMarker.bindPopup(`
    <div class="marker-popup">
      <h3>Eva Casais</h3>
      <img src="../assets/img/eva-casais.jpg" alt="Eva's Work" style="width:100%;margin:10px 0;">
      <p><strong>Dirección:</strong> Fonte do Luns – Matamá, Rúa do Castro, 19</p>
      <button onclick="window.location.href='artist-eva.html'" style="background:#ec6356;color:white;border:none;padding:8px 15px;border-radius:5px;margin-top:10px;">
        <i class='bx bx-info-circle'></i> Ver Perfil
      </button>
    </div>
  `);
const loyolaMarker = L.marker([42.24539028364775, -8.697166686506081], {
  icon: customIcon,
}).addTo(map);
loyolaMarker.bindPopup(`
    <div class="marker-popup">
      <h3>Pablo Loyola</h3>
      <img src="../assets/img/loyola.jpg" alt="Loyola's Work" style="width:100%;margin:10px 0;">
      <p><strong>Dirección:</strong> Rúa Robleda, 118, Teis</p>
      <button onclick="window.location.href='artist-pablo.html'" style="background:#ec6356;color:white;border:none;padding:8px 15px;border-radius:5px;margin-top:10px;">
        <i class='bx bx-info-circle'></i> Ver Perfil
      </button>
    </div>
  `);
const playMarker = L.marker([42.22193352879065, -8.718056818403587], {
  icon: customIcon,
}).addTo(map);
playMarker.bindPopup(`
    <div class="marker-popup">
      <h3>Victor Playincolors</h3>
      <img src="../assets/img/playincolors.jpg" alt="Play's Work" style="width:100%;margin:10px 0;">
      <p><strong>Dirección:</strong> Rúa Ourense, 14, Freixeiro</p>
      <button onclick="window.location.href='artist-play.html'" style="background:#ec6356;color:white;border:none;padding:8px 15px;border-radius:5px;margin-top:10px;">
        <i class='bx bx-info-circle'></i> Ver Perfil
      </button>
    </div>
  `);

const slimMarker = L.marker([42.214109816551954, -8.747251008594489], {
  icon: customIcon,
}).addTo(map);

slimMarker.bindPopup(`
    <div class="marker-popup">
      <h3>Slim</h3>
      <img src="../assets/img/slim-2.jpeg" alt="Play's Work" style="width:100%;margin:10px 0;">
      <p><strong>Dirección:</strong> Rúa Ourense, 14, Freixeiro</p>
      <button onclick="window.location.href='artist-slim.html'" style="background:#ec6356;color:white;border:none;padding:8px 15px;border-radius:5px;margin-top:10px;">
        <i class='bx bx-info-circle'></i> Ver Perfil
      </button>
    </div>
  `);

const avioneMarker = L.marker([42.227326339484605, -8.754615898147627], {
  icon: customIcon,
}).addTo(map);
avioneMarker.bindPopup(`
    <div class="marker-popup">
      <h3>Avione</h3>
      <img src="assets/img/avione.jpg" alt="Play's Work" style="width:100%;margin:10px 0;">
      <p><strong>Dirección:</strong> Rúa Ourense, 14, Freixeiro</p>
      <button onclick="window.location.href='artist-avione.html'" style="background:#ec6356;color:white;border:none;padding:8px 15px;border-radius:5px;margin-top:10px;">
        <i class='bx bx-info-circle'></i> Ver Perfil
      </button>
    </div>
  `);
const delioMarker = L.marker([42.22739335183532, -8.7546367554964], {
  icon: customIcon,
}).addTo(map);

delioMarker.bindPopup(`
      <div class="marker-popup">
        <h3>Delio</h3>
        <img src="../assets/img/delio-2.jpg" alt="Delio's Work" style="width:100%;margin:10px 0;">
        <p><strong>Dirección:</strong> Rúa Ourense, 14, Freixeiro</p>
        <button onclick="window.location.href='artist-delio.html'" style="background:#ec6356;color:white;border:none;padding:8px 15px;border-radius:5px;margin-top:10px;">
          <i class='bx bx-info-circle'></i> Ver Perfil
        </button>
      </div>
    `);

const saxMarker = L.marker([42.230548087269526, -8.729902657670763], {
  icon: customIconProof,
}).addTo(map);

saxMarker.bindPopup(`
      <div class="marker-popup">
        <h3>Sax</h3>
        <img src="../assets/img/sax-1.jpg" alt="Sax's Work" style="width:100%;margin:10px 0;">
        <p><strong>Dirección:</strong> Rúa Ourense, 14, Freixeiro</p>
        <button onclick="window.location.href='artist-sax.html'" style="background:#ec6356;color:white;border:none;padding:8px 15px;border-radius:5px;margin-top:10px;">
          <i class='bx bx-info-circle'></i> Ver Perfil
        </button>
      </div>
    `);

const iriaMarker = L.marker([42.214109816551954, -8.747251008594489], {
  icon: customIcon,
}).addTo(map);
iriaMarker.bindPopup(`
        <div class="marker-popup">
          <h3>Iria</h3>
          <img src="../assets/img/iriafafian.jpg" alt="Sax's Work" style="width:100%;margin:10px 0;">
          <p><strong>Dirección:</strong> Rúa Ourense, 14, Freixeiro</p>
          <button onclick="window.location.href='artist.html'" style="background:#ec6356;color:white;border:none;padding:8px 15px;border-radius:5px;margin-top:10px;">
            <i class='bx bx-info-circle'></i> Ver Perfil
          </button>
        </div>
      `);
