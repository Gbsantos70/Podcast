const cards = document.querySelectorAll('.card-ep');

cards.forEach(function (card) {
    card.addEventListener('click', function () {
        const descricao = card.querySelector('.descricao-expandida')
        const estaAberto = card.classList.contains('ativo');
        cards.forEach(function (outroCard) {
            outroCard.classList.remove('ativo');
            outroCard.querySelector('.descricao-expandida').style.maxHeight = '0px';
        })
        if (!estaAberto) {
            card.classList.add('ativo');
            descricao.style.maxHeight = '200px';
        } else {
            descricao.style.maxHeight = '0px';
        }
    });
});

const integrantes = document.querySelectorAll('.integrantes .card-integrantes');

integrantes.forEach(function (integrante) {
    integrante.addEventListener('click', function () {
        const descricao = integrante.querySelector('.integrante-expandido')
        const estaAberto = integrante.classList.contains('ativo');
        integrantes.forEach(function (outroIntegrante) {
            outroIntegrante.classList.remove('ativo');
            outroIntegrante.querySelector('.integrante-expandido').style.maxHeight = '0px';
        });
        if (!estaAberto) {
            integrante.classList.add('ativo');
            descricao.style.maxHeight = '200px';
        } else {
            descricao.style.maxHeight = '0px';
        }
    });
});

