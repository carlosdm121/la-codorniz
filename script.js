const header = document.querySelector(".header");
const toggle = document.getElementById("menu-toggle");
const nav = document.querySelector(".nav");

// Mobile menu toggle
toggle.addEventListener("click", () => {
    nav.classList.toggle("active");
});

// Cerrar el menú al hacer click en un enlace
nav.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", () => {
        nav.classList.remove("active");
    });
});

// Header scroll effect + card animations (single scroll handler)
function handleScrollEffects() {
    // Header shrink
    header.classList.toggle("scrolled", window.scrollY > 50);

    // Animate beneficio cards
    document.querySelectorAll(".card").forEach(card => {
        const top = card.getBoundingClientRect().top;
        if (top < window.innerHeight - 50) {
            card.classList.add("show");
        }
    });

    // Animate producto cards
    document.querySelectorAll(".producto-card").forEach(card => {
        const top = card.getBoundingClientRect().top;
        if (top < window.innerHeight - 50) {
            card.classList.add("show");
        }
    });
}

window.addEventListener("scroll", handleScrollEffects);

// Ejecutar al cargar por si hay elementos ya visibles
handleScrollEffects();

// Testimonios
function agregarTestimonio() {
    const nombreInput = document.getElementById("nombre");
    const mensajeInput = document.getElementById("mensaje");

    if (!nombreInput || !mensajeInput) return;

    const nombre = nombreInput.value.trim();
    const mensaje = mensajeInput.value.trim();

    if (nombre === "" || mensaje === "") return;

    // Límite de caracteres para evitar spam
    if (nombre.length > 50 || mensaje.length > 300) {
        alert("El nombre no puede tener más de 50 caracteres y el mensaje más de 300.");
        return;
    }

    const contenedor = document.getElementById("testimonios-container");
    if (!contenedor) return;

    const nuevo = document.createElement("div");
    nuevo.classList.add("testimonio");

    const strong = document.createElement("strong");
    strong.textContent = nombre;

    const p = document.createElement("p");
    p.textContent = mensaje;

    nuevo.appendChild(strong);
    nuevo.appendChild(p);

    contenedor.appendChild(nuevo);

    // Limpiar inputs
    nombreInput.value = "";
    mensajeInput.value = "";
}

// Lightbox
const images = document.querySelectorAll(".galeria-grid img");
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");
const closeBtn = document.querySelector(".lightbox .close");

images.forEach(img => {
    img.addEventListener("click", () => {
        lightbox.style.display = "flex";
        lightboxImg.src = img.src;
        document.body.style.overflow = "hidden"; // Prevenir scroll del body
    });
});

if (closeBtn) {
    closeBtn.addEventListener("click", closeLightbox);
}

// Cerrar al hacer click en el fondo oscuro
lightbox.addEventListener("click", (e) => {
    if (e.target === lightbox) {
        closeLightbox();
    }
});

// Cerrar con ESC
document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && lightbox.style.display === "flex") {
        closeLightbox();
    }
});

function closeLightbox() {
    lightbox.style.display = "none";
    document.body.style.overflow = ""; // Restaurar scroll
}
