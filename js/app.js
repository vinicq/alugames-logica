let jogosAlugados = 0;

function contarEExibirJogosAlugados() {
    console.log(`Total de jogos alugados: ${jogosAlugados}`);
}

function alterarStatus(id) {
    const gameClicado = document.getElementById(`game-${id}`);
    const imagem = gameClicado.querySelector('.dashboard__item__img');
    const botao = gameClicado.querySelector('.dashboard__item__button');

    const jogoAlugado = imagem.classList.toggle('dashboard__item__img--rented');

    if (jogoAlugado) {
        botao.classList.add('dashboard__item__button--return');
        botao.textContent = 'Devolver';
        jogosAlugados++;
    } else {
        botao.classList.remove('dashboard__item__button--return');
        botao.textContent = 'Alugar';
        jogosAlugados--;
    }

    contarEExibirJogosAlugados();
}

// Inicializa a contagem considerando que os jogos já começam alugados
document.addEventListener('DOMContentLoaded', function() {
    jogosAlugados = document.querySelectorAll('.dashboard__item__img--rented').length;
    contarEExibirJogosAlugados();
});
