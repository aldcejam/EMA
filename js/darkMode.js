const html = document.querySelector('html');
const logo = document.querySelector('.header__log img')
logo.addEventListener('click', () => {
    html.classList.toggle('dark-mode')
})