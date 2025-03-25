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
