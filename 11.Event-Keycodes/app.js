document.addEventListener('keydown',(event)=> {
    var key = event.key;
    var keycode = event.keyCode;
    var ascii = event.key.charCodeAt(0);
    if (key === ' ') {
        key = 'Space';
    }
    document.getElementById('key').textContent = key;
    document.getElementById('keycode').textContent = keycode;
    document.getElementById('ascii').textContent = ascii;
});