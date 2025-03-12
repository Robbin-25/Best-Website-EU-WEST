// Navbar -----------------------------------------------------------------------------------------------------
function toggleMenu() {
    document.querySelector(".nav-links").classList.toggle("active");
    document.querySelector(".nav-hamburger").classList.toggle("active");
}

// FAQ-Section -----------------------------------------------------------------------------------------------------
function toggleFAQ(element) {
    let faqItem = element.parentElement;
    
    // Schließt alle anderen FAQ-Items
    document.querySelectorAll(".faq-item").forEach(item => {
        if (item !== faqItem) {
            item.classList.remove("active");
        }
    });

    // Öffnet oder schließt das aktuelle Item
    faqItem.classList.toggle("active");
}

// Enes-code -----------------------------------------------------------------------------------------------------

let valueDisplay = document.querySelectorAll(".num");
let interval = 3000; // Gesamtzeit für das Zählen

let options = {
    root: null,
    threshold: 0.5
};

let observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        let valueDisplay = entry.target;
        let hasPlus = valueDisplay.getAttribute("data-plus") === "true"; // Prüft, ob Pluszeichen gesetzt wird

        if (entry.isIntersecting) {
            let startValue = 0;
            let endValue = parseInt(valueDisplay.getAttribute("data-val"));
            let duration = Math.floor(interval / endValue);

            // Setze Startwert mit oder ohne Pluszeichen
            valueDisplay.textContent = hasPlus ? "+000" : "000";

            let counter = setInterval(() => {
                startValue += 1;
                valueDisplay.textContent = hasPlus ? `+${startValue}` : startValue;

                if (startValue === endValue) {
                    clearInterval(counter);
                }
            }, duration);

            entry.target.counter = counter;
        } else {
            clearInterval(entry.target.counter);
        }
    });
}, options);

valueDisplay.forEach(num => observer.observe(num));


document.addEventListener("DOMContentLoaded", function () {
    document.querySelector(".hero").classList.add("visible");
});

document.querySelector("#btn-submit").addEventListener("click", function(event) {
    event.preventDefault(); // Verhindert das Neuladen der Seite

    let alertBox = document.getElementById("success-alert");
    alertBox.classList.add("show");

    setTimeout(() => {
        alertBox.classList.remove("show");
    }, 3000); 
});

document.addEventListener("DOMContentLoaded", function() {
    const popupToggler = document.querySelector("#Popup-toggler");
    const closeButton = document.querySelector(".special-i");
    const popup = document.querySelector("#popup-container");
    const overlay = document.querySelector("#popup-overlay");
    
    popupToggler.addEventListener("click", function(event) {
        event.preventDefault();
        event.stopPropagation();
        
        popup.classList.toggle("show");
        overlay.classList.toggle("show");
        document.body.classList.toggle("popup_open");
    });
    
    closeButton.addEventListener("click", function() {
        popup.classList.remove("show");
        overlay.classList.remove("show");
        document.body.classList.remove("popup_open");
    });
    
    // Close when clicking outside or on the overlay
    document.addEventListener("click", function(event) {
        if (!popup.contains(event.target) && !popupToggler.contains(event.target)) {
            popup.classList.remove("show");
            overlay.classList.remove("show");
            document.body.classList.remove("popup_open");
        }
    });
});

const galleryItems = document.querySelectorAll('.image-grid-standard, .image-grid-wide');
const lightbox = document.getElementById('image-viewer');
const lightboxImg = document.getElementById('viewer-img');
const closeBtn = document.querySelector('.viewer-close');

galleryItems.forEach((item) => {
    item.addEventListener('click', () => {
        lightbox.style.display = 'flex';
        lightboxImg.src = item.querySelector('img').src;
    });
});

closeBtn.addEventListener('click', () => {
    lightbox.style.display = 'none';
});

document.addEventListener('click', (event) => {
    if (event.target === lightbox) {
        lightbox.style.display = 'none';
    }
});

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

document.addEventListener('DOMContentLoaded', function() {
    const slider = document.querySelector('.ba-slider');
    const sliderBtn = document.querySelector('.ba-slider-button');
    const beforeImage = document.querySelector('.ba-before-image');
    const container = document.querySelector('.ba-image-comparison');
    const mobileInstruction = document.querySelector('.ba-mobile-instruction');
    const loadingIndicator = document.querySelector('.ba-loading');
    
    let isDragging = false;
    let isActive = false;
    let inactivityTimer;
    let isMobile = window.innerWidth <= 600;
    
    // Set initial position to 50%
    updateSliderPosition(50);
    
    // After images are loaded, hide the loading indicator
    window.addEventListener('load', () => {
      loadingIndicator.style.display = 'none';
      
      // Show mobile instruction for 3 seconds on mobile devices
      if (isMobile) {
        mobileInstruction.classList.add('ba-show');
        setTimeout(() => {
          mobileInstruction.classList.remove('ba-show');
        }, 3000);
      }
    });
    
    // Update isMobile on window resize
    window.addEventListener('resize', () => {
      isMobile = window.innerWidth <= 600;
    });
    
    // Handle mouse events
    sliderBtn.addEventListener('mousedown', (e) => {
      isDragging = true;
      activateSlider();
      e.preventDefault(); // Prevent text selection
    });
    
    window.addEventListener('mouseup', () => {
      if (isDragging) {
        isDragging = false;
        startInactivityTimer();
      }
    });
    
    container.addEventListener('mousemove', (e) => {
      if (isDragging) {
        const rect = container.getBoundingClientRect();
        const position = ((e.clientX - rect.left) / rect.width) * 100;
        updateSliderPosition(position);
      }
    });
    
    // Handle touch events for mobile
    sliderBtn.addEventListener('touchstart', (e) => {
      isDragging = true;
      activateSlider();
    }, { passive: true });
    
    window.addEventListener('touchend', () => {
      if (isDragging) {
        isDragging = false;
        startInactivityTimer();
      }
    });
    
    container.addEventListener('touchmove', (e) => {
      if (isDragging) {
        const rect = container.getBoundingClientRect();
        const position = ((e.touches[0].clientX - rect.left) / rect.width) * 100;
        updateSliderPosition(position);
        e.preventDefault(); // Prevent scrolling while dragging
      }
    }, { passive: false });
    
    // Click anywhere on the image to move the slider
    container.addEventListener('click', (e) => {
      if (!isDragging) {
        const rect = container.getBoundingClientRect();
        const position = ((e.clientX - rect.left) / rect.width) * 100;
        updateSliderPosition(position);
        activateSlider();
        startInactivityTimer();
      }
    });
    
    // Enter/leave the container
    container.addEventListener('mouseenter', () => {
      activateSlider();
    });
    
    container.addEventListener('mouseleave', () => {
      if (!isDragging) {
        deactivateSlider();
      }
    });
    
    function updateSliderPosition(position) {
      // Clamp position between 0 and 100
      position = Math.min(100, Math.max(0, position));
      
      // Update CSS variables
      container.style.setProperty('--ba-position', `${position}%`);
    }
    
    function activateSlider() {
      if (!isActive) {
        container.classList.add('ba-active');
        isActive = true;
      }
      clearTimeout(inactivityTimer);
    }
    
    function deactivateSlider() {
      container.classList.remove('ba-active');
      isActive = false;
    }
    
    function startInactivityTimer() {
      clearTimeout(inactivityTimer);
      inactivityTimer = setTimeout(() => {
        deactivateSlider();
      }, 2000); // Hide labels after 2 seconds of inactivity
    }
  });
