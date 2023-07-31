let todos = [];

function addTodo() {
    const newTodoText = document.getElementById("newTodo").value.trim();
    if (newTodoText === "") {
      alert("Enter a Todo first!");
      return;
    }
  
    todos.push({
      text: newTodoText,
      completed: false,
    });
    document.getElementById("newTodo").value = "";
    renderTodoList();
  }
  

function editTodo(index) {
  const editedTodoText = prompt("Edit the todo:", todos[index].text);
  if (editedTodoText !== null) {
    todos[index].text = editedTodoText;
    renderTodoList();
  }
}

function toggleCompleted(index) {
  todos[index].completed = !todos[index].completed;
  renderTodoList();
}

function deleteTodo(index) {
  todos.splice(index, 1);
  renderTodoList();
}


function toggleCompleted(index) {
    todos[index].completed = !todos[index].completed;
    renderTodoList();
  }
  

  

function renderTodoList() {
  const todoList = document.getElementById("todoList");
  todoList.innerHTML = "";

  todos.forEach((todo, index) => {
    const todoContainer = document.createElement("div");
    todoContainer.classList.add("todo-container");

    if (todo.completed) {
      todoContainer.classList.add("completed");
    }

    const todoText = document.createElement("span");
    todoText.classList.add("todo-text");
    todoText.textContent = todo.text;

    const todoButtons = document.createElement("div");
    todoButtons.classList.add("todo-buttons");

    const completeButton = document.createElement("button");
    completeButton.textContent = "Complete";
    completeButton.classList.add("complete-button");
    completeButton.onclick = () => toggleCompleted(index);

    const editButton = document.createElement("button");
    editButton.textContent = "Edit";
    editButton.onclick = () => editTodo(index);

    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.onclick = () => deleteTodo(index);

    todoButtons.appendChild(completeButton);
    todoButtons.appendChild(editButton);
    todoButtons.appendChild(deleteButton);

    todoContainer.appendChild(todoText);
    todoContainer.appendChild(todoButtons);

    todoList.appendChild(todoContainer);
  });
}

// Render initial Todo list
renderTodoList();
