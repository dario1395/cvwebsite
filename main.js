document.querySelector('.menu-btn').addEventListener('click', () => {
    document.querySelector('.nav-menu').classList.toggle('show');
});

ScrollReveal().reveal('.showcase');
ScrollReveal().reveal('.cards', { delay: 500});
ScrollReveal().reveal('.card-banner-one', { delay: 500});