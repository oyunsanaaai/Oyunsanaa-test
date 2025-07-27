async function sendMessage() {
    const input = document.getElementById('user-input');
    const chatBox = document.getElementById('chat-box');
    const userMessage = input.value.trim();
    if (!userMessage) return;

    chatBox.innerHTML += `<div><strong>Та:</strong> ${userMessage}</div>`;
    input.value = '';

    const response = await fetch('/api/chat', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ message: userMessage }),
    });

    const data = await response.json();

    if (data.reply) {
        chatBox.innerHTML += `<div><strong>Oyunsanaa:</strong> ${data.reply}</div>`;
    } else {
        chatBox.innerHTML += `<div><strong>Oyunsanaa:</strong> Алдаа гарлаа. (${data.error || 'No reply'})</div>`;
    }

    chatBox.scrollTop = chatBox.scrollHeight;
}
