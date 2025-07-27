const chatbox = document.getElementById('chatbox');
const userInput = document.getElementById('userInput');

userInput.addEventListener('keypress', function(e) {
  if (e.key === 'Enter') {
    const userMessage = userInput.value.trim();
    if (userMessage) {
      appendMessage('user', userMessage);
      getBotResponse(userMessage);
      userInput.value = '';
    }
  }
});

function appendMessage(sender, text) {
  const messageDiv = document.createElement('div');
  messageDiv.className = `message ${sender}`;
  messageDiv.textContent = sender === 'user' ? `Та: ${text}` : `Oyunsanaa: ${text}`;
  chatbox.appendChild(messageDiv);
  chatbox.scrollTop = chatbox.scrollHeight;
}

function getBotResponse(input) {
  let response = '';

  if (input.toLowerCase().includes('сайн')) {
    response = 'Сайн уу, тантай уулзсандаа баяртай байна!';
  } else if (input.toLowerCase().includes('гутрал')) {
    response = 'Та сэтгэл гутрал мэдэрч байгаа бол ярилцаж болно. Би танд туслахыг хичээнэ.';
  } else {
    response = 'Баярлалаа, би танд анхааралтай хандана.';
  }

  setTimeout(() => {
    appendMessage('bot', response);
  }, 500);
}
