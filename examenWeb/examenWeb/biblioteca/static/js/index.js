AOS.init();

document.getElementById('searchInput').addEventListener('input', function() {
  const query = this.value.toLowerCase();
  const $cards = $(".libro-card");
  const $librosTitulo = $("#librosTitulo");
  const $autoresTitulo = $("#autoresTitulo");
  const $categoriasTitulo = $("#categoriasTitulo");

  let hasResults = false;

  // Desactivar AOS para que no interfiere en la busqueda.
  AOS.init({
      disable: true
  });

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

/* Aqui hacemos la logica para desactivar o activar ciertas lineas dependiendo si queremos ver mas o menos */

document.addEventListener("DOMContentLoaded", function () {
  const verMasBtns = document.querySelectorAll(
    ".buscarLibroBtn, .buscarAutorBtn"
  );
  const verMenosBtns = document.querySelectorAll(".verMenos");

  verMasBtns.forEach((btn) => {
    btn.addEventListener("click", function (event) {
      event.preventDefault(); 

      const cardBody = this.closest(".card-body");

      const detalles = cardBody.querySelector(".detalles");
      const verMenosBtn = cardBody.querySelector(".verMenos");

      if (detalles) {
        detalles.style.display = "block";
        this.style.display = "none";
        if (verMenosBtn) {
          verMenosBtn.style.display = "block";
        }
      }
    });
  });

  verMenosBtns.forEach((btn) => {
    btn.addEventListener("click", function (event) {
      event.preventDefault(); 


      const cardBody = this.closest(".card-body");

      const detalles = cardBody.querySelector(".detalles");
      const verMasBtn = cardBody.querySelector(
        ".buscarLibroBtn, .buscarAutorBtn"
      );


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
