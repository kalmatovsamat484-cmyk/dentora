// Мобильное меню
const menuToggle = document.getElementById('menuToggle');
const navigation = document.getElementById('navigation');

menuToggle.addEventListener('click', () => {
    navigation.classList.toggle('active');
});

navigation.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
        navigation.classList.remove('active');
    });
});

// Форма записи
const appointmentForm = document.getElementById('appointmentForm');
const formMessage = document.getElementById('formMessage');

// ВАЖНО: замени номер на реальный номер WhatsApp.
// Формат: код страны + номер, без плюса и пробелов.
const WHATSAPP_NUMBER = '996555123456';

appointmentForm.addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value.trim();
    const phone = document.getElementById('phone').value.trim();
    const service = document.getElementById('service').value;

    if (!name || !phone || !service) {
        formMessage.textContent = 'Пожалуйста, заполните все поля.';
        return;
    }

    const message = `Здравствуйте! Хочу записаться на приём.

Имя: ${name}
Телефон: ${phone}
Услуга: ${service}`;

    const whatsappURL =
       orAll('a').forEach(link => {
    link.addEventListener('click', () => {


    window.open(whatsappURL, '_blank');

    formMessage.textContent = 'Откройте WhatsApp, чтобы отправить заявку.';
    appointmentForm.reset();
});
