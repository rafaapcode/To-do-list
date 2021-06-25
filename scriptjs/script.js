// Vamos simular um Banco de dados.
let banco = [
    { "tarefa": "Estudar JS", "status": "" },
    { "tarefa": "Estudar FX", "status": "" }
];



// Criar a tarefa
const criarItem = (tarefa, status, indice) => {

    const item = document.createElement("label");
    item.classList.add("todo__item");
    item.innerHTML = `<input type="checkbox" ${status} data-indice=${indice}> <div>${tarefa}</div> <input type="button" value="X" data-indice=${indice}>`;

    document.getElementById("todoList").appendChild(item);
};

// Limpar as tarefas antes de atualizar a tela. Vai evitar que as tarefas seja duplicadas, ao executar o atulizar tela 2x.
const limpartarefas = () => {

    const todo_list = document.getElementById("todoList");
    while (todoList.firstChild) {
        todoList.removeChild(todoList.lastChild);
    }

}

// Vamos crar uma função para ler nosso "Banco de dados", e criar um item para cada objeto dentro do ARRAY
// Toda hora que mudarmos algo no "Banco de dados", essa função vai mandar atualizar a tela do navegador.
const rendertela = () => {
    limpartarefas();
    banco.forEach((item, indice) => criarItem(item.tarefa, item.status, indice));

}

// Quando a pessoa apertar ENTER na caixinha, ele criar mais um objeto no banco e atualiza a tela.
const additem = (evento) => {

    const tecla = evento.key;

    const texto = evento.target.value;

    if (tecla === "Enter") {
        banco.push({ "tarefa": texto, "status": "" });

        evento.target.value = "";

        rendertela();
    };
};

// Aqui vamos fazer uma função para o banco de dados atualizar, quando a tarefa for cumprioda, e remover o item quando clicar no X.
const removeritem = (indice) => {

    banco.splice(indice, 1);
    rendertela();

}
const clickitem = (evento) => {
    const elemento = evento.target;
    if (elemento.type === "button") {
        const indice = elemento.dataset.indice;       
        
        removeritem(indice);
    }



}



document.getElementById("colocartarefa").addEventListener("keypress", additem);
document.getElementById("todoList").addEventListener("click", clickitem);

rendertela();