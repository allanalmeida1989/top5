// script.js

// Função que adiciona um evento de clique a todos os itens da lista
function addListItemClickEvents() {
    // Seleciona todas as listas ordenadas dentro das seções
    const listItems = document.querySelectorAll('section ol li');

    // Seleciona a caixa de mensagem
    const messageBox = document.getElementById('messageBox');

    // Itera sobre cada item da lista
    listItems.forEach(item => {
        item.addEventListener('click', function() {
            // Define o texto da caixa de mensagem
            messageBox.textContent = `Você selecionou: ${this.textContent}`;
            messageBox.style.display = 'block'; // Mostra a caixa de mensagem
        });
    });
    
    // Função para enviar a mensagem do usuário
    const sendMessageButton = document.getElementById('sendMessage');
    const userMessageInput = document.getElementById('userMessage');

    sendMessageButton.addEventListener('click', function() {
        const userMessage = userMessageInput.value.trim(); // Pega o valor da caixa de texto

        if (userMessage) { // Verifica se a mensagem não está vazia
            messageBox.textContent = `Sua mensagem: ${userMessage}`;
            userMessageInput.value = ''; // Limpa a caixa de texto após enviar
            messageBox.style.display = 'block'; // Mostra a caixa de mensagem
        }
    });
}

// Chama a função para adicionar eventos de clique após o carregamento do DOM
document.addEventListener('DOMContentLoaded', addListItemClickEvents);