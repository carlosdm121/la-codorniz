const header = document.getElementById("header");
const toggle = document.getElementById("menu-toggle");
const nav = document.getElementById("nav");

window.addEventListener("scroll", () => {
    header.classList.toggle("scrolled", window.scrollY > 50);
});

toggle.addEventListener("click", () =>{
    nav.classList.toggle("active");
});

const cards = document.querySelectorAll(".card");

window.addEventListener("scroll", () => {
    cards.forEach(card => {
        const cardTop = card.getBoundingClientRect().top;
        if(cardTop < window.innerHeight - 50){
            card.classList.add("show");
        }
    });
});

const productos = document.querySelectorAll(".producto-card");

window.addEventListener("scroll", () =>{
    productos.forEach(card => {
        const top = card.getBoundingClientRect().top;
        if (top<window.innerHeight-50) {
            card.classList.add("show");
        }
    });
});

function agregarTestimonio() {
    const nombreInput = document.getElementById("nombre");
    const mensajeInput = document.getElementById("mensaje");

    if (!nombreInput || !mensajeInput) return;

    const nombre = nombreInput.value.trim();
    const mensaje = mensajeInput.value.trim();

    if (nombre === "" || mensaje === "") return;

    const contenedor = document.getElementById("testimonios-container");
    if (!contenedor) return;

    // Crear elementos seguros
    const nuevo = document.createElement("div");
    nuevo.classList.add("testimonio");

    const strong = document.createElement("strong");
    strong.textContent = nombre;

    const p = document.createElement("p");
    p.textContent = mensaje;

    nuevo.appendChild(strong);
    nuevo.appendChild(p);

    contenedor.appendChild(nuevo);

    // limpiar inputs
    nombreInput.value = "";
    mensajeInput.value = "";
}

const images = document.querySelectorAll(".galeria-grid img");
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");
const closeBtn = document.querySelector(".lightbox .close");

images.forEach(img => {
    img.addEventListener("click", () => {
        lightbox.style.display = "flex";
        lightboxImg.src = img.src;
    });
});

closeBtn.addEventListener("click", () => {
    lightbox.style.display = "none";
});