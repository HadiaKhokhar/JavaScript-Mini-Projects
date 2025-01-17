async function fetchRandomJoke(paragraph) {
    try {
        const response = await fetch("https://icanhazdadjoke.com/", {
            headers: {
                Accept: "application/json",
            }
        });
        if (!response.ok) throw new Error(`Error: ${response.status}`);
        const jokeObject = await response.json();

        paragraph.textContent = jokeObject.joke;
        
    } catch (error) {
        console.error("Error fetching joke:", error);
        paragraph.textContent = "Failed to fetch joke. Please try again later.";
    }
}

const jokeParagraph = document.getElementById("joke");
const jokeBtn = document.getElementById("jokeBtn");

jokeBtn.addEventListener("click", () => {
    fetchRandomJoke(jokeParagraph);
});
