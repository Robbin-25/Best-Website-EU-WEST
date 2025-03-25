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
