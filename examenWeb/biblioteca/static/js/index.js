document.getElementById('searchInput').addEventListener('input', function() {
    const query = this.value.toLowerCase();
    const cards = document.querySelectorAll('.libro-card');
    const librosTitulo = document.getElementById('librosTitulo');
    const autoresTitulo = document.getElementById('autoresTitulo');
    const categoriasTitulo = document.getElementById('categoriasTitulo');

    let hasResults = false;

    cards.forEach(card => {
        const titulo = card.querySelector('.card-title').textContent.toLowerCase();
        const autor = card.querySelector('.card-autor') ? card.querySelector('.card-autor').textContent.toLowerCase() : '';
        const categoria = card.querySelector('.card-categoria') ? card.querySelector('.card-categoria').textContent.toLowerCase() : '';

        if (titulo.includes(query) || autor.includes(query) || categoria.includes(query)) {
            card.style.display = 'block';
            hasResults = true;
        } else {
            card.style.display = 'none';
        }
    });

    if (query && hasResults) {
        librosTitulo.style.display = 'none';
        autoresTitulo.style.display = 'none';
        categoriasTitulo.style.display = 'none';
    } else if (query && !hasResults) {
        noResults.style.display = 'block';
    } else {
        librosTitulo.style.display = 'block';
        autoresTitulo.style.display = 'block';
        categoriasTitulo.style.display = 'block';
    };
});

   
