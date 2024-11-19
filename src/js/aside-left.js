const openMenuButton = document.querySelector('.bottom-burger');
const leftMenu = document.querySelector('.aside-left');
const closeMenuButton = document.querySelector('.bottom-close');
const openCall = document.querySelectorAll('.bottom-call');
const closeCall = document.querySelector('.close-call');
const feedbackCall = document.querySelector('.request-call');
const openChat = document.querySelectorAll('.bottom-chat')
const feedbackChat = document.querySelector('.feedback-chat')
const closeChat = document.querySelector('.close-chat')
const header = document.querySelector('.header')
const main = document.querySelector('.main')

document.addEventListener('click', function(event) {
    // Преобразуем NodeList в массивы
    const openCallButtons = Array.from(openCall);
    const openChatButtons = Array.from(openChat);

    // Проверяем, что клик произошел не по кнопкам или модальным элементам
    if (!feedbackCall.contains(event.target) && 
        !feedbackChat.contains(event.target) && 
        !leftMenu.contains(event.target) &&
        !openMenuButton.contains(event.target) &&
        !openCallButtons.some(button => button.contains(event.target)) &&
        !openChatButtons.some(button => button.contains(event.target))) {

        // Закрываем модальные окна, если они открыты
        if (feedbackCall.style.display === 'block') {
            feedbackCall.style.display = 'none';
            document.body.style.overflow = '';
            header.style.opacity = '';
            main.style.opacity = '';
            leftMenu.style.opacity = '';
        }

        if (feedbackChat.style.display === 'block') {
            feedbackChat.style.display = 'none';
            document.body.style.overflow = '';
            header.style.opacity = '';
            main.style.opacity = '';
            leftMenu.style.opacity = '';
        }

        if (leftMenu.style.display === 'block') {
            leftMenu.style.display = 'none';
            document.body.style.overflow = '';
            header.style.opacity = '';
            main.style.opacity = '';
        }
    }
});

openMenuButton.addEventListener('click', function(event) {
    // Останавливаем всплытие события, чтобы оно не дошло до обработчика на document
    event.stopPropagation();

    if (window.innerWidth < 1400) {
        leftMenu.style.display = 'block';
        closeMenuButton.style.display = 'block';
        document.body.style.overflow = 'hidden';
        header.style.opacity = '0.04';
        main.style.opacity = '0.04';
    }
});

closeMenuButton.addEventListener('click', function() {
    if (window.innerWidth < 1400) {
        leftMenu.style.display = 'none';
        document.body.style.overflow = '';
        header.style.opacity = '';
        main.style.opacity = '';
    }
});

openCall.forEach(button => {
    button.addEventListener('click', function(event) {
        // Останавливаем всплытие события
        event.stopPropagation();

        feedbackCall.style.display = 'block';
        document.body.style.overflow = 'hidden';
        header.style.opacity = '0.04';
        main.style.opacity = '0.04';
        leftMenu.style.opacity = '0.01';
    });
});

closeCall.addEventListener('click', function() {
    feedbackCall.style.display = 'none';
    document.body.style.overflow = '';
    header.style.opacity = '';
    main.style.opacity = '';
    leftMenu.style.opacity = '';
});

openChat.forEach(button => {
    button.addEventListener('click', function(event) {
        // Останавливаем всплытие события
        event.stopPropagation();

        feedbackChat.style.display = 'block';
        document.body.style.overflow = 'hidden';
        header.style.opacity = '0.04';
        main.style.opacity = '0.04';
        leftMenu.style.opacity = '0.01';
    });
});

closeChat.addEventListener('click', function() {
    feedbackChat.style.display = 'none';
    document.body.style.overflow = '';
    header.style.opacity = '';
    main.style.opacity = '';
    leftMenu.style.opacity = '';
});
