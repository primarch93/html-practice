function openOrderModal() {
  const modal = document.getElementById("orderModal");
  modal.style.display = "block";
}

function closeModal(modalId) {
  const modal = document.getElementById(modalId);
  if (modal) {
    modal.style.display = "none";
  }
}

document.addEventListener("click", function (event) {
  const target = event.target;

  if (target.classList.contains("add-to-cart-button")) {
    openOrderModal();
  } else if (target.classList.contains("modal")) {
    closeModal("inner-modal");
    closeModal("orderModal");
  }
});

document.addEventListener("touchstart", function (event) {
  const target = event.target;

  if (target.classList.contains("modal")) {
    closeModal("inner-modal");
    closeModal("orderModal");
  }
});
