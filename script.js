
// ===================================
// 1. MOBILE NAVIGATION
// ===================================

const navLinks = document.querySelectorAll(".nav-links a");

navLinks.forEach(function(link) {
    link.addEventListener("click", function() {
        console.log("Navigation clicked:", link.textContent);
    });
});


// ===================================
// 2. SMOOTH SCROLLING
// ===================================

document.querySelectorAll('a[href^="#"]').forEach(function(link) {

    link.addEventListener("click", function(event) {

        const targetId = link.getAttribute("href");

        if (targetId && targetId !== "#") {

            const target = document.querySelector(targetId);

            if (target) {
                event.preventDefault();

                target.scrollIntoView({
                    behavior: "smooth"
                });
            }

        }

    });

});


// ===================================
// 3. PORTFOLIO CARD ANIMATION
// ===================================

const portfolioCards = document.querySelectorAll(".portfolio-card");

portfolioCards.forEach(function(card) {

    card.addEventListener("mouseenter", function() {
        card.style.transition = "0.3s ease";
    });

});


// ===================================
// 4. START PROJECT BUTTON
// ===================================

const projectButton = document.querySelector(
    '.start-project .primary-button'
);

if (projectButton) {

    projectButton.addEventListener("click", function() {

        console.log("Visitor wants to start a project.");

    });

}


// ===================================
// 5. WHATSAPP CONTACT
// ===================================

const whatsappButton = document.querySelector(
    '.contact .primary-button'
);

if (whatsappButton) {

    whatsappButton.addEventListener("click", function() {

        console.log("Visitor is contacting you on WhatsApp.");

    });

}


// ===================================
// 6. FOOTER CURRENT YEAR
// ===================================

const footer = document.querySelector("footer p");

if (footer) {

    footer.innerHTML =
        "© " + new Date().getFullYear() +
        " DigitalPro. All Rights Reserved.";

}


// ===================================
// 7. WELCOME MESSAGE
// ===================================

console.log(
    "Welcome to DigitalPro - Your Business Growth Partner!"
);
