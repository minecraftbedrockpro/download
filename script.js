// Função para exibir a seção selecionada
function showSection(sectionId) {
    // Ocultar todas as seções
    document.getElementById('downloads-pc').classList.add('hidden');
    document.getElementById('downloads-android').classList.add('hidden');
    document.getElementById('downloads-patched').classList.add('hidden');

    // Exibir a seção selecionada
    document.getElementById(sectionId).classList.remove('hidden');
}

// Exibir a seção de PC por padrão ao carregar a página
showSection('downloads-pc');



for (let i = 0; i < 100; i++) {
    const star = document.createElement('div');
    star.classList.add('star');
    const size = Math.random() * 5 + 2; // Tamanho aleatório entre 2 e 7px
    star.style.width = `${size}px`;
    star.style.height = `${size}px`;
    star.style.top = `${Math.random() * 100}vh`;
    star.style.left = `${Math.random() * 100}vw`;
    star.style.animationDuration = `${Math.random() * 2 + 2}s`; // Duração aleatória entre 2 e 4 segundos
    star.style.animationDelay = `${Math.random() * 2}s`;
    document.body.appendChild(star);
}
