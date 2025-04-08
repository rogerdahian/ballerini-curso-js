  // Criando uma array vazia
  let tarefas = []
  

function adicionarTarefa() {

  //  Recebe valor do input do usuário
  const inputTarefa = document.getElementById("inputTarefa");  
  let tarefa = inputTarefa.value.trim()
  const mensagem = document.getElementById("mensagem")

  //  Se o campo do input estiver vazio faça isso
  if (tarefa == "") {
    //  Mostre uma mensagem de erro
    let mensagemErro = "Digite uma tarefa para adicioná-la a sua lista!"
    mensagem.textContent = mensagemErro
  } else {
    // Mensagem de tarefa adicionada com sucesso
    let mensagemSucesso = "Tarefa adicionada com sucesso!";
    mensagem.textContent = mensagemSucesso
    
    tarefas.push(tarefa)
    renderizarTarefas()
  }

  // Limpa o imput do usuário
  inputTarefa.value = "";
}

function renderizarTarefas() {
   //  Cria novo item (li) e insere na (lista ul)
   const listaTarefas = document.getElementById("listaTarefas");
  listaTarefas.innerHTML = ""
   // for itens na lista 
   // 1. item inicial (iterador)
   // 2. item final (condição)
   // 3. se vai de 1 em 1 elemento ou se pula
   // for (iterador, condição, frequência)
   for (let i = 0; i < tarefas.length; i++){
    
    let novaTarefa = document.createElement("li");
    novaTarefa.textContent = tarefas[i]

    let botaoRemover = document.createElement("button")
    botaoRemover.className = "remover"
    botaoRemover.textContent = "Remover"
    botaoRemover.onclick = () => removerTarefa(i)

    let botaoEditar = document.createElement("button")
    botaoEditar.className = "editar"
    botaoEditar.textContent = "Editar"
    botaoEditar.onclick = () => editarTarefa(i)
    
    novaTarefa.appendChild(botaoEditar)
    novaTarefa.appendChild(botaoRemover)
    listaTarefas.appendChild(novaTarefa);
   }
   
   
}

function removerTarefa(i) {
  tarefas.splice(i, 1)
  renderizarTarefas()
}

function editarTarefa(i) {
  let tarefaEditada = prompt("Edite a tarefa:")
  if (tarefaEditada.trim() !== "") {
    tarefas[i] = tarefaEditada
    renderizarTarefas()
  }
}

function limparLista() {
  tarefas.length = 0
  renderizarTarefas()
  mensagem.textContent = "Lista de tarefas limpa com sucesso!"
}