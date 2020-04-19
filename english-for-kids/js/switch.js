checkbox.onclick = () => {
    if (checkbox.checked) {
        navMenu.classList.remove('navigation-play');
        mainCards.forEach((el) => el.classList.remove('main-card-play'));

        wordCards.forEach((el) =>  el.classList.remove('word-card-play'));
    }
    else {
        navMenu.classList.add('navigation-play');
        mainCards.forEach((el) => el.classList.add('main-card-play'));

        wordCards.forEach((el) =>  el.classList.add('word-card-play'));
    }
}