function addTask() {
    var taskInput = document.getElementById("taskInput");
    var taskList = document.getElementById("taskList");

    if (taskInput.value === "") {
        alert("Please enter a task!");
        return;
    }

    var li = document.createElement("li");
    li.textContent = taskInput.value;
    taskList.appendChild(li);

    taskInput.value = "";

    li.addEventListener("click", function () {
        li.classList.toggle("completed");
    });

    li.addEventListener("contextmenu", function (e) {
        e.preventDefault();
        li.remove();
    });
}
