function addTask() {
    var taskInput = document.getElementById("new-task");
    var taskText = taskInput.value.trim();

    if (taskText === "") {
        alert("Please enter a task!");
        return;
    }

    var todoList = document.getElementById("todo-list");

    var taskElement = document.createElement("li");
    taskElement.className = "task";

    var taskTextElement = document.createElement("span");
    taskTextElement.textContent = taskText;

    var deleteButton = document.createElement("button");
    deleteButton.className = "delete-btn";
    deleteButton.textContent = "Delete";
    deleteButton.onclick = function() {
        todoList.removeChild(taskElement);
    };

    taskElement.appendChild(taskTextElement);
    taskElement.appendChild(deleteButton);

    todoList.appendChild(taskElement);

    taskInput.value = "";
}
