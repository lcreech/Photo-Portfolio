// scripts.js
document.addEventListener('DOMContentLoaded', () => {
  const images = document.querySelectorAll('.gallery img');
  const lightbox = document.getElementById('lightbox');
  const lightboxImage = document.getElementById('lightbox-image');
  const closeBtn = document.getElementById('close-btn');

  // Open lightbox
  images.forEach(image => {
    image.addEventListener('click', () => {
      lightbox.style.display = 'flex'; // Show lightbox
      lightboxImage.src = image.src; // Set lightbox image source
      lightboxImage.alt = image.alt; // Set lightbox image alt text
    });
  });

  // Close lightbox
  closeBtn.addEventListener('click', () => {
    lightbox.style.display = 'none'; // Hide lightbox
  });

  // Close lightbox by clicking outside the image
  lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox) {
      lightbox.style.display = 'none'; // Hide lightbox
    }
  });
});
