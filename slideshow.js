const gallery = document.getElementById('gallery');
const prevButton = document.getElementById('prev-button');
const nextButton = document.getElementById('next-button');
const img = document.getElementById('current-Image');

const images = ['bl1.jpg', 'bl2.jpg', 'bl3.jpg', 'bl4.jpg'];
let currentIndex = 0; // Startindex

function updateImage() {
    img.classList.add('fade-out');
    setTimeout(() => {
        img.src = images[currentIndex];
        img.alt = images[currentIndex];
        img.classList.remove('fade-out');
    }, 0);
}

function prevSlide() {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    updateImage();
}

// Function to go to the next slide
function nextSlide() {
    currentIndex = (currentIndex + 1) % images.length;
    updateImage();
}

}

prevButton.addEventListener('click', prevSlide);
nextButton.addEventListener('click', nextSlide);

prevButton.addEventListener('touchstart', prevSlide);
nextButton.addEventListener('touchstart', nextSlide);
