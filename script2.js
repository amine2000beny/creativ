// script2.js

document.addEventListener('DOMContentLoaded', () => {
    const aboutUsBtn = document.querySelector('.about-us-btn');
    const aboutUsPopup = document.getElementById('about-us-popup');

    aboutUsBtn.addEventListener('mouseover', () => {
        aboutUsPopup.style.display = 'block';
    });

    aboutUsBtn.addEventListener('mouseout', () => {
        aboutUsPopup.style.display = 'none';
    });
});
