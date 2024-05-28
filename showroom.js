document.addEventListener('DOMContentLoaded', function() {
    const images = [
        './img/sr5.jpg', // Replace with your image paths
        './img/sr6.jpg', // Replace with your image paths
        './img/sr7.jpg'  // Replace with your image paths
    ];

    let currentIndex = 0;

    const sliderImage = document.getElementById('slider-image');
    const prevButton = document.getElementById('prev');
    const nextButton = document.getElementById('next');

    function showImage(index) {
        sliderImage.src = images[index];
    }

    prevButton.addEventListener('click', function() {
        currentIndex = (currentIndex > 0) ? currentIndex - 1 : images.length - 1;
        showImage(currentIndex);
    });

    nextButton.addEventListener('click', function() {
        currentIndex = (currentIndex < images.length - 1) ? currentIndex + 1 : 0;
        showImage(currentIndex);
    });

    // Initial display
    showImage(currentIndex);
});