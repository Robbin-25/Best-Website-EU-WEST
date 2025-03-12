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
