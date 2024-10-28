// Fetch projects data from JSON file
async function loadProjects() {
    try {
        const response = await fetch('projects.json');
        const projectsData = await response.json();
        renderProjects(projectsData); // Call renderProjects with the JSON data
    } catch (error) {
        console.error('Error loading projects:', error);
    }
}

// Function to render projects
function renderProjects(projects) {
    projects.forEach(project => {createCard(project.name,project.description,project.image,project.liveLink,project.codeLink)});
}
// Function to create a card
function createCard(name, description,imgSrc,liveLink,codeLink) {
    // Select the container where cards will be added
    const container = document.getElementById("card-Container");
    // Create the main card div and add class
    const card = document.createElement("div");
    card.classList.add("card");
    // Add inner HTML for the card structure
    card.innerHTML = `
      <div class="card-img">
        <img src="Assests/images/${imgSrc}.png" alt="${name}">
      </div>
      <div class="card-info">
        <p class="text-title">${name}</p>
        <p class="text-body">${description}</p>
      </div>
      <div class="card-footer">
        <a class="btn" href="https://github.com/HadiaKhokhar/JavaScript-Mini-Projects/tree/main/${codeLink}" target="_blank">Code</a>
        <a class="btn" href="${liveLink}" target="_blank">Live Demo</a>
      </div>
    `;
    // Append the card to the container
    container.appendChild(card);
}
// Load projects on page load
loadProjects();
