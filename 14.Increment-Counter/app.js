const followersCounter = document.getElementById('followersCounter');
const repoCounter = document.getElementById('repoCounter');
const followingCounter = document.getElementById('followingCounter');
const githubUsername = 'hadiakhokhar';
const githubapiEndpoint = `https://api.github.com/users/${githubUsername}`; //For Follwers and Repos 
const animationTimeInSec = 5
const fetchUserData = async () => {
    try {
        let githubResponse = await fetch(githubapiEndpoint);
        if (!githubResponse.ok) {
            throw new Error(`Error: ${response.status} - ${response.statusText}`);
        }
        let githubUserData = await githubResponse.json();
        return githubUserData
    } catch (error) {
        console.error("Failed to fetch GitHub user data:", error.message);
    }
};
const statsCounter = (counterStop, elementOfStats) => {
    let counter = 0
    let timeGapInSec = animationTimeInSec / counterStop * 1000;
    let counterStopTimeInSec = timeGapInSec * counterStop;

    ///name of the counter
    let counterIncrement = setInterval(() => {
        counter++
        elementOfStats.innerText = counter
    }, timeGapInSec);

    setTimeout(() => {
        clearInterval(counterIncrement);
        elementOfStats.classList.add('green-text')
    }
        , counterStopTimeInSec)
}
const updateStats = async () => {
    const githubData = await fetchUserData();
    let repos = githubData.public_repos;
    let followers = githubData.followers;
    let following = githubData.following
    statsCounter(followers, followersCounter);
    statsCounter(repos, repoCounter);
    statsCounter(following, followingCounter);

}

updateStats();