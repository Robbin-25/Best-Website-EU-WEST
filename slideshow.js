const gallery = document.getElementById('gallery');
const prevButton = document.getElementById('prev-button');
const nextButton = document.getElementById('next-button');
const img = document.getElementById('current-Image');

const images = ['bl1.jpg', 'bl2.jpg', 'bl3.jpg', 'bl4.jpg'];

let currentIndex = 0; // Startindex
let autoSlideInterval; // Variable für Intervall

function updateImage() {
    img.classList.add('fade-out');
    setTimeout(() => {
        img.src = images[currentIndex];
        img.alt = images[currentIndex];
        img.classList.remove('fade-out');
    }, 300);
}

prevButton.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    updateImage();
    resetAutoSliding(); // Auto-Slide nach Klick zurücksetzen
});

nextButton.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % images.length;
    updateImage();
    resetAutoSliding(); // Auto-Slide nach Klick zurücksetzen
});

function autoSliding() {
    autoSlideInterval = setInterval(() => {
        currentIndex = (currentIndex + 1) % images.length;
        updateImage();
    }, 10000); // Alle 10 Sekunden wechseln
}

function resetAutoSliding() {
    clearInterval(autoSlideInterval); // Stoppt das Auto-Sliding
    autoSliding(); // Startet es neu
}

autoSliding(); // Startet das automatische Sliden



// NAVBAR-----------------------------------------------------------------------------------------------------
function toggleMenu() {
    document.querySelector(".nav-links").classList.toggle("active");
    document.querySelector(".hamburger").classList.toggle("active");
}


// FOOTER-----------------------------------------------------------------------------------------------------
    document.getElementById('year').textContent = new Date().getFullYear();


// Text-Slider-----------------------------------------------------------------------------------------------------



