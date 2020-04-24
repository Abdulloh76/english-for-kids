checkbox.onclick = () => {
    if (checkbox.checked) {
        navMenu.classList.remove('navigation-play');
        document.querySelectorAll('.main-card').forEach((el) => el.classList.remove('main-card-play'));
        
        document.querySelectorAll('.word-card').forEach((el) =>  el.classList.remove('word-card-play'));
    }
    else {
        navMenu.classList.add('navigation-play');
        document.querySelectorAll('.main-card').forEach((el) => el.classList.add('main-card-play'));

        document.querySelectorAll('.word-card').forEach((el) =>  el.classList.add('word-card-play'));
    }
}