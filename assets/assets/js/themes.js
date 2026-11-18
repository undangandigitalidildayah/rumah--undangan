document.addEventListener("DOMContentLoaded", () => {
  const filterButtons = document.querySelectorAll(".filter-btn");
  const cards = document.querySelectorAll(".catalog-card");
  const modal = document.getElementById("themeModal");

  // FILTER KATEGORI
  filterButtons.forEach(button => {
    button.addEventListener("click", () => {
      const category = button.dataset.filter;

      filterButtons.forEach(item => {
        item.classList.remove("active");
      });

      button.classList.add("active");

      cards.forEach(card => {
        const matches =
          category === "all" ||
          card.dataset.category === category;

        card.style.display = matches ? "" : "none";
      });
    });
  });

  // PREVIEW TEMA
  document.querySelectorAll(".preview-theme").forEach(button => {
    button.addEventListener("click", () => {
      const card = button.closest(".catalog-card");
      const preview = card.querySelector(".theme-preview");
      const name = card.dataset.name;
      const code = card.dataset.code;

      modal.querySelector(".modal-preview").innerHTML =
        preview.outerHTML;

      modal.querySelector(".modal-title").textContent = name;
      modal.querySelector(".modal-description").textContent =
        "Kode tema: " + code;

      modal.classList.add("show");
      document.body.style.overflow = "hidden";
    });
  });

  // TUTUP MODAL
  function closeModal() {
    modal.classList.remove("show");
    document.body.style.overflow = "";
  }

  document.querySelector(".modal-close")
    .addEventListener("click", closeModal);

  modal.addEventListener("click", event => {
    if (event.target === modal) closeModal();
  });

  document.addEventListener("keydown", event => {
    if (event.key === "Escape") closeModal();
  });

  // PESAN TEMA
  document.querySelectorAll(".order-theme").forEach(button => {
    button.addEventListener("click", () => {
      const card = button.closest(".catalog-card");
      const name = card.dataset.name;
      const code = card.dataset.code;

      const message = encodeURIComponent(
        "Halo Rumah Undangan, saya tertarik memesan tema " +
        name + " dengan kode " + code + "."
      );

      // Ganti dengan nomor WhatsApp bisnis
      const phone = "62XXXXXXXXXXX";

      if (phone.includes("X")) {
        alert("Nomor WhatsApp bisnis belum diatur.");
        return;
      }

      window.open(
        "https://wa.me/" + phone + "?text=" + message,
        "_blank"
      );
    });
  });

});
