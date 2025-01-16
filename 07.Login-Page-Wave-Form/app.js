let inputs = document.querySelectorAll("input");
let labels = document.querySelectorAll('label');
inputs.forEach((input, index) => {
    let label = labels[index];
    input.addEventListener('focus', () => {
        if (!input.value) {
            label.innerHTML = label.innerText.split('').map((letter, index) => {
                return `<span style= 'animation-delay:${index * 150}ms'>${letter}</span>`
            }).join('')
        }
    }

    )
    input.addEventListener('blur', async () => {
        if (!input.value) {
            const spans = Array.from(label.getElementsByTagName('span'))
            spans.forEach((span) => {
                span.classList.add('move-down')
            });
            const lastSpan = spans[spans.length - 1];
            await new Promise((resolve) => {
                lastSpan.addEventListener('animationend', resolve, { once: true })
            });
            label.innerHTML = input.getAttribute('type').charAt(0).toUpperCase() + input.getAttribute('type').slice(1)
        }
        
    })
})
