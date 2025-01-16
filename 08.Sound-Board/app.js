const buttons = document.querySelectorAll('.sound-button');
let isPlaying = false;
buttons.forEach(button => {
    button.addEventListener('click', () => {
        const sound = new Audio(`sounds/${button.dataset.sound}`);
        buttons.forEach(btn => btn.classList.remove('playing'));
        button.classList.add('playing');
        if (isPlaying) {
            isPlaying.pause();
            sound.currentTime = 0;
        }
        sound.play();
        isPlaying = sound;
        sound.addEventListener('ended', () => {
            button.classList.remove('playing');
            isPlaying = false;
        });
    });
});