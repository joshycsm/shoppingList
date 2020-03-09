// Needs Debugging
// var button = document.getElementById("enter");
// var input = document.getElementById("userinput");
// var ul = document.querySelector("ul");
// var listItem = document.querySelectorAll("li");
// console.log(listItem);
// // var singleListItem = document.querySelector("li");
// // console.log(singleListItem, "single");

// // singleListItem.addEventListener("click", () => {
// //   singleListItem.classList.toggle("done");
// // });

// listItem.forEach(item => {
//   console.log(item);
//   item.addEventListener("click", toggleDoneClass);
// });

// function toggleDoneClass(event) {
//   console.log("item", event);
//   event.target.classList.toggle("done");
//   var deleteButton = document.createElement("button");
//   deleteButton.textContent = "Delete Item";
//   event.target.append(deleteButton);
// }

// function inputLength() {
//   return input.value.length;
// }

// function createListElement() {
//   var li = document.createElement("li");
//   var deleteButton = document.createElement("button");
//   deleteButton.textContent = "Delete Item";
//   li.appendChild(document.createTextNode(input.value));
//   //   li.classList = "done";
//   li.append(deleteButton);
//   ul.appendChild(li);
//   input.value = "";
// }

// function addListAfterClick() {
//   if (inputLength() > 0) {
//     createListElement();
//   }
// }

// function addListAfterKeypress(event) {
//   if (inputLength() > 0 && event.keyCode === 13) {
//     createListElement();
//   }
// }

// button.addEventListener("click", addListAfterClick);

// input.addEventListener("keypress", addListAfterKeypress);

// // Correct Code Below
// var button = document.getElementById("enter");
// var input = document.getElementById("userinput");
// var ul = document.querySelector("ul");
// var li = document.getElementsByTagName("li");

// function inputLength() {
//   return input.value.length;
// }

// function createListElement() {
//   var li = document.createElement("li");
//   li.appendChild(document.createTextNode(input.value));
//   ul.appendChild(li);
//   input.value = "";

//   var button = document.createElement("button");
//   button.appendChild(document.createTextNode("Done!"));
//   li.appendChild(button);
//   button.onclick = underlineParent;
//   // CREATE AN ELEMENT
//   var button = document.createElement("button");
//   // APPEND TEXT TO BUTTON
//   button.appendChild(document.createTextNode("Delete!"));
//   // APPEND BUTTON TO LIST
//   li.appendChild(button);

//   button.onclick = removeParent;
//   //THIS FUNCTION WILL DO THIS FOR EVERY BUTTON CREATED.
// }

// // ul.onclick = function(event){
// // 	var target = event.target;
// // 	target.classList.toggle("done");
// // }

// function underlineParent(event) {
//   event.target.parentNode.classList.toggle("done");
// }

// function removeParent(evt) {
//   evt.target.parentNode.remove();
// }

// function addListAfterClick() {
//   if (inputLength() > 0) {
//     createListElement();
//   }
// }

// function addListAfterKeypress(event) {
//   if (inputLength() > 0 && event.keyCode === 13) {
//     createListElement();
//   }
// }

// button.addEventListener("click", addListAfterClick);

// input.addEventListener("keypress", addListAfterKeypress);

// Even Better Code, Best Code?

var button = document.getElementById("enter");
var input = document.getElementById("userInput");
var ul = document.querySelector("ul");
var deleteBtns = document.getElementsByClassName("delete");
var items = ul.getElementsByTagName("li");

//add event listener to first 6 btns in HTML file
for (var i = 0; i < deleteBtns.length; i++) {
  deleteBtns[i].addEventListener("click", removeParent, false);
}

//from StackOverflow:
function removeParent(evt) {
  evt.target.removeEventListener("click", removeParent, false);
  evt.target.parentNode.remove();
}

//click on a list item and it strikethroughs the text
function getEventTarget(e) {
  console.log("hmm", e);
  e = e || window.event;
  return e.target || e.srcElement;
}

ul.onclick = function(event) {
  var target = getEventTarget(event);
  target.classList.toggle("done");
};

//adding new items:

function inputLength() {
  return input.value.length;
}

function createListElement() {
  var btn = document.createElement("button");
  btn.innerHTML = "Delete";
  btn.onclick = removeParent;

  var li = document.createElement("li");
  li.appendChild(document.createTextNode(input.value));
  li.innerHTML = li.innerHTML + " ";
  li.appendChild(btn);

  ul.appendChild(li);
  input.value = "";
}

function addToListAfterClick() {
  if (inputLength() > 0) {
    createListElement();
  }
}

function addToListAfterKeypress(event) {
  if (inputLength() > 0 && event.keyCode === 13) {
    createListElement();
  }
}

button.addEventListener("click", addToListAfterClick);

input.addEventListener("keypress", addToListAfterKeypress);
