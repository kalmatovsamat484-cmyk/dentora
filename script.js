// MOBILE MENU

const menuToggle = document.getElementById("menuToggle");
const nav = document.getElementById("nav");

menuToggle.addEventListener("click", () => {
    nav.classList.toggle("active");
});

// CLOSE MENU AFTER CLICK

document.querySelectorAll(".nav a").forEach(link => {
    link.addEventListener("click", () => {
        nav.classList.remove("active");
    });
});


// APPOINTMENT FORM

const form = document.getElementById("appointmentForm");

form.addEventListener("submit", function(event) {

    event.preventDefault();

    const name = document.getElementById("name").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const service = document.getElementById("service").value;

    if (!name || !phone || !service) {
        alert("Пожалуйста, заполните все поля.");
        return;
    }

    // DEMO WHATSAPP NUMBER
    // Replace with the real clinic number.

    const whatsappNumber = "996555123456";

    const message = `
Здравствуйте! Хочу записаться на приём.

Имя: ${name}
Телефон: ${phone}
Услуга: ${service}
    `;

    const whatsappURL =
        "https://wa.me/" +
        whatsappNumber +
        "?text=" +
        encodeURIComponent(message);

    window.open(whatsappURL, "_blank");

});


// SIMPLE SCROLL REVEAL

const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {
            entry.target.classList.add("visible");
        }

    });

}, {
    threshold: 0.12
});

document.querySelectorAll(
    ".service-card, .doctor-card, .review-card, .advantage"
).forEach(element => {

    element.classList.add("reveal");
    observer.observe(element);

});
