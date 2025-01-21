// Variables to keep track of the current progress and total glasses
const totalGlasses = 8;
let filledGlasses = 0;
const glassesList = Array.from(document.querySelectorAll('[data-glass]'));
const resetButton = document.querySelector('.reset-button');
// Function to update the Percentage and glasses count
let updateProgress = () => {
    const progressInPercentage = (filledGlasses / totalGlasses) * 100;
    let progressAlert = document.getElementById('progressAlert');
    document.querySelector('.progress-text').textContent = `${progressInPercentage.toFixed(0)}% Full`;
    document.querySelector('.glasses-count').textContent = `${filledGlasses}/${totalGlasses} Glasses`;
    // Check if the progress is 80% or more
    if (progressInPercentage == 100) {
        progressAlert.style.display = 'block';
        progressAlert.innerText = 'Congratulations! You have done it'
    }
    else if (progressInPercentage >= 80) {
        progressAlert.style.display = 'block';
        progressAlert.innerText = 'Congratulations! You are Almost there'
    }
    else if (progressInPercentage === 50) {
        progressAlert.style.display = 'block';
        progressAlert.innerText = 'Congratulations! You have reached 50% hydration. Don\'t forget to drink more water!'
    }
    else {
        progressAlert.style.display = 'none';
    }
    setTimeout(() => {
        progressAlert.style.display = 'none';
    }, 3000);
}

glassesList.forEach((glass) => {
    // Add event listener to each glass for click event
    glass.addEventListener('click', () => {
        const isGlassFilled = glass.classList.contains('filled');
        filledGlasses = glass.getAttribute('data-glass');
        // IF THE GLASS IS NOT FILLED , then UPDATED THE FILLED CLASS IT THE GLASS ITEM THAT IS CLICKED
        if (!isGlassFilled) {
            glassesList.slice(0, filledGlasses).forEach((glass) => {
                glass.classList.add('filled');
            })
            updateProgress();
        }
        // ELSE, IF THE GLASS IS FILLED, THEN REMOVE THE FILLED CLASS FROM ALL THE GLASSES BEFORE THE CLICKED GLASS
        else {
            filledGlasses--;
            glassesList.slice(filledGlasses).forEach((glass) => {
                glass.classList.remove('filled');
            })
            // Decrease the filled glasses count by 1 when a glass is clicked again.
            updateProgress();
        }
    });
});

// // Reset button functionality
resetButton.addEventListener('click', () => {
    filledGlasses = 0;
    glassesList.forEach((glass) => {
        glass.classList.remove('filled');
    });
    updateProgress();
});