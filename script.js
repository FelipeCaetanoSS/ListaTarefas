let tarefas = []
let editando = -1

const CHAVE_TAREFAS = "minhasTarefas";
const CHAVE_MODO = "userDarkMode";

document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("addButton").addEventListener("click", adicionarTarefa);
    document.getElementById("dark-mode-toggle").addEventListener("click", toggleDarkMode);

    carregarTarefas();
    aplicarModoSalvo();
});

// --- FUNÇÕES DE MODO ESCURO ---

function aplicarModoSalvo() {
    const isDarkMode = localStorage.getItem(CHAVE_MODO) === "true";
    const body = document.body;
    const toggleButton = document.getElementById("dark-mode-toggle");

    if (isDarkMode) {
        body.classList.add("dark-mode");
        toggleButton.textContent = "Modo Claro";
    } else {
        body.classList.remove("dark-mode");
        toggleButton.textContent = "Modo Escuro";
    }
}

function toggleDarkMode() {
    const body = document.body;
    const isDarkMode = body.classList.toggle("dark-mode");
    const toggleButton = document.getElementById("dark-mode-toggle");
    
    localStorage.setItem(CHAVE_MODO, isDarkMode);

    toggleButton.textContent = isDarkMode ? "Modo Claro" : "Modo Escuro";
}

// --- FUNÇÕES DE LOCAL STORAGE ---

function carregarTarefas() {
    const tarefasSalvas = localStorage.getItem(CHAVE_TAREFAS);
    
    if (tarefasSalvas) {
        tarefas = JSON.parse(tarefasSalvas);
    }
    
    renderizarLista();
}

function salvarTarefas() {
    const tarefasJSON = JSON.stringify(tarefas);
    localStorage.setItem(CHAVE_TAREFAS, tarefasJSON);
}

// --- FUNÇÕES PRINCIPAIS DA APLICAÇÃO ---

function adicionarTarefa() {
    const nome = document.getElementById('nome').value.trim();
    const descricao = document.getElementById('descricao').value.trim();
    const data = new Date().toLocaleDateString("pt-BR");
    const btn = document.getElementById('addButton'); 

    if (!nome || !descricao) {
        mostrarMensagem("Preencha todos os campos", "erro");
        return;
    }

    if (editando === -1) {
        const tarefa = { nome, descricao, data, concluida: false };
        tarefas.push(tarefa);
        mostrarMensagem("Tarefa adicionada com sucesso!", "sucesso");
    } else {
        tarefas[editando].nome = nome;
        tarefas[editando].descricao = descricao;
        
        mostrarMensagem("Tarefa atualizada com sucesso!", "sucesso");
        
        editando = -1;
        btn.textContent = "Adicionar";
    }

    document.getElementById("nome").value = "";
    document.getElementById("descricao").value = "";

    renderizarLista();
    salvarTarefas();
}

function renderizarLista() {
    const taskList = document.getElementById("taskList");
    taskList.innerHTML = "";
    tarefas.forEach((tarefa, index) => {
        const li = document.createElement("li");
        
        if (tarefa.concluida) {
            li.classList.add("concluida");
        }

        const textoBotaoConcluir = tarefa.concluida ? "Desfazer" : "Concluir";

        const lista = `
            <div class="task-info">
                <strong>${tarefa.nome}</strong> 
                <small>(${tarefa.data})</small>
                <p>${tarefa.descricao}</p>
            </div>
            <div class="task-buttons">
                <button onclick="alternarConclusao(${index})">${textoBotaoConcluir}</button>
                <button onclick="prepararEdicao(${index})">Editar</button>
                <button onclick="excluirTarefa(${index})">Excluir</button>
            </div>
        `;
        li.innerHTML = lista;
        taskList.appendChild(li);
    });
}

function alternarConclusao(index) {
    tarefas[index].concluida = !tarefas[index].concluida;
    renderizarLista();
    salvarTarefas();
}

function prepararEdicao(index) {
    const tarefa = tarefas[index];
    document.getElementById('nome').value = tarefa.nome;
    document.getElementById('descricao').value = tarefa.descricao;
    editando = index;
    document.getElementById('addButton').textContent = "Atualizar";
    document.getElementById('nome').focus();
}

function excluirTarefa(index) {
    if (confirm("Tem certeza que deseja excluir esta tarefa?")) {
        tarefas.splice(index, 1);
        renderizarLista();
        salvarTarefas();
    }
}

function mostrarMensagem(texto, tipo) {
    const msg = document.getElementById("mensagem");
    msg.textContent = texto;
    msg.className = "mensagem " + tipo;
    setTimeout(() => {
        msg.className = "mensagem";
        msg.textContent = "";
    }, 3000);
}