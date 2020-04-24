let audioSrc = [];

mainPage.addEventListener('click', (event) => {
    audioSrc=[];
    let category=event.target.closest('.main-card').innerText
    document.querySelector('.cards-layout').remove();
    cardsPage(category);
})

document.querySelector('.navigation__list').addEventListener('click', (event) => {
    audioSrc=[];
    let category=event.target.closest('.navigation__item').innerText
    document.querySelector('.cards-layout').remove();
    
    if(category==='Main Page') location.reload()
    else cardsPage(category);
});