// Função para adicionar as estrelas dinamicamente
for (let i = 0; i < 100; i++) {
    const star = document.createElement('div'); // Cria o elemento da estrela
    star.classList.add('star'); // Adiciona a classe para estilizar

    const size = Math.random() * 5 + 2; // Tamanho aleatório entre 2 e 7px
    star.style.width = `${size}px`;
    star.style.height = `${size}px`;
    star.style.top = `${Math.random() * 100}vh`; // Posicionamento aleatório vertical
    star.style.left = `${Math.random() * 100}vw`; // Posicionamento aleatório horizontal
    star.style.animationDuration = `${Math.random() * 2 + 2}s`; // Duração da animação aleatória
    star.style.animationDelay = `${Math.random() * 2}s`; // Atraso aleatório na animação

    document.body.appendChild(star); // Adiciona a estrela ao corpo da página
}
