function toggleChat() {
  const chat = document.getElementById("chat-container");
  chat.classList.toggle("hidden");
}

function handleKey(event) {
  if (event.key === "Enter") {
    sendMessage();
  }
}

function sendMessage() {
  const input = document.getElementById("user-input");
  const message = input.value.trim();
  if (message === "") return;

  addMessage(message, "user-message");
  input.value = "";

  // Simulate typing
  const typing = document.getElementById("typing-indicator");
  typing.style.display = "block";

  setTimeout(() => {
    typing.style.display = "none";
    const reply = generateBotReply(message);
    addMessage(reply, "bot-message");
  }, 1000);
}

function addMessage(text, className) {
  const chatBox = document.getElementById("chat-box");
  const msg = document.createElement("div");
  msg.className = className;
  msg.textContent = text;
  chatBox.appendChild(msg);
  chatBox.scrollTop = chatBox.scrollHeight;
}

function generateBotReply(userMessage) {
  // Simple example reply
  return "Сонирхолтой байна шүү. Дэлгэрүүлээд яриач?";
}
