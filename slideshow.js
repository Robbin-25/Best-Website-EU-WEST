const gallery = document.getElementById('gallery');
const prevButton = document.getElementById('prev-button');
const nextButton = document.getElementById('next-button');
const img = document.getElementById('current-Image');

const images = ['bl1.jpg', 'bl2.jpg', 'bl3.jpg','bl4.jpg'];
let currentIndex = 0; // Startindex

function updateImage() {
    img.classList.add('fade-out');
    setTimeout(() => {
        img.src = images[currentIndex];
        img.alt = images[currentIndex];
        img.classList.remove('fade-out');
    }, 0);
}

prevButton.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    updateImage();
});

nextButton.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % images.length;
    updateImage();
});

function updateImage() {
    img.classList.add('fade-out');
    setTimeout(() => {
        img.src = images[currentIndex];
        img.alt = images[currentIndex];
        img.classList.remove('fade-out');
    }, 0);
}
