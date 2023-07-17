const galleryImages = document.querySelectorAll('.gallery-image');

galleryImages.forEach(function (image) {
  image.addEventListener('click', function () {
    const imagePath = this.querySelector('img').getAttribute('src');
    const imageCaption = this.querySelector('.gallery-image-caption').textContent;

    const modal = document.createElement('div');
    modal.classList.add('modal-gallery');
    modal.innerHTML = `
      <div class="modal-contentGallery">
       
        <img src="${imagePath}" alt="Full Image">
        <p class="modal-caption">${imageCaption}</p>
      </div>
    `;

    document.body.appendChild(modal);

    modal.addEventListener('click', function (event) {
      if (event.target === modal) {
        document.body.removeChild(modal);
      }
    });
  });
});