async function sendMessage() {
  const input = document.getElementById("userInput");
  const message = input.value.trim();
  if (!message) return;

  appendMessage(message, "user");
  input.value = "";

  const response = await fetch("/api/chat", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ message }),
  });

  const data = await response.json();
  appendMessage(data.reply, "bot");
  scrollToBottom();
}

function appendMessage(message, sender) {
  const messages = document.getElementById("messages");
  const messageElem = document.createElement("div");
  messageElem.className = `message ${sender}`;
  messageElem.innerText = message;
  messages.appendChild(messageElem);
}

function scrollToBottom() {
  const messages = document.getElementById("messages");
  messages.scrollTop = messages.scrollHeight;
}

// ENTER дарахад илгээх
document.getElementById("userInput").addEventListener("keypress", function (e) {
  if (e.key === "Enter") sendMessage();
});
