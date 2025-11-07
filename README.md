# 📝 Lista de Tarefas

Um projeto simples e intuitivo de **Lista de Tarefas** construído com **HTML, CSS e JavaScript** puro. Permite aos usuários adicionar tarefas com nome/título e descrição, além de incluir um recurso de alternância para o **Modo Escuro** (Dark Mode).

---

## Recursos

* **Adicionar Tarefas:** Crie novas tarefas com um Nome/Título e uma Descrição.
* **Edição Completa:** Permite **editar** o Nome e a Descrição de uma tarefa existente diretamente na interface de entrada, transformando o botão "Adicionar" em "Atualizar".
* **Marcação de Conclusão:** Função para marcar uma tarefa como concluída (ou desfazer a conclusão), com aplicação de estilo visual (classe `.concluida` no CSS).
* **Exclusão de Tarefas:** Permite excluir tarefas da lista com uma confirmação prévia.
* **Persistência de Dados (Local Storage):** As tarefas e o estado do Modo Escuro são salvos no navegador usando `localStorage`, garantindo que não sejam perdidos ao recarregar a página.
* **Alternância de Tema:** Botão para alternar entre o tema claro e o Modo Escuro (`#dark-mode-toggle`), com o estado do tema salvo.
* **Timestamp Automático:** A data de criação/inclusão da tarefa é registrada automaticamente (`tarefa.data`).
* **Feedback ao Usuário:** Exibe mensagens temporárias (`sucesso` ou `erro`) na interface para indicar o resultado das ações (adição, atualização ou validação).

---
## Como Executar

Este projeto é uma aplicação *frontend* pura e pode ser executado diretamente em qualquer navegador web moderno.

### Instalação e Execução

1.  **Clone o repositório** (se estiver em um, ou baixe os arquivos):
    ```bash
    git clone [URL_DO_SEU_REPOSITÓRIO]
    cd lista-de-tarefas
    ```
2.  Certifique-se de que os arquivos `index.html`, `style.css` e `script.js` estejam no mesmo diretório.
3.  **Abra o arquivo `index.html`** no seu navegador de preferência.
