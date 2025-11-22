const lantern = document.getElementById('lantern');

lantern.addEventListener('mouseover', () => {
    lantern.classList.add('paused');
    lantern.classList.remove('running');
});

lantern.addEventListener('mouseout', () => {
    lantern.classList.remove('paused');
    lantern.classList.add('running');
});

window.onload = () => {
    lantern.classList.add('running');
};
