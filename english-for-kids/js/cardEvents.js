document.addEventListener('click', (event) => {
    
    if (document.querySelector('.word-cards') && event.target.closest('.word-cards__item')) {
        if(event.target.classList.contains('word-card__rotate')) {
            let card=event.target.closest('.word-cards__item');
            card.querySelector('.word-card-english').style.transform="rotateY(180deg)";
            setTimeout(() => {
                card.querySelector('.word-card-english').classList.add('hidden');
                // card.querySelector('.word-card-russian').classList.remove('hidden');
                card.querySelector('.word-card-russian').style.transform="rotateY(0)";
            }, 300);

            card.addEventListener('mouseleave', () => {
                card.querySelector('.word-card-russian').style.transform="rotateY(180deg)";
                setTimeout(() => {
                    card.querySelector('.word-card-english').classList.remove('hidden');
                    // card.querySelector('.word-card-russian').classList.remove('hidden');
                    card.querySelector('.word-card-english').style.transform="";
            }, 400);
            });

        }
        else {
            for (let i=0; i<audioSrc.length; i++) {
                if (audioSrc[i].includes(event.target.closest('.word-cards__item').classList[1]) && checkbox.checked) {
                    audio.src=audioSrc[i];
                    audio.play();
                }
            }
        }
    }
});