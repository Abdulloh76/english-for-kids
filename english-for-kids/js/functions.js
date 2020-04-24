// import cards from "./cards";

function cardsPage(category) {
    let play='', counter = cards[0].indexOf(category); 
    wrapper.insertAdjacentHTML('beforeEnd', '<div class="cards-layout word-cards" id="cards"> </div>');
    document.querySelector('.active').classList.remove('active');
    navItem.forEach((el) => {
        if(el.innerText==cards[0][counter]) el.classList.add('active')
    });
    play=''; counter++;
    if(!checkbox.checked) play='word-card-play';
    for (let i=0; i<cards[counter].length; i++) {
        document.querySelector('#cards').insertAdjacentHTML('beforeEnd', 
        `<div class="word-cards__item ${cards[counter][i].word}">
            <div class="word-card word-card-english ${play}">
                <img src="${cards[counter][i].image}" alt="" class="word-card__image">
                <p class="word-card__header">${cards[counter][i].word}</p> 
                <img src="assets/img/rotate.svg" alt="" class="word-card__rotate">
            </div>
            <div class="word-card word-card-russian word-card-reversed">
                <img src="${cards[counter][i].image}" alt="" class="word-card__image">
                <p class="word-card__header">${cards[counter][i].translation}</p> 
            </div>
        </div>`)
        audioSrc.push(cards[counter][i].audioSrc);
    }
}