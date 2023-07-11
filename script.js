document.addEventListener("DOMContentLoaded", function() {
    const todoInput = document.getElementById("todo-input");
    const addButton = document.getElementById("add-button");
    const todoList = document.getElementById("todo-list");
  
    addButton.addEventListener("click", function() {
      const todoText = todoInput.value;
      if (todoText !== "") {
        const todoItem = document.createElement("li");
        todoItem.className = "todo-item";
  
        const todoTextSpan = document.createElement("span");
        todoTextSpan.textContent = todoText;
  
        const deleteButton = document.createElement("button");
        deleteButton.textContent = "Delete";
        deleteButton.addEventListener("click", function() {
          todoList.removeChild(todoItem);
        });
  
        todoItem.appendChild(todoTextSpan);
        todoItem.appendChild(deleteButton);
        todoList.appendChild(todoItem);
  
        todoInput.value = "";
      }
    });
  });
  