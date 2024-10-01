var popupovearlay = document.querySelector(".popup-overlaye");
var popbox = document.querySelector(".pop-box");
var btn = document.getElementById("add-pop");

btn.addEventListener("click", function () {
    popupovearlay.style.display = "block";
    popbox.style.display = "block";
});

var cancelpopup = document.getElementById("cancel-popup");
cancelpopup.addEventListener("click", function (event) {
    event.preventDefault();
    popupovearlay.style.display = "none";
    popbox.style.display = "none";
});

var container = document.querySelector(".container");
var addbook = document.getElementById("add-book");
var booktitleinput = document.getElementById("Book");
var bookauthorinput = document.getElementById("bookauthor-input");
var bookdescriptioninput = document.getElementById("Book-description");

addbook.addEventListener("click", function (event) {
    event.preventDefault();
    var div = document.createElement("div");
    div.setAttribute("class", "book-container");
    div.innerHTML = `<h2>${booktitleinput.value}</h2>
            <h5>${bookauthorinput.value}</h5>
            <p>${bookdescriptioninput.value}</p>
     <button onclick="deletebook(event)">Delete</button>`;
    container.append(div);
    popupovearlay.style.display = "none";
    popbox.style.display = "none";
});

function deletebook(event) {
    event.target.parentElement.remove();

    const fruit = true;
    if (fruit === true) {
        console.log("Book deleted successfully!");
    }
}
