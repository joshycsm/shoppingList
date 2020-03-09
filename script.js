var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
var listItem = document.querySelectorAll("li");
console.log(listItem);
// var singleListItem = document.querySelector("li");
// console.log(singleListItem, "single");

// singleListItem.addEventListener("click", () => {
//   singleListItem.classList.toggle("done");
// });

listItem.forEach(item => {
  console.log(item);
  item.addEventListener("click", toggleDoneClass);
});

function toggleDoneClass(event) {
  console.log("item", event);
  event.target.classList.toggle("done");
}

function inputLength() {
  return input.value.length;
}

function createListElement() {
  var li = document.createElement("li");
  li.appendChild(document.createTextNode(input.value));
  ul.appendChild(li);
  input.value = "";
}

function addListAfterClick() {
  if (inputLength() > 0) {
    createListElement();
  }
}

function addListAfterKeypress(event) {
  if (inputLength() > 0 && event.keyCode === 13) {
    createListElement();
  }
}

button.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);
