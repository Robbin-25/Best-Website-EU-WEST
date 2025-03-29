// Navbar -----------------------------------------------------------------------------------------------------
function toggleMenu() {
    document.querySelector(".nav-links").classList.toggle("active");
    document.querySelector(".nav-hamburger").classList.toggle("active");
}

function toggleMenu() {
    const navLinks = document.querySelector('.nav-links');
    const hamburger = document.querySelector('.nav-hamburger');
    const overlaynav = document.getElementById('overlay-nav');
  
    navLinks.classList.toggle('active');
    hamburger.classList.toggle('active');
  
    if (navLinks.classList.contains('active')) {
        overlaynav.style.display = 'block';
    } else {
        overlaynav.style.display = 'none';
    }
  }

window.addEventListener("scroll", function () {
    let navbar = document.querySelector(".navbar");
    if (window.scrollY > 150) {
      navbar.classList.add("scrolled");
    } else {
      navbar.classList.remove("scrolled");
    }
});

// Hero -----------------------------------------------------------------------------------------------------
document.addEventListener("DOMContentLoaded", function () {
    document.querySelector(".hero").classList.add("visible");
});

// Service -----------------------------------------------------------------------------------------------------
const cards = document.querySelectorAll('.service-card');
const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
};
const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

cards.forEach(card => {
    observer.observe(card);
});

// Chess -----------------------------------------------------------------------------------------------------
document.addEventListener("DOMContentLoaded", function () {
    const contents = document.querySelectorAll(".chess-content");
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("chess-show");
            } else {
                entry.target.classList.remove("chess-show");
            }
        });
    }, { threshold: 0.3 });
    
    contents.forEach(content => {
        observer.observe(content);
    });
});

// Porto -----------------------------------------------------------------------------------------------------
document.addEventListener("DOMContentLoaded", function () {
    const statsSection = document.querySelector(".porto-stats");

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                statsSection.classList.add("porto-show-stats");
            } else {
                statsSection.classList.remove("porto-show-stats"); // Entfernt die Klasse, wenn sie nicht sichtbar ist
            }
        });
    }, { threshold: 0.3 });

    observer.observe(statsSection);
});

// Work -----------------------------------------------------------------------------------------------------
document.addEventListener('DOMContentLoaded', () => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animate');
                    observer.unobserve(entry.target);
                }
            });
        }, {
            threshold: 0.1
        });

        // Beobachte nur die Karten (nicht die gesamte Sektion)
        const cards = document.querySelectorAll('.work-card-1, .work-card-2, .work-card-3');
        cards.forEach(card => observer.observe(card));
    });
