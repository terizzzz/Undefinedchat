const messageInput = document.getElementById('message-input');
const messageContainer = document.getElementById('message-container');
let messageCount = 0;
let messages = JSON.parse(localStorage.getItem('messages')) || [];

document.getElementById('send-button').addEventListener('click', () => {
    const message = messageInput.value;
    if (message.trim() !== '') {
        messageCount++;
        const newMessage = document.createElement('div');
        newMessage.innerHTML = `<span class="message-number">${messageCount}</span> ${message}`;
        messageContainer.appendChild(newMessage);
        messages.push(message);
        localStorage.setItem('messages', JSON.stringify(messages));
        messageInput.value = '';
        // Send message to server or broadcast to other users here
    }
});

messages.forEach((message) => {
    messageCount++;
    const newMessage = document.createElement('div');
    newMessage.innerHTML = `<span class="message-number">${messageCount}</span> ${message}`;
    messageContainer.appendChild(newMessage);
    // Display existing messages from server or other users here
});