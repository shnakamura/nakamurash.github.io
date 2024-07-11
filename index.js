const button = document.getElementById('button-yes');

button.addEventListener('mouseover', () => {
    const bounds = button.getBoundingClientRect();
    
    const screenWidth = window.innerWidth;
    const screenHeight = window.innerHeight;

    const newX = Math.random() * (screenWidth - bounds.width);
    const newY = Math.random() * (screenHeight - bounds.height);

    button.style.position = 'absolute';
    
    button.style.left = `${newX}px`;
    button.style.top = `${newY}px`;
});
