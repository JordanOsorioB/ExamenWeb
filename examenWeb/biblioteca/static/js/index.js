AOS.init();

$("#searchInput").on("input", function () {
  const query = $(this).val().toLowerCase();
  const $cards = $(".libro-card");
  const $librosTitulo = $("#librosTitulo");
  const $autoresTitulo = $("#autoresTitulo");
  const $categoriasTitulo = $("#categoriasTitulo");

  let hasResults = false;

  $cards.each(function () {
    const $card = $(this);
    const titulo = $card.find(".card-title").text().toLowerCase();
    const autor = $card.find(".card-autor").length ? $card.find(".card-autor").text().toLowerCase() : "";
    const categoria = $card.find(".card-categoria").length ? $card.find(".card-categoria").text().toLowerCase() : "";

    if (titulo.includes(query) || autor.includes(query) || categoria.includes(query)) {
      $card.show();
      hasResults = true;
    } else {
      $card.hide();
    }
  });

  if (query && hasResults) {
    $librosTitulo.hide();
    $autoresTitulo.hide();
    $categoriasTitulo.hide();
  } else if (query && !hasResults) {
    Swal.fire({
      template: "#noResults",
    });
  } else {
    $librosTitulo.show();
    $autoresTitulo.show();
    $categoriasTitulo.show();
  }
});


document.addEventListener("DOMContentLoaded", function () {
  // Obtener todos los botones "Ver más..." y "Ver menos..."
  const verMasBtns = document.querySelectorAll(
    ".buscarLibroBtn, .buscarAutorBtn"
  );
  const verMenosBtns = document.querySelectorAll(".verMenos");

  // Añadir un evento de clic a cada botón "Ver más..."
  verMasBtns.forEach((btn) => {
    btn.addEventListener("click", function (event) {
      event.preventDefault(); // Evitar que el enlace siga su href

      // Obtener la tarjeta padre del botón
      const cardBody = this.closest(".card-body");

      // Obtener el elemento de detalles dentro de la tarjeta
      const detalles = cardBody.querySelector(".detalles");
      const verMenosBtn = cardBody.querySelector(".verMenos");

      // Cambiar el estado de display de 'none' a 'block'
      if (detalles) {
        detalles.style.display = "block";
        this.style.display = "none";
        if (verMenosBtn) {
          verMenosBtn.style.display = "block";
        }
      }
    });
  });

  // Añadir un evento de clic a cada botón "Ver menos..."
  verMenosBtns.forEach((btn) => {
    btn.addEventListener("click", function (event) {
      event.preventDefault(); // Evitar que el enlace siga su href

      // Obtener la tarjeta padre del botón
      const cardBody = this.closest(".card-body");

      // Obtener el elemento de detalles dentro de la tarjeta
      const detalles = cardBody.querySelector(".detalles");
      const verMasBtn = cardBody.querySelector(
        ".buscarLibroBtn, .buscarAutorBtn"
      );

      // Cambiar el estado de display de 'block' a 'none'
      if (detalles) {
        detalles.style.display = "none";
        this.style.display = "none";
        if (verMasBtn) {
          verMasBtn.style.display = "block";
        }
      }
    });
  });
});
