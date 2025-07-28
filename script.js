function sendMessage() {
  const input = document.getElementById("userInput");
  const message = input.value.trim();
  if (!message) return;

  // Хэрэглэгчийн мессеж нэмэх
  addMessage("user", message);

  input.value = "";
  showTypingIndicator(); // AI бичиж байна гэж харуулна

  // Түр хугацааны "бичиж байна..." effect
  setTimeout(() => {
    hideTypingIndicator();
    addMessage("ai", generateAIResponse(message));
    scrollToBottom();
  }, 1000); // 1 секунд хүлээлгэнэ
}
