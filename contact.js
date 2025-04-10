// loader-Section -----------------------------------------------------------------------------------------------------
window.addEventListener("load", function () {
    document.getElementById("preloader").style.display = "none";
});

// Form -----------------------------------------------------------------------------------------------------
const animatedFormFields = document.querySelectorAll('.form-input, .form-textarea');
        
        const scrollObserverOptions = {
            root: null,
            rootMargin: '0px',
            threshold: 0.1
        };

        const formFieldObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animation-visible');
                } else {
                    entry.target.classList.remove('animation-visible'); // Repeats animation on scroll
                }
            });
        }, scrollObserverOptions);

        animatedFormFields.forEach(formField => {
            formFieldObserver.observe(formField);
        });

        // Auto-resize textarea as user types
        document.getElementById('message-field').addEventListener('input', function() {
            this.style.height = 'auto';
            this.style.height = (this.scrollHeight) + 'px';
        });

// Navbar ---------------------------------------------------------------------------------------------------------------------------------------------------------
function toggleMenu() {
    document.querySelector(".nav-contact-links").classList.toggle("active");
    document.querySelector(".nav-contact-hamburger").classList.toggle("active");
}

function toggleMenu() {
    const navLinks = document.querySelector('.nav-contact-links');
    const hamburger = document.querySelector('.nav-contact-hamburger');
    const overlaynav = document.getElementById('overlay-contact-nav');
  
    navLinks.classList.toggle('active');
    hamburger.classList.toggle('active');
  
    if (navLinks.classList.contains('active')) {
        overlaynav.style.display = 'block';
    } else {
        overlaynav.style.display = 'none';
    }
  }
// Navbar ---------------------------------------------------------------------------------------------------------------------------------------------------------


// Year -----------------------------------------------------------------------------------------------------
  document.getElementById("year").textContent = new Date().getFullYear();
