let currentIndex = 0;
const images = document.querySelectorAll('.image-rotator img');

function changeImage(n) {
    currentIndex = (currentIndex + n + images.length) % images.length;
    showImage(currentIndex);
}

function showImage(index) {
    images.forEach((image, i) => {
        if (i === index) {
            image.style.display = 'block';
        } else {
            image.style.display = 'none';
        }
    });
}

let intervalId;

function startRotation() {
    intervalId = setInterval(() => {
        changeImage(1);
    }, 3000);
}

function stopRotation() {
    clearInterval(intervalId);
}

document.querySelector('.image-rotator').addEventListener('mouseenter', stopRotation);
document.querySelector('.image-rotator').addEventListener('mouseleave', startRotation);

function redirectToPage(page) {
    window.location.href = page;
}

function searchVideos() {
    const searchTerm = document.getElementById('searchInput').value;
    // Perform search in database
    console.log('Searching for:', searchTerm);
}
function redirectToHomePage() {
    window.location.href = 'index.html'; 
}

// Dynamically load navbar
window.addEventListener('DOMContentLoaded', function () {
    fetch('nav.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('navbarContainer').innerHTML = data;
        });
});
