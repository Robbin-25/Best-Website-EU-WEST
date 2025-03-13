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
