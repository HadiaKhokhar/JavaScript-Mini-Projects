const options = document.querySelectorAll('.option');
let selectedCheckBoxArray = [];

options.forEach(option => {
    let checkBox = option.querySelector('.checkbox');
    option.addEventListener('click', () => {
        checkBox.checked = !checkBox.checked;
        if(checkBox.checked) {
            addAndBalanceCheckBox(option);
        }
        else {
            deleteSelectedCheckBox(option);   
        }
});
})




const addAndBalanceCheckBox = (selectedOption) => {
    selectedCheckBoxArray.push(selectedOption)
    let totalChecked = selectedCheckBoxArray.length;
    if (totalChecked == 3) {
        const firstSeclectedCheckBox = selectedCheckBoxArray[0];
        firstSeclectedCheckBox.querySelector('.checkbox').checked = false;
        selectedCheckBoxArray.splice(0, 1);
    } 
}
const deleteSelectedCheckBox = (unselectedOption)=>{
    const indexOfUnSelectedCheckBox = selectedCheckBoxArray.indexOf(unselectedOption)
    selectedCheckBoxArray.splice(indexOfUnSelectedCheckBox, 1);
}

