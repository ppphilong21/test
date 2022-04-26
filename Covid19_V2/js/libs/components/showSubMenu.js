const subMenu = document.querySelector('.header-sub--responsive');
const iconClickShow = document.querySelector('.menu-bars');
const iconClickClose = document.querySelector('.menu-close');

iconClickShow.addEventListener('click', () => {
    subMenu.classList.add('show');
    iconClickShow.classList.add('hide');
    iconClickClose.classList.remove('hide');
    console.log(iconClick);
})

iconClickClose.addEventListener('click', () => {
    subMenu.classList.remove('show');
    iconClickShow.classList.remove('hide');
    iconClickClose.classList.add('hide');
})

