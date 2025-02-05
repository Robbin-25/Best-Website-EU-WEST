const gallery = document.getElementById('gallery');
const prevButton = document.getElementById('prev-button');
const nextButton = document.getElementById('next-button');
const img = document.getElementById('current-Image');

const images = ['bl1.jpg', 'bl2.jpg', 'bl3.jpg', 'orchard.jpg', 'orchard1.jpg'];
let currentIndex = 0; // Startindex


prevButton.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    updateImage();
});

nextButton.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % images.length;
    updateImage();
});

}
