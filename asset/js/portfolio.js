const imageGallery = document.getElementById('image-gallery');
const scrollContainer = document.getElementById('scroll-container');

// Clone images to ensure infinite scrolling
function cloneImages() {
    const images = Array.from(imageGallery.children);
    images.forEach(image => {
        const clone = image.cloneNode(true);
        imageGallery.appendChild(clone);
    });
}

// Call function to clone images
cloneImages();
cloneImages();
cloneImages();
cloneImages();

// Calculate the gallery width for a single set of images
const singleSetWidth = imageGallery.scrollWidth / 2;

// Listen for scroll events on the window
window.addEventListener('scroll', () => {
    // Get the current vertical scroll position
    const scrollTop = window.scrollY;

    // Calculate the horizontal scroll position
    let horizontalScroll = scrollTop;

    // Set the scroll position of the image gallery
    imageGallery.style.transform = `translateX(-${horizontalScroll}px)`;
});
