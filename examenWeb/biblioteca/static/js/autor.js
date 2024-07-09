document.getElementById('searchInput').addEventListener('input', function() {
    const query = this.value.toLowerCase();
    const cards = document.querySelectorAll('.libro-card');
    const autoresTitulo = document.getElementById('autoresTitulo');

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
        autoresTitulo.style.display = 'none';
    } else {
        autoresTitulo.style.display = 'block';
    };
});

   