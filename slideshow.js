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
    }, 100);
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


// Pop up chat-----------------------------------------------------------------------------------------------------

const PopupToggler = document.querySelector("#Popup-toggler");
const CloseButton = document.querySelector("#Close_Button");
const Popup = document.querySelector(".Haupt-popup");

// Öffnen des Popups
PopupToggler.addEventListener("click", (event) => {
    event.stopPropagation(); // Verhindert sofortiges Schließen nach dem Öffnen
    document.body.classList.toggle("popup_open");
});

// Schließen des Popups mit dem Close-Button
CloseButton.addEventListener("click", (event) => {
    event.stopPropagation();
    document.body.classList.remove("popup_open");
});

// Schließen des Popups, wenn außerhalb geklickt wird
document.addEventListener("click", (event) => {
    if (!Popup.contains(event.target) && !PopupToggler.contains(event.target)) {
        document.body.classList.remove("popup_open");
    }
});


window.onload = function() {
    const title = document.querySelector('.title-h1');
    const line = document.querySelector('.theline');
    const text = document.querySelector('.under-under-text');

    // Titel erscheinen lassen
    title.style.opacity = "1";
    title.style.transform = "scale(1)";

    // Linie wächst (auf gleiche Breite wie Titel)
    setTimeout(() => {
        line.style.width = title.offsetWidth + "px";
    }, 500); // 0.5 Sek Verzögerung nach Titel

    // Untertext erscheint nach der Linie
    setTimeout(() => {
        text.style.opacity = "1";
        text.style.transform = "scale(1)";
    }, 1000); // 1 Sek Verzögerung nach Linie
};


