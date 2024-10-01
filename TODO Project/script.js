var ul = document.getElementById("list-container");
var input = document.getElementById("input");

function add() {
    if (input.value.trim() !== "") {
        var listItem = document.createElement('li');
        listItem.innerHTML = input.value + " <button class='delete' onclick='deleteItem(event)'>Delete</button> <button class='edit' onclick='editItem(event)'>Edit</button>";
        ul.append(listItem);
        input.value = '';
    } else {
        alert("Please enter a task.......");
    }
}



function deleteItem(event ){
    event.target.parentElement.remove();

}
function editItem(event) {
    var listItem = event.target.parentElement;
    var button = event.target;

    if (button.textContent === "Edit") {
        var currentText = listItem.childNodes[0].textContent.trim();
        listItem.innerHTML = "<input type='text' value='" + currentText + "'> <button class='delete' onclick='deleteItem(event)'>Delete</button> <button class='edit' onclick='editItem(event)'>Save</button>";
    } else {
        var inputField = listItem.querySelector('input');
        var newText = inputField.value.trim();
        if (newText !== "") {
            listItem.innerHTML = newText + " <button class='delete' onclick='deleteItem(event)'>Delete</button> <button class='edit' onclick='editItem(event)'>Edit</button>";
        } else {
            alert("Task cannot be empty.");
        }
    }
}
