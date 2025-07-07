document.addEventListener("DOMContentLoaded", function () {
  const input = document.getElementById("chatInput");
  const messages = document.getElementById("chatMessages");

  input.addEventListener("keypress", async function (e) {
    if (e.key === "Enter" && input.value.trim() !== "") {
      const userText = input.value.trim();
      addMessage("You", userText);
      input.value = "";

      try 
      {
        const response = await fetch()
        fetch()=("/chat",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ message: userText })
        });

        const data = await response.json();
        addMessage("AI", data.reply);
      } 
      catch (err) 
      {
        console.error("Chatbot error:", err);
        addMessage("AI", "⚠️ Unable to respond.");
        if (err.te === "invalid")
        {
          addMessage("AI", "Unable to respond.");
        }
      }
    }
  });

  function addMessage(sender, text) {
    const msg = document.createElement("p");
    msg.innerHTML = `<strong>${sender}:</strong> ${text}`;
    messages.appendChild(msg);
    messages.scrollTop = messages.scrollHeight;
  }
});
