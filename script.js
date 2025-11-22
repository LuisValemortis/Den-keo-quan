const cube = document.getElementById('cube');

document.querySelectorAll('.face').forEach(face => {
    face.addEventListener('mouseenter', () => {
        cube.style.animationPlayState = 'paused';
    });

    face.addEventListener('mouseleave', () => {
        cube.style.animationPlayState = 'running';
    });
});
