  const catalogBtn = document.getElementById('catalog-btn');
  const videoContainer = document.getElementById('video-container');
  const closeBtn = document.getElementById('close-btn');
  const videoIframe = videoContainer.querySelector('iframe');


  catalogBtn.addEventListener('click', function(event) {
    event.preventDefault(); 
    videoContainer.style.display = 'block'; 
  });

 
  closeBtn.addEventListener('click', function() {
    videoContainer.style.display = 'none';
    videoIframe.src = 'https://www.youtube.com/embed/O051ds7v0io';
  });

  
  window.addEventListener('click', function(event) {
    if (event.target === videoContainer) {
      videoContainer.style.display = 'none'; 
      videoIframe.src = 'https://www.youtube.com/embed/O051ds7v0io';
    }
  });

  window.addEventListener('touchstart', function(event) {
    if (event.target === videoContainer || event.target === catalogBtn || event.target === closeBtn) {
      videoContainer.style.display = 'none';
      videoIframe.src = 'https://www.youtube.com/embed/O051ds7v0io';
    }
  });