// Loader-Section -----------------------------------------------------------------------------------------------------
window.onload = function() {
    document.querySelector('.loader-loader').style.display = 'none';
};

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
    const chesscontents = document.querySelectorAll(".chess-content");
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("chess-show");
            } else {
                entry.target.classList.remove("chess-show");
            }
        });
    }, { threshold: 0.3 });
    
    chesscontents.forEach(content => {
        observer.observe(content);
    });
});

// Porto -----------------------------------------------------------------------------------------------------
document.addEventListener("DOMContentLoaded", function () {
    const portostatsSection = document.querySelector(".porto-stats");

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                portostatsSection.classList.add("porto-show-stats");
            } else {
                portostatsSection.classList.remove("porto-show-stats"); // Entfernt die Klasse, wenn sie nicht sichtbar ist
            }
        });
    }, { threshold: 0.3 });

    observer.observe(portostatsSection);
});

// FAQ-Section -----------------------------------------------------------------------------------------------------
function toggleFAQ(element) {
    let faqItem = element.parentElement;
    faqItem.classList.toggle("faq-active");
}

document.addEventListener("DOMContentLoaded", function () {
    const faqimage = document.querySelector(".faq-img");
    const faqSection = document.querySelector(".faq-section");
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                faqimage.classList.add("faq-show");
            } else {
                faqimage.classList.remove("faq-show");
            }
        });
    }, { threshold: 0.5 });
    observer.observe(faqSection);
});

// Chess-FAQ-Section -----------------------------------------------------------------------------------------------------
document.addEventListener("DOMContentLoaded", function () {
    const chessfaqcontents = document.querySelectorAll(".chess-faq-content");
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("chess-faq-show");
            } else {
                entry.target.classList.remove("chess-faq-show");
            }
        });
    }, { threshold: 0.3 });
    
    chessfaqcontents.forEach(content => {
        observer.observe(content);
    });
});
// FAQ-Chess-Section -----------------------------------------------------------------------------------------------------
function toggleFAQChess(element) {
    let faqchessItem = element.parentElement;
    faqchessItem.classList.toggle("faq-chess-active");
}

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

// Num-----------------------------------------------------------------------------------------------------
document.addEventListener('DOMContentLoaded', () => {
    // Observer für Animation der Karten
    const cardObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate');
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1
    });

    const cards = document.querySelectorAll('.work-card-1, .work-card-2, .work-card-3');
    cards.forEach(card => cardObserver.observe(card));

    // Observer für die Zahlen
    const numberObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            let valueDisplay = entry.target;
            let hasPlus = valueDisplay.getAttribute("data-plus") === "true";

            if (entry.isIntersecting && !valueDisplay.classList.contains("animated")) {
                valueDisplay.classList.add("animated");

                let startValue = 0;
                let endValue = parseInt(valueDisplay.getAttribute("data-val"));
                let duration = Math.floor(3000 / endValue);

                valueDisplay.textContent = hasPlus ? "+000" : "000";

                let counter = setInterval(() => {
                    startValue += 1;
                    valueDisplay.textContent = hasPlus ? `+${startValue}` : `${startValue}`;

                    if (startValue === endValue) {
                        clearInterval(counter);
                    }
                }, duration);

                entry.target.counter = counter;
            } else if (!entry.isIntersecting && valueDisplay.classList.contains("animated")) {
                clearInterval(entry.target.counter);
                valueDisplay.classList.remove("animated");
                valueDisplay.textContent = hasPlus ? "+000" : "000";
            }
        });
    }, {
        root: null,
        threshold: 0.5
    });

    const valueDisplays = document.querySelectorAll(".num");
    valueDisplays.forEach(num => numberObserver.observe(num));
});


// Timeline -----------------------------------------------------------------------------------------------------

document.addEventListener('DOMContentLoaded', function() {
    const items = document.querySelectorAll('.timeline-item');
    const timelineProgress = document.querySelector('.timeline-progress');
    const timeline = document.querySelector('.timeline');
    
    // Calculate positions after DOM is fully loaded
    let itemPositions = [];
    
    function calculatePositions() {
        itemPositions = [];
        const timelineRect = timeline.getBoundingClientRect();
        const timelineTop = window.pageYOffset + timelineRect.top;
        
        items.forEach(item => {
            const rect = item.getBoundingClientRect();
            const itemTop = window.pageYOffset + rect.top;
            
            // Get the circle position (the ::after element)
            const circleTop = itemTop - timelineTop; // This gets the top of the timeline item
            
            itemPositions.push({
                top: circleTop,      // Position of the top of the circle
                element: item
            });
        });
    }
    
    function updateScroll() {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        const windowHeight = window.innerHeight;
        const documentHeight = Math.max(
            document.body.scrollHeight, document.documentElement.scrollHeight,
            document.body.offsetHeight, document.documentElement.offsetHeight,
            document.body.clientHeight, document.documentElement.clientHeight
        );
        
        // Get timeline position
        const timelineRect = timeline.getBoundingClientRect();
        const timelineTop = window.pageYOffset + timelineRect.top;
        const timelineHeight = timeline.offsetHeight;
        const timelineBottom = timelineTop + timelineHeight;
        
        // Calculate progress
        let progress = 0;
        
        // If timeline is in view
        if (scrollTop + windowHeight > timelineTop && scrollTop < timelineBottom) {
            // Calculate progress based on scroll position relative to the document
            const scrollPosition = (scrollTop - timelineTop + windowHeight/2) / timelineHeight;
            progress = scrollPosition * 100;
            progress = Math.max(0, Math.min(progress, 100)); // Clamp between 0-100
        }
        
        // Force 100% at bottom
        if (scrollTop + windowHeight >= documentHeight - 20) {
            progress = 100;
        }
        
        // Update the progress line
        timelineProgress.style.height = `${progress}%`;
        
        // Make items visible when scrolled to
        items.forEach(item => {
            const rect = item.getBoundingClientRect();
            
            // Make visible when item comes into view
            if (rect.top <= windowHeight * 0.8) {
                item.classList.add('visible');
            }
        });
        
        // Activate dots when progress touches or passes them
        itemPositions.forEach((position, index) => {
            const item = position.element;
            const itemPosition = position.top;
            const progressHeight = timelineHeight * (progress / 100);
            
            // Fill the circle when the progress line reaches the TOP of the circle
            if (progressHeight >= itemPosition) {
                item.classList.add('active');
            } else {
                item.classList.remove('active');
            }
        });
        
        // Force all active at bottom
        if (scrollTop + windowHeight >= documentHeight - 20) {
            items.forEach(item => {
                item.classList.add('visible');
                item.classList.add('active');
            });
        }
    }
    
    // Calculate positions initially
    calculatePositions();
    
    // Recalculate on resize
    window.addEventListener('resize', calculatePositions);
    
    // Initial update
    updateScroll();
    
    // Update on scroll
    window.addEventListener('scroll', updateScroll);
    
    // Trigger scroll event to initialize animation
    setTimeout(function() {
        window.dispatchEvent(new Event('scroll'));
    }, 100);
});


