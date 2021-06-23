// Vamos simular um Banco de dados.
let banco = [
    {"tarefa": "Estudar JS", "status": ""},
    {"tarefa": "Estudar FX", "status": "checked"}
];



// Criar a tarefa
const criarItem = (tarefa, status) => {

    const item = document.createElement("label");
    item.classList.add("todo__item");
    item.innerHTML = `<input type="checkbox" ${status}> <div>${tarefa}</div> <input type="button" value="X">`;

    document.getElementById("todoList").appendChild(item);
};

// Limpar as tarefas antes de atualizar a tela. Vai evitar que as tarefas seja duplicadas, ao executar o atulizar tela 2x.
const limpartarefas = () => {

    const todo_list = document.getElementById("todoList");
    while(todoList.firstChild){
        todoList.removeChild(todoList.lastChild);
    }

}

// Vamos crar uma função para ler nosso "Banco de dados", e criar um item para cada objeto dentro do ARRAY
// Toda hora que mudarmos algo no "Banco de dados", essa função vai mandar atualizar a tela do navegador.
const rendertela = ()=>{
    limpartarefas();
    banco.forEach(item => criarItem(item.tarefa, item.status));

}

rendertela();

// Quando a pessoa apertar ENTER na caixinha, ele criar mais um objeto no banco e atualiza a tela.

