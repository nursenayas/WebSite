// UI variables

const form = document.querySelector("form");
const input = document.querySelector("#txtTaskName");
const btnDeleteAll = document.querySelector("#btnDeleteAll");
const taskList = document.querySelector("#task-list");
let items;

//load items
loadItems();

// call event listeners
eventListener();

function eventListener() {
  //submit event
  form.addEventListener("submit", addNewItem);

  //delete an item
  taskList.addEventListener("click", deleteItem);

  //delete all item
  btnDeleteAll.addEventListener("click", deleteAllItems);
}

//load items
function loadItems() {
  items = getItemsFromLS();

  items.forEach(function (item) {
    createItem(item);
  });
}

//get item from local storage
function getItemsFromLS() {
  if (localStorage.getItem("items") === null) {
    items = [];
  } else {
    items = JSON.parse(localStorage.getItem("items"));
  }
  return items;
}

// set item to local storage
function setItemToLS(text) {
  items = getItemsFromLS();
  items.push(text);
  localStorage.setItem("items", JSON.stringify(items));
}

// delete item from LS
function deleteItemFromLS(text) {
  items = getItemsFromLS();
  items.forEach(function (item, index) {
    if (item === text) {
      items.splice(index, 1);
    }
  });

  localStorage.setItem("items", JSON.stringify(items));
}

function createItem(text) {
  // create li
  const li = document.createElement("li");
  li.className = "list-group-item list-group-item-secondary";
  li.appendChild(document.createTextNode(text));

  // create a
  const a = document.createElement("a");
  a.classList = "delete-item float-right";
  a.setAttribute("href", "#");
  a.innerHTML = '<i class="fas fa-times"><i/>';

  // add a to li
  li.appendChild(a);

  //add li tu ul
  taskList.appendChild(li);
}

//add new item
function addNewItem(e) {
  if (input.value === "") {
    alert("add new item");
  }

  //create item
  createItem(input.value);

  //save to local storage
  setItemToLS(input.value);

  //clear input
  input.value = "";

  e.preventDefault(); // refresh önler
}

// delete an item
function deleteItem(e) {
  if (e.target.className === "fas fa-times") {
    if (confirm("are you sure ?")) {
      e.target.parentElement.parentElement.remove();

      // delete item from LS
      deleteItemFromLS(e.target.parentElement.parentElement.textContent);
    }
  }
  //refresh önler
  e.preventDefault();
}

// delete all item
function deleteAllItems(e) {
  // taskList.innerHTML='';

  if (confirm("are you sure ?")) {
    while (taskList.firstChild) {
      taskList.removeChild(taskList.firstChild);
    }

    localStorage.clear();
  }
  e.preventDefault();
}
