var enterButton = document.getElementById("enter");
var input = document.getElementById("userInput");
var ul = document.querySelector("ul");
var item = document.getElementsByTagName("li");

function inputLength() {
  return input.value.length;
}

function listLength() {
  return item.length;
}

function createListElement() {
  var li = document.createElement("li");
  li.appendChild(document.createTextNode(input.value));
  ul.appendChild(li);
  input.value = "";

  function completeItem() {
    li.classList.toggle("done");
  }

  li.addEventListener("click", completeItem);

  var delBtn = document.createElement("button");
  delBtn.appendChild(document.createTextNode("X"));
  li.appendChild(delBtn);
  delBtn.addEventListener("click", deleteListItem);

  function deleteListItem() {
    li.classList.add("delete");
  }
}

function addListAfterClick() {
  if (inputLength() > 0) {
    createListElement();
  }
}

function addListAfterKeypress(event) {
  if (inputLength() > 0 && event.which == 13) {
    createListElement();
  }
}

enterButton.addEventListener("click", addListAfterClick);
input.addEventListener("keypress",addListAfterKeypress);

