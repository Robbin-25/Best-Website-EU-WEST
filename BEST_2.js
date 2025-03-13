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

// Timeline-----------------------------------------------------------------------------------------------------

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

