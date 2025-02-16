const gallery = document.getElementById('gallery');
const prevButton = document.getElementById('prev-button');
const nextButton = document.getElementById('next-button');
const img = document.getElementById('current-Image');

const images = [ 'bl1.jpg','bl2.jpg','bl3.jpg','bl4.jpg'
];

let currentIndex = 0; // Startindex

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
});

nextButton.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % images.length;
    updateImage();
});

let autoSlideInterval; // Variable für Intervall

function autoSliding() {
    autoSlideInterval = setInterval(() => {
        currentIndex = (currentIndex + 1) % images.length;
        updateImage();
    }, 10000); 
}

autoSliding();
b


// NAVBAR-----------------------------------------------------------------------------------------------------
function toggleMenu() {
    document.querySelector(".nav-links").classList.toggle("active");
    document.querySelector(".hamburger").classList.toggle("active");
}


// FOOTER-----------------------------------------------------------------------------------------------------
    document.getElementById('year').textContent = new Date().getFullYear();


// Text-Slider-----------------------------------------------------------------------------------------------------
        let index = 0;
        const wrapper = document.querySelector('.slider-wrapper');
        const items = document.querySelectorAll('.slider-item');
        const total = items.length;

        function updateSlider() {
            items.forEach(item => item.classList.remove('active'));
            items[index].classList.add('active');
            wrapper.style.transform = `translateX(-${index * 100}%)`;
        }

        document.querySelector('.next').addEventListener('click', () => {
            index = (index + 1) % total;
            updateSlider();
        });

        document.querySelector('.prev').addEventListener('click', () => {
            index = (index - 1 + total) % total;
            updateSlider();
        });

        let startX = 0;
        let endX = 0;
        const slider = document.querySelector('.text-slider-container');

        slider.addEventListener('touchstart', (e) => {
            startX = e.touches[0].clientX;
        });

        slider.addEventListener('touchend', (e) => {
            endX = e.changedTouches[0].clientX;
            if (startX > endX + 50) {
                index = (index + 1) % total;
            } else if (startX < endX - 50) {
                index = (index - 1 + total) % total;
            }
            updateSlider();
        });




