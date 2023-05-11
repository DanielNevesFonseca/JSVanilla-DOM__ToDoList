const tasks = [
  {
    title: "Comprar comida para o gato",
    type: "Urgente",
  },
  {
    title: "Consertar Computador",
    type: "Prioritário",
  },
  {
    title: "Beber água",
    type: "Normal",
  },
];

function createCard(taskInfo) {
  const item = document.createElement("li");
  const infoContainer = document.createElement("div");
  const taskCategory = document.createElement("span");
  const taskTitle = document.createElement("p");

  taskTitle.innerText = taskInfo.title;
  let titleTask = taskTitle.innerText;

  if (taskInfo.type === "Urgente") {
    taskCategory.className = 'span-urgent';
  } else if (taskInfo.type === "Prioritário") {
    taskCategory.className = 'span-priority';
  } else if (taskInfo.type === "Normal") {
    taskCategory.className = 'span-normal';
  }
  infoContainer.appendChild(taskCategory);
  infoContainer.appendChild(taskTitle);

  const button = document.createElement("button");

  button.innerHTML = '<i class="fa fa-trash" aria-hidden="true"></i>';
  button.addEventListener("click", function () {
    function manualIndexOf(array, element) {
      for (let i = 0; i < array.length; i++) {
        if (array[i].title === element) {
          return i;
        }
      }
      return -1;
    }
    const index = manualIndexOf(tasks, titleTask);
    console.log(index, titleTask)
    tasks.splice(index, 1);
    renderElements(tasks); 
  });
  item.appendChild(infoContainer);
  item.appendChild(button);

  return item;
}

function renderElements(taskList) {
  const htmlList = document.querySelector(".tasks");
  htmlList.innerHTML = "";

  for (let i = 0; i < taskList.length; i++) {
    let card = createCard(taskList[i]);
    htmlList.appendChild(card);
  }
  return htmlList;
}
renderElements(tasks);

function createNewTask(taskList) {
  const taskTitle = document.querySelector('#input_title');
  const taskCategory = document.querySelector('#input_priority');
  const submitBtn = document.querySelector('#btnSubmit');

  submitBtn.addEventListener('click', function (event) {
    // evitar que o efeito bubbling faça sair da página atual
    event.preventDefault();
    const newTaskInfo = {
      title: taskTitle.value,
      type: taskCategory.value
    }
    taskList.push(newTaskInfo);
    renderElements(taskList);
  })
}
createNewTask(tasks);