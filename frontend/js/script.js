const tbody = document.querySelector("tbody");
const addForm = document.querySelector(".add-form");
const inputTask = document.querySelector('.input-task')

const fetchTasks = async () => {
  const response = await fetch("http://localhost:3306/tasks");
  const tasks = await response.json();
  return tasks;
};

const addTask = async (event) => {
  event.preventDefault();

const task = { title: inputTask.value };


  await fetch("http://localhost:3306/tasks", {
    method: "post",
    headers: { "Content-Type": "aplication/json" },
    body: JSON.stringify(task),
  });
};

const createElement = (tag, innerText = "", innerHTML = "") => {
  const element = document.createElement(tag);

  if (innerText) {
    element.innerText = innerText;
  }

  if (innerHTML) {
    element.innerHTML = innerHTML;
  }

  return element;
};

const createSelect = (value) => {
  const options = `
  <option value="pendente">pendente</option>
  <option value="em andamento">em andamento</option>
  <option value="concluído">concluída</option>
  `;

  const select = createElement("select", "", options);

  select.value = value;

  return select;
};

const createRow = (task) => {
  const { id, nome_do_filme, descricao, duracao, classificacao, status } = task;

  const tr = createElement("tr");
  const tdNome_do_filme = createElement("td", nome_do_filme);
  const tdDescricao = createElement("td", descricao);
  const tdDuracao = createElement("td", duracao);
  const tdClassificacao = createElement("td", classificacao);
  const tdSatus = createElement("td");
  const tdActions = createElement("td");

  const select = createSelect(status);

  const editButton = createElement(
    "button",
    "",
    '<span class="material-symbols-outlined">edit</span>'
  );
  const deleteButton = createElement(
    "button",
    "",
    '<span class="material-symbols-outlined">delete</span>'
  );

  editButton.classList.add("btn-action");
  deleteButton.classList.add("btn-action");

  tdSatus.appendChild(select);

  tdActions.appendChild(editButton);
  tdActions.appendChild(deleteButton);

  tr.appendChild(tdNome_do_filme);
  tr.appendChild(tdDescricao);
  tr.appendChild(tdDuracao);
  tr.appendChild(tdClassificacao);
  tr.appendChild(tdSatus);
  tr.appendChild(tdActions);

  return tr;
};

const loadTasks = async () => {
  const tasks = await fetchTasks();

  tasks.forEach((task) => {
    const tr = createRow(task);
    tbody.appendChild(tr);
  });
};

addForm.addEventListener("submit", addTask);

loadTasks();
