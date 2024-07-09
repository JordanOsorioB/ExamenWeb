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


document.addEventListener('DOMContentLoaded', function() {
    // Obtener todos los botones "Ver más..." y "Ver menos..."
    const verMasBtns = document.querySelectorAll('.buscarLibroBtn, .buscarAutorBtn');
    const verMenosBtns = document.querySelectorAll('.verMenos');

    // Añadir un evento de clic a cada botón "Ver más..."
    verMasBtns.forEach(btn => {
        btn.addEventListener('click', function(event) {
            event.preventDefault(); // Evitar que el enlace siga su href

            // Obtener la tarjeta padre del botón
            const cardBody = this.closest('.card-body');
            
            // Obtener el elemento de detalles dentro de la tarjeta
            const detalles = cardBody.querySelector('.detalles');
            const verMenosBtn = cardBody.querySelector('.verMenos');
            
            // Cambiar el estado de display de 'none' a 'block'
            if (detalles) {
                detalles.style.display = 'block';
                this.style.display = 'none';
                if (verMenosBtn) {
                    verMenosBtn.style.display = 'block';
                }
            }
        });
    });

    // Añadir un evento de clic a cada botón "Ver menos..."
    verMenosBtns.forEach(btn => {
        btn.addEventListener('click', function(event) {
            event.preventDefault(); // Evitar que el enlace siga su href

            // Obtener la tarjeta padre del botón
            const cardBody = this.closest('.card-body');
            
            // Obtener el elemento de detalles dentro de la tarjeta
            const detalles = cardBody.querySelector('.detalles');
            const verMasBtn = cardBody.querySelector('.buscarLibroBtn, .buscarAutorBtn');
            
            // Cambiar el estado de display de 'block' a 'none'
            if (detalles) {
                detalles.style.display = 'none';
                this.style.display = 'none';
                if (verMasBtn) {
                    verMasBtn.style.display = 'block';
                }
            }
        });
    });
});
