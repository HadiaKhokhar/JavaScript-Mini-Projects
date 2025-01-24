const text = {
    line1: 'Programming is like writing a book',
    line2: 'but your editor is a compiler',
};
const lines = Object.values(text);
const textElement = document.getElementById('text');
const cursorElement = document.querySelector('.cursor');
const restartBtn = document.getElementById('restart-btn');
const speedBtn = document.getElementById('speed-btn');
let lineNum = 0;
let charIndex = 0;
let typingSpeed = 400;
const updateSpeedButtonText = () => {
    let speedText;
    switch (typingSpeed) {
        case 400:
            speedText = 'Slow';
            break;
        case 300:
            speedText = 'Normal';
            break;
        case 200:
            speedText = 'Fast';
            break;
        case 100:
            speedText = 'Faster';
            break;
    }
    speedBtn.textContent = `Speed: ${speedText}`
}
const typeText = () => {
    if (lineNum < lines.length) {
        const line = lines[lineNum];
        textElement.textContent += line[charIndex++] || (lineNum++, charIndex = 0, '');
        if (lineNum < lines.length && charIndex === 0) textElement.textContent = '';
    }
    else {
        clearInterval(typingInterval);
    }
}
const startTyping = () => {
    textElement.textContent = '';
    typingInterval = setInterval(typeText, typingSpeed)
};
document.addEventListener('DOMContentLoaded', startTyping);
restartBtn.addEventListener('click', () => {
    charIndex = 0
    lineNum = 0;
    clearInterval(typingInterval);
    startTyping();
});
speedBtn.addEventListener('click', () => {
    if (typingSpeed > 100) {
        typingSpeed = typingSpeed - 100;
    }
    else typingSpeed = 400;
    clearInterval(typingInterval);
    typingInterval = setInterval(typeText, typingSpeed)
    updateSpeedButtonText()
});
updateSpeedButtonText()