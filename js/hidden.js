const openVideoButtons = document.querySelectorAll('.open-video-button');
const galleryVideoContainers = document.querySelectorAll('.gallery-video-container');

openVideoButtons.forEach((button, index) => {
  button.addEventListener('click', () => {
    galleryVideoContainers[index].classList.toggle('hide');
    if (galleryVideoContainers[index].classList.contains('hide')) {
      button.textContent = 'Open';
      button.classList.remove('closed');
    } else {
      button.textContent = 'Close';
      button.classList.add('closed');
    }
  });
});