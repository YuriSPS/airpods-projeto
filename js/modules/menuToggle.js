export default function menuToggle() {
    const btnToggle = document.querySelector('.btn-toggle');
    const navList = document.querySelector('.nav-list');
    const btnCloseMenu = document.querySelector('.btn-close-toggle');

    const handleClick = () => {
        navList.classList.add('active-toggle');
    }
    const closeMenu = () => {
        navList.classList.remove('active-toggle');
    }

    btnToggle.addEventListener('click', handleClick);
    btnCloseMenu.addEventListener('click', closeMenu);
    
}