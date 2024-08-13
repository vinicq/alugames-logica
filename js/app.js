let jogosAlugados = 0; // Inicializa o contador de jogos alugados como 0

/**
 * Função que exibe o total de jogos alugados no console.
 */
function contarEExibirJogosAlugados() {
    console.log(`Total de jogos alugados: ${jogosAlugados}`); // Exibe no console o total de jogos alugados
}

/**
 * Função que altera o status de aluguel de um jogo.
 * 
 * @param {string} id - O identificador do jogo que terá o status alterado.
 */
function alterarStatus(id) {
    const gameClicado = document.getElementById(`game-${id}`); // Obtém o elemento do jogo específico pelo ID
    const imagem = gameClicado.querySelector('.dashboard__item__img'); // Seleciona a imagem do jogo dentro do elemento
    const botao = gameClicado.querySelector('.dashboard__item__button'); // Seleciona o botão do jogo dentro do elemento

    // Alterna a classe 'dashboard__item__img--rented' para indicar se o jogo está alugado ou não
    const jogoAlugado = imagem.classList.toggle('dashboard__item__img--rented');

    if (jogoAlugado) {
        botao.classList.add('dashboard__item__button--return'); // Se o jogo foi alugado, altera o botão para "Devolver"
        botao.textContent = 'Devolver';
        jogosAlugados++; // Incrementa o contador de jogos alugados
    } else {
        botao.classList.remove('dashboard__item__button--return'); // Se o jogo foi devolvido, altera o botão para "Alugar"
        botao.textContent = 'Alugar';
        jogosAlugados--; // Decrementa o contador de jogos alugados
    }

    contarEExibirJogosAlugados(); // Exibe o total atualizado de jogos alugados
}

/**
 * Inicializa a contagem de jogos alugados ao carregar a página.
 * Conta quantos jogos já estão alugados com base na presença da classe 'dashboard__item__img--rented'.
 */
document.addEventListener('DOMContentLoaded', function() {
    // Conta quantos jogos já têm a classe 'dashboard__item__img--rented' (indicando que estão alugados)
    jogosAlugados = document.querySelectorAll('.dashboard__item__img--rented').length;
    contarEExibirJogosAlugados(); // Exibe o total de jogos alugados após a inicialização
});
