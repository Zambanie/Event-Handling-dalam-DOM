const form = document.getElementById('myForm');
const nameField = document.getElementById('nameField');
const errorMessage = document.getElementById('errorMessage');
const addItemButton = document.getElementById('addItemButton');
const itemList = document.getElementById('itemList');

form.addEventListener('submit', function (event) {
    if (nameField.value.trim() === '') {
        errorMessage.textContent = 'Name field cannot be empty!';
        event.preventDefault();
    } else {
        errorMessage.textContent = '';
        alert(`Form submitted with name: ${nameField.value}`);
    }
});

addItemButton.addEventListener('click', function () {
    const newItemText = document.getElementById('itemField').value.trim();
    if (newItemText !== '') {
        const newItem = document.createElement('li');
        newItem.textContent = newItemText;
        itemList.appendChild(newItem);
        document.getElementById('itemField').value = '';
    }
});