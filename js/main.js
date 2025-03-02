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