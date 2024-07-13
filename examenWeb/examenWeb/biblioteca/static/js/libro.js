document.getElementById('searchInput').addEventListener('input', function() {
  const query = this.value.toLowerCase();
  const rows = document.querySelectorAll('.custom-table tbody tr');
  const noResults = document.getElementById('noResults');

  let hasResults = false;

  rows.forEach(row => {
      const title = row.cells[2].textContent.toLowerCase();
      const author = row.cells[3].textContent.toLowerCase();
      const category = row.cells[4].textContent.toLowerCase();

      if (title.includes(query) || author.includes(query) || category.includes(query)) {
          row.style.display = '';
          hasResults = true;
      } else {
          row.style.display = 'none';
      }
  });

  noResults.style.display = hasResults ? 'none' : 'block';
});
