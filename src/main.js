const cards = document.querySelectorAll('.card-ep');

cards.forEach(function (card) {
    card.addEventListener('click', function () {
        const descricao = card.querySelector('.descricao-expandida')
        cards.forEach(function (outroCard) {
            outroCard.classList.remove('ativo');
            outroCard.querySelector('.descricao-expandida').style.maxHeight = '0px';
        })
        if (card.classList.toggle('ativo')) {
            descricao.style.maxHeight = '200px';
        } else {
            descricao.style.maxHeight = '0px';
        }
    });
});

