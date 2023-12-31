function addTask() {
    const taskInput = document.getElementById('taskInput');
    const taskList = document.getElementById('taskList');


    if (taskInput.value.trim() !== '') {
        const newTask = document.createElement('li');
        newTask.innerHTML = `${taskInput.value}   <button onClick = "removeTask(this)">Remove</button>`;

        taskList.appendChild(newTask);

        taskInput.value = '';
    }
}

function removeTask(button) {
    const taskList = document.getElementById('taskList');
    const taskItem = button.parentElement;
    taskList.removeChild(taskItem);
}