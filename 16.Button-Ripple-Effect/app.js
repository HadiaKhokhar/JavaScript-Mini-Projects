const button = document.querySelector('.ripple-button');
const ripple = document.querySelector('.ripple');

button.addEventListener('click', (e) => {
    // to get the size and position of an element relative to the viewport (the visible area of the browser).
    const buttonRect = button.getBoundingClientRect();
    const x = e.clientX - buttonRect.left;  // X relative to button
    const y = e.clientY - buttonRect.top; // X relative to button;
    const dimensionOfRipple = Math.max(buttonRect.width, buttonRect.height)
    const ripple = document.createElement("span");
    ripple.classList.add('ripple', 'active');
    ripple.style.width = ripple.style.height = `${dimensionOfRipple * 2}px`
    ripple.style.left = `${x - dimensionOfRipple}px`;
    ripple.style.top = `${y - dimensionOfRipple}px`;

    ripple.innerHTML = 'ddd'
    button.appendChild(ripple);
    setTimeout(() => {
        ripple.remove();
    }, 2500);


})