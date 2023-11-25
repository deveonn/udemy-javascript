const addButton = document.querySelector("#add-task");
const todoInput = document.querySelector("#todo");
const todoContainer = document.querySelector("#tasks");
const removeButton = document.querySelector(".remove-task");

if (!localStorage.getItem("arrayDeTask")) {
  localStorage.setItem("arrayDeTask", "[]");
}

showTasks();

document.addEventListener("click", (e) => {
  if (e.target === addButton) {
    addTask(todoInput.value);
    showTasks();
  }
  if (e.target === removeButton) {
    removeTask();
  }
});

document.addEventListener('keypress', (e) => {
  if(e.key === 'Enter') {
    addTask(todoInput.value)
  }
})

function showTasks() {
  const taskInMemory = localStorage.getItem("arrayDeTask");
  const converted = JSON.parse(taskInMemory);

  if (taskInMemory) {
    todoContainer.innerHTML = "";

    for (i = 0; converted.length > i; i++) {
      todoContainer.innerHTML += `
          <li class='taskTodo'>
              <p>${converted[i].task}</p>
              <div>
                  <button 
                    class='remove-task' 
                    id="${converted[i].id}" 
                    onclick="removeTask()"
                  >
                    Apagar
                  </button>
              </div>
          </li>
      `;
    }
  }
}

// TODO da pra melhorar aqui futuramente ...
// ? Usando o método trim() ...

function addTask(task) {
  if (!task) {
    alert("Insira um nome de tarefa válido");
    return;
  }

  const id = Math.random();
  const arrayNaMemoria = localStorage.getItem("arrayDeTask");
  let taskList = JSON.parse(arrayNaMemoria);

  taskList = [...taskList, { id: id, task: task }];
  localStorage.setItem("arrayDeTask", JSON.stringify(taskList));

  todoInput.value = "";
  showTasks();
}

function removeTask() {
  // ? isso pega tributo do elemento que chama o evento ...

  const removeId = Number(event.target.id);
  const localObj = localStorage.getItem("arrayDeTask");
  const converted = JSON.parse(localObj);

  const newArray = converted.filter((removed) => {
    return removed.id !== removeId;
  });

  const toStr = JSON.stringify(newArray);

  localStorage.setItem("arrayDeTask", toStr);

  showTasks();
}
