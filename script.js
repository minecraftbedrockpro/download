function showDownloadButton(link, option, version, icon) {
    const downloadButton = document.getElementById('downloadButton');
    const selectedOption = document.getElementById('selectedOption');

    // Limpar conteúdo anterior dos botões
    downloadButton.innerHTML = '';

    // Se a opção for Android, mostrar dois botões em vez de um único
    if (option === 'Android') {
        downloadButton.innerHTML = `
            <button class="button" onclick="window.location.href='https://anonymfile.com/f/558d7e44-8e0c-4889-b17e-93d91f3fae1c'">Baixar 64bit</button>
            <button class="button" onclick="window.location.href='https://anonymfile.com/f/558d7e44-8e0c-4889-b17e-93d91f3fae1c'">Baixar 32bit</button>
        `;
    } else {
        // Para outras opções, criar um único botão de download
        const downloadLink = document.createElement('a');
        downloadLink.href = link;
        downloadLink.classList.add('button');
        downloadLink.textContent = 'Baixar';
        downloadLink.setAttribute('download', ''); // Permite o download diretamente
        downloadButton.appendChild(downloadLink);
    }

    downloadButton.style.display = 'block'; // Exibir a div de download

    // Atualizar as informações da opção selecionada
    selectedOption.innerHTML = `
        Opção selecionada: ${option}
        <div class="version-info">
            <img src="${icon}" alt="${option} Icon"> <!-- Ícone -->
            <div class="version">${version}</div>
        </div>
    `;
}

// Criar efeito de estrelas ao carregar a página
document.addEventListener("DOMContentLoaded", function () {
    for (let i = 0; i < 100; i++) {
        const star = document.createElement("div"); // Cria o elemento da estrela
        star.classList.add("star"); // Adiciona a classe para estilizar

        const size = Math.random() * 5 + 2; // Tamanho aleatório entre 2 e 7px
        star.style.width = `${size}px`;
        star.style.height = `${size}px`;
        star.style.top = `${Math.random() * 100}vh`; // Posicionamento aleatório vertical
        star.style.left = `${Math.random() * 100}vw`; // Posicionamento aleatório horizontal
        star.style.animationDuration = `${Math.random() * 2 + 2}s`; // Duração da animação aleatória
        star.style.animationDelay = `${Math.random() * 2}s`; // Atraso aleatório na animação

        document.body.appendChild(star); // Adiciona a estrela ao corpo da página
    }
});
