const imageContainer = document.querySelector(".image-container");
const image = document.querySelector(".main-image");
const heart = document.querySelector(".heart");
let numOfClicks = 0 
imageContainer.addEventListener("dblclick", () => {
    heart.classList.add('active');
    image.classList.add('highlight');
    numOfClicks++;
    document.querySelector('.instructions').innerHTML = `You've shown your love ${numOfClicks} times!`;
    setTimeout(() =>{
        image.classList.remove('highlight');
        heart.classList.remove('active')},

     1500); // Remove the 'active' class after 1 second
});
