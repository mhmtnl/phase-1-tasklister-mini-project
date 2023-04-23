document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById('create-task-form');
  const taskList = document.getElementById('tasks');

  form.addEventListener('submit', addTask);
  taskList.addEventListener('click', removeTask);

  function addTask(e) {
    e.preventDefault();
    const newTaskDescription = document.getElementById('new-task-description');
    console.log(newTaskDescription);
    const li = document.createElement('li');
    li.appendChild(document.createTextNode(newTaskDescription.value));
    const deleteBtn = document.createElement('button');
    deleteBtn.appendChild(document.createTextNode('X'));
    li.appendChild(deleteBtn);
    taskList.appendChild(li);
    newTaskDescription.value = ""
  }

  function removeTask(e) {
    if (e.target = "button") {
      if (confirm('Are you sure?')) {
        let liAdded = e.target.parentElement;
        taskList.removeChild(liAdded);
      }
    }

  }
});
