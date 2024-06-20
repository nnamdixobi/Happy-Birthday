document.addEventListener('DOMContentLoaded', () => {
    const gift = document.getElementById('gift');
    const videoContainer = document.getElementById('video-container');

    gift.addEventListener('click', () => {
        videoContainer.style.display = 'block';
        videoContainer.classList.add('fade-in');
    });
});
