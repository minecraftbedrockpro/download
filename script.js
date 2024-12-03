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
