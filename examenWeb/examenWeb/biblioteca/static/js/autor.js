document.getElementById('searchInput').addEventListener('input', function() {
    const query = this.value.toLowerCase();
    const rows = document.querySelectorAll('#autoresSeccion .custom-table tbody tr');
    const noResults = document.getElementById('noResults'); // Asegúrate de que este elemento exista si quieres mostrar un mensaje de "sin resultados".

    let hasResults = false;

    rows.forEach(row => {
        const name = row.cells[1].textContent.toLowerCase();
        const nationality = row.cells[2].textContent.toLowerCase();
        const category = row.cells[3].textContent.toLowerCase();

        if (name.includes(query) || nationality.includes(query) || category.includes(query)) {
            row.style.display = '';
            hasResults = true;
        } else {
            row.style.display = 'none';
        }
    });

    noResults.style.display = hasResults ? 'none' : 'block';
});
