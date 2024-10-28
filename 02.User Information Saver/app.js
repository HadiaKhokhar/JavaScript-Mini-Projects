const form = document.getElementById("form");
const formBtn = document.getElementsByClassName("formBtn")[0];
const cancelformBtn = document.getElementsByClassName("cancelformBtn")[0];
var submitformBtn = document.getElementById('submit');
const resetformBtn = document.getElementById("reset");
const cardBox = document.getElementById('cardsBox');
var formValidator = document.getElementById("formValidationpara");
var firstName;
var lastName;
var userEmail;
var gender;
var saveChangeBtn;
var editTarget;



// ALl the functions
function openForm() {
    form.style.display = "flex";
    formBtn.classList.add('cancelformBtn');
    formBtn.textContent = "Cancel";
}
function closeForm() {
    form.style.display = "none";
    formBtn.classList.remove('cancelformBtn');
    formBtn.textContent = "Save Your Info";
    if(saveChangeBtn){
        saveChangeBtn.id = 'submit';
        saveChangeBtn.textContent = "Save Your Info"
        resetForm()
    }
}
function newFormValues() {
    firstName = document.getElementById("firstname").value;
    lastName = document.getElementById("lastname").value;
    userEmail = document.getElementById("email").value;
    gender = document.querySelector('input[name="gender"]:checked');
    return [firstName, lastName, userEmail, gender ? gender.value : null]
}
function updateFormAndCard(target,purpose,userValues) {
    var targetParent = target.parentElement.parentElement
    var userValuesBox = targetParent.getElementsByClassName('info')[0].children
    userKeyArray = ["firstname","lastname","email"]
    var userValuesArray = [];
    var img = targetParent.getElementsByClassName('icon')[0].children[0]
    if(purpose === "updateform"){
        // COLLECTING ALL THE VALUES IN USER VALUES ARRAY
        for(var i=0; i < userValuesBox.length;i++ ){
            userValuesArray.push(userValuesBox[i].children[1].textContent)
        }
            // Gender Value
        userValuesArray.push(img.alt);
        // SET THE VALUES IN THE FORM
        for(var i=0 ; i < userValuesArray.length-1;i++){
            document.getElementById(userKeyArray[i]).value = userValuesArray[i];
        }
        document.querySelector(`input[value=${userValuesArray[userValuesArray.length - 1]}]`).checked = true
        
    }
    else{
        userValuesArray  = userValues
        for(var i = 0; i < userKeyArray.length;i++){
            userValuesBox[i].children[1].textContent = userValuesArray[i] ;
        };
        img.src = `Icons/${userValuesArray[userValuesArray.length-1]}.png`;
        img.alt = userValuesArray[userValuesArray.length-1]
    };
    }
    
function isAllFieldFilled() {
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (firstName === "" || lastName === "" || userEmail === "" || gender === null) {
        formValidator.textContent = "Please fill all fields to save your Info"
        return false;
    }
    if (!emailRegex.test(userEmail)) {
        formValidator.textContent = "Please enter a valid email address"
        return false;
    }
    formValidator.textContent = ""
    return true;
}
function resetForm() {
    document.getElementById("firstname").value = "";
    document.getElementById("lastname").value = "";
    document.getElementById("email").value = "";
    document.querySelector('input[name="gender"]:checked') != null ? document.querySelector('input[name="gender"]:checked').checked = false : null
}
function cardGenerator(firstName, lastName, email, gender) {

    // Get the card container

    // Create the card div
    const userCard = document.createElement('div');
    userCard.classList.add('user-card');

    // Create the icon div and add the appropriate image
    const iconDiv = document.createElement('div');
    iconDiv.classList.add('icon');
    const iconImg = document.createElement('img');
    iconImg.src = gender === 'male' ? 'Icons/male.png' : 'Icons/female.png';
    iconImg.alt = gender;
    iconDiv.appendChild(iconImg);

    // Create the info div
    const infoDiv = document.createElement('div');
    infoDiv.classList.add('info');

    // Create the name and email fields dynamically
    const firstNameDiv = document.createElement('div');
    firstNameDiv.innerHTML = `<h2>First Name: </h2><p>${firstName}</p>`;

    const lastNameDiv = document.createElement('div');
    lastNameDiv.innerHTML = `<h2>Last Name: </h2><p>${lastName}</p>`;

    const emailDiv = document.createElement('div');
    emailDiv.innerHTML = `<h2>Email: </h2><p>${email}</p>`;

    // Append all info divs to the info container
    infoDiv.appendChild(firstNameDiv);
    infoDiv.appendChild(lastNameDiv);
    infoDiv.appendChild(emailDiv);

    // Create the  div for edit and delete button
    const buttonDiv = document.createElement('div')
    const editBtn = document.createElement('button');
    const deleteBtn = document.createElement('button');
    editBtn.classList.add('editBtn');
    deleteBtn.classList.add('deleteBtn')
    editBtn.textContent = "Edit";
    deleteBtn.textContent = "Delete";
    buttonDiv.appendChild(editBtn);
    buttonDiv.appendChild(deleteBtn);


    // Append icon and info to the user card
    userCard.appendChild(iconDiv);
    userCard.appendChild(infoDiv);
    userCard.appendChild(buttonDiv);

    // Append the user card to the cardBox
    cardBox.appendChild(userCard);
}
function deleteCard(target) {
    var card = target.parentNode.parentNode;
    card.classList.add('fade-out')
    setTimeout(() => {
        cardBox.removeChild(card);
    }, 300);

}

function editCard(target){
    openForm();
    submitformBtn.id = 'saveChangeBtn';
    saveChangeBtn = document.getElementById('saveChangeBtn');
    saveChangeBtn.textContent = 'Save Change';
    updateFormAndCard(target,"updateform");
    editTarget = target;
}

// All the Event Listener:
formBtn.addEventListener("click", function () {
    if (formBtn.classList.contains('cancelformBtn')) {
        closeForm()
    } else {
        openForm() // Show the form
    }
})

submitformBtn.addEventListener('click', function () {
    var formValues = newFormValues();
    if (isAllFieldFilled() && document.getElementById('submit') != null) {
        closeForm()
        cardGenerator(formValues[0], formValues[1], formValues[2], formValues[3])
        resetForm()
    }
})

resetformBtn.addEventListener('click', function () {
    formValidator.textContent = ""
    resetForm()
})

cardBox.addEventListener('click', function (e) {
    var target = e.target
    isButton = target.matches("button")
    if (isButton) {
        isDeleteBtn = target.classList.contains('deleteBtn') ? deleteCard(target) : editCard(target)
    }

})

document.addEventListener('click', function(event) {
    if (event.target && event.target.id === 'saveChangeBtn') {
        if (isAllFieldFilled()) {
            var formValues = newFormValues();
            updateFormAndCard(editTarget, "updatecard", formValues);
            closeForm();
        }
    }
});
