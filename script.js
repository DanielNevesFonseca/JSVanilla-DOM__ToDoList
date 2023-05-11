const tasks = [
  {
    titulo: "Comprar comida para o gato",
    tipo: "Urgente",
  },
  {
    titulo: "Consertar Computador",
    tipo: "Prioritário",
  },
  {
    titulo: "Beber água",
    tipo: "Normal",
  },
];

function createCard(taskInfo) {
  // Criando elementos necessários
  const li = document.createElement("li");
  const div = document.createElement("div");
  const span = document.createElement("span");
  const p = document.createElement("p");

  // Adicionando o titulo da tarefa como texto do paragrafo
  p.innerText = taskInfo.titulo;

  if (taskInfo.tipo === "Urgente") {
    span.className = 'span-urgent';
  } else if (taskInfo.tipo === "Prioritário") {
    span.className = 'span-priority';
  } else if (taskInfo.tipo === "Normal") {
    span.className = 'span-normal';
  }

  // Adicionando span e paragrafo a div
  div.appendChild(span);
  div.appendChild(p);

  // Criando botão para deletar tarefa
  const button = document.createElement("button");

  // Adicionando icone ao botão
  button.innerHTML = '<i class="fa fa-trash" aria-hidden="true"></i>';
  button.addEventListener("click", function () {
    // Encontrando o índice da tarefa no array tasks por meio de uma callback
    const index = tasks.findIndex(task => task.titulo === taskInfo.titulo
      && task.tipo === taskInfo.tipo);
    console.log(index)
    tasks.splice(index, 1);
    renderElements(tasks);

  })


  /// Adicionando a div e o botão de deletar ao list item
  li.appendChild(div);
  li.appendChild(button);

  return li;
}

function renderElements(taskList) {
  const htmlList = document.querySelector(".tasks");
  htmlList.innerHTML = "";

  // Ajustar a lógica
  for (let i = 0; i < taskList.length; i++) {
    let card = createCard(taskList[i]);
    htmlList.appendChild(card);
  }

  return htmlList;

}
renderElements(tasks);

function createNewTask(taskList) {
  const taskTitle = document.querySelector('#input_title');
  const taskType = document.querySelector('#input_priority');
  const submitBtn = document.querySelector('#btnSubmit');

  submitBtn.addEventListener('click', function (event) {
    // evitar que o efeito bubbling faça sair da página atual
    event.preventDefault();
    const newTaskInfo = {
      titulo: taskTitle.value,
      tipo: taskType.value
    }
    taskList.push(newTaskInfo);
    renderElements(taskList);
  })
}
createNewTask(tasks);


