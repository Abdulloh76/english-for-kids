hamburger.onclick = () => {
    navMenu.classList.toggle('navigation-active');
    hamburger.classList.toggle('hamburger-active');
    document.body.classList.toggle('overflow-none');
};

document.addEventListener('click', (event) => {
    console.log(event.target.closest('.hamburger'))
    if (event.target.closest('.hamburger') === hamburger) return;
    else if (navMenu.classList.contains('navigation-active')) {
        navMenu.classList.remove('navigation-active');
        hamburger.classList.remove('hamburger-active');
        document.body.classList.remove('overflow-none');
    }
});