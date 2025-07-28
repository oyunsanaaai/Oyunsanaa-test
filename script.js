const chatBox = document.getElementById("chat-box");
const userInput = document.getElementById("user-input");
const typingIndicator = document.getElementById("typing-indicator");

function sendMessage() {
  const message = userInput.value.trim();
  if (message === "") return;

  appendMessage("user", message);
  userInput.value = "";
  scrollToBottom();

  typingIndicator.style.display = "block";

  setTimeout(() => {
    appendMessage("bot", generateResponse(message));
    typingIndicator.style.display = "none";
    scrollToBottom();
  }, 1200);
}

function appendMessage(sender, text) {
  const msg = document.createElement("div");
  msg.className = sender === "user" ? "user-message" : "bot-message";
  msg.textContent = text;
  chatBox.appendChild(msg);
}

function scrollToBottom() {
  chatBox.scrollTop = chatBox.scrollHeight;
}

function handleKey(event) {
  if (event.key === "Enter") {
    sendMessage();
  }
}

function generateResponse(message) {
  if (message.includes("сайн уу")) return "Сайн байна уу! Би Oyunsanaa байна. 😊";
  if (message.includes("баярлалаа")) return "Танд баярлалаа! 💖";
  return "Таны хэлсэн зүйлийг ойлголоо. Илүү дэлгэрэнгүй бичнэ үү?";
}
