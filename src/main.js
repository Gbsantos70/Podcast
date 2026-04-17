const cards = document.querySelectorAll('.card-ep');

cards.forEach(function (card) {
    card.addEventListener('click', function () {
        const descricao = card.querySelector('.descricao-expandida')
        if (card.classList.toggle('ativo')) {
            descricao.style.maxHeight = '200px';
        }         else {
            descricao.style.maxHeight = '0px';
        }
    });
});

