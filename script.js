// script.js

const chatContainer = document.getElementById("chatContainer");
const userInput = document.getElementById("userInput");
const typingIndicator = document.getElementById("typingIndicator");

function sendMessage() {
  const message = userInput.value.trim();
  if (message === "") return;

  appendMessage("user", message);
  userInput.value = "";
  scrollToBottom();

  typingIndicator.style.display = "block";

  setTimeout(() => {
    appendMessage("ai", generateResponse(message));
    typingIndicator.style.display = "none";
    scrollToBottom();
  }, 1200);
}

function appendMessage(sender, text) {
  const msg = document.createElement("div");
  msg.className = `message ${sender}`;
  msg.textContent = text;
  chatContainer.appendChild(msg);
}

function scrollToBottom() {
  chatContainer.scrollTop = chatContainer.scrollHeight;
}

function handleKey(event) {
  if (event.key === "Enter") {
    sendMessage();
  }
}

function generateResponse(message) {
  // Түр зуурын chatbot логик (дараа нь ChatGPT API холбох)
  if (message.includes("сайн уу")) return "Сайн байна уу? 😊 Би Oyunsanaa байна.";
  if (message.includes("баярлалаа")) return "Танд баярлалаа. 🧡";
  return "Энэ талаар дэлгэрэнгүй яриач?";
}
