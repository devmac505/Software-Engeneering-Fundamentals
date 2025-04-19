const todoList = document.getElementById("todo-list");
const todoInput = document.getElementById("todo-input")
console.log("todoList", todoList);
function addTodo() {
    console.log("Add todo...");
    if (todoInput.value == "") {
        console.log("Fill the todo");
        alert("Fill the todo");
        return;
    }
const todoItem = document.createElement("li");
const todoText = document.createElement("span");
todoText.textContent = todoInput.value;


//CREATE A DONE BUTTON
const doneBtn = document.createElement("Button");
doneBtn.textContent = ("✓")
doneBtn.className = "doneBtn";
doneBtn.onclick = function() {
    todoText.style.textDecoration = todoText.style.textDecoration === "line-through" ? "none" : "line-through";
};

  // Create Remove button
  const removeBtn = document.createElement("button");
  removeBtn.textContent = "×";
  removeBtn.className = "remove-btn";
  removeBtn.onclick = function() {
      todoList.removeChild(todoItem);
  };

// Append all elements
todoItem.appendChild(todoText);
todoItem.appendChild(doneBtn);
todoItem.appendChild(removeBtn);
todoList.appendChild(todoItem);

localStorage.setItem("todo", todoInput.value);
todoInput.value = "";

}


