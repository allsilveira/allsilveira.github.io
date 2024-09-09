window.addEventListener('scroll', () => {
    const backToTopButton = document.querySelector('.back-to-top');

    // Se o usuário descer mais de 100px no scroll, exibe o botão
    if (window.scrollY > 100) {
        backToTopButton.style.display = 'flex';
    } else {
        backToTopButton.style.display = 'none';
    }
});