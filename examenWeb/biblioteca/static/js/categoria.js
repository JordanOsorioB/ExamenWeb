document.getElementById('searchInput').addEventListener('input', function() {
    const query = this.value.toLowerCase();
    const cards = document.querySelectorAll('.libro-card');
    const categoriasTitulo = document.getElementById('categoriasTitulo');

    let hasResults = false;

    cards.forEach(card => {
        const title = card.querySelector('.card-title').textContent.toLowerCase();
        if (title.includes(query)) {
            card.style.display = 'block';
            hasResults = true;
        } else {
            card.style.display = 'none';
        }
    });

    if (query && hasResults) {
        categoriasTitulo.style.display = 'none';
    } else if (query && !hasResults) {
        noResults.style.display = 'block';
    } else {
        categoriasTitulo.style.display = 'block';
    };
});

   