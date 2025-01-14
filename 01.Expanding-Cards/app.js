// List of the Cards 
const cardList = document.getElementsByClassName("card");
// Default expansion of the first card
cardList[0].classList.add('exp-card');
 // Shows the content of the first card
cardList[0].querySelector('.card-text').style.display = 'block';
// Function to handle card expansion and collapse
function addExpCard(){
    // Removes 'exp-card' class and text  from all other cards 
    for (let card of cardList){
        card.classList.remove('exp-card'); 
        card.querySelector('.card-text').style.display = 'none'
    }
    // Adds 'exp-card' class to the clicked card
    this.classList.add('exp-card');
    // Shows the content of the clicked card
    this.querySelector('.card-text').style.display = 'block';
}
// For Expansion
var index = 0;
for (let card of cardList) {
    card.addEventListener("click",addExpCard);
    card.style.backgroundImage = `url(Images/img0${index+1}.jpg)`;
    index++;
}