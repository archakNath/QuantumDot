const scrollContainer = document.getElementById('scroll-container');
const imageGallery = document.getElementById('image-gallery');

// Listen for scroll events on the window
window.addEventListener('scroll', () => {
    // Get the current scroll position
    const scrollTop = window.scrollY;

    // Set the scroll position of the image gallery
    imageGallery.style.transform = `translateX(-${scrollTop}px)`;
});
