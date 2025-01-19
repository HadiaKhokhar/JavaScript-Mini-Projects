const choicesInput = document.getElementById('choices-input');
const choicesContainer = document.getElementById('choices-container');
const pickButton = document.getElementById('pick-button');

choicesInput.addEventListener('keyup', () => {
    const choices = choicesInput.value.split(',').map(choice => choice.trim());
    choicesContainer.innerHTML = '';
    choices.forEach(choice => {
        if (choice === '') return; // Ignore empty choices
        choicesContainer.insertAdjacentHTML('beforeend', `<p class="choice-tag">${choice}</p>`);
    });
})

pickButton.addEventListener('click', () => {
    const choices = Array.from(choicesContainer.getElementsByTagName('p'));
    let isChoiceHighlighted = choices.some(choice => choice.classList.contains('highlight') === true)
    if (isChoiceHighlighted) return
    choicesInput.value = ""
    const randomIndex = Math.floor(Math.random() * choices.length);
    const pickedChoice = choices[randomIndex];
    pickedChoice.classList.add('highlight');
})
