const match = localStorage.getItem("match");
const input = document.getElementById("message-input");
const sendBtn = document.getElementById("send-btn");
const messages = document.getElementById("messages");
document.getElementById("chat-pfp").src = seniors[match].pfp;
document.getElementById("chat-name").textContent = seniors[match].name;
sendBtn.addEventListener("click", () => {
        console.log("clicked")
        const chat = JSON.parse(localStorage.getItem("chat")) || [];
    chat.push({ from: role.value, text: input.value });
localStorage.setItem("chat", JSON.stringify(chat));
showMessages();
        input.value = ""
    });
    function showMessages() {
        messages.innerHTML = "";
        const chat = JSON.parse(localStorage.getItem("chat")) || [];
        console.log(chat);
        chat.forEach((msg) => {
             const bubble = document.createElement("div");
             if (msg.from === role.value) { bubble.classList.add("my-bubble"); }
             else { bubble.classList.add("their-bubble"); }

        bubble.textContent = msg.text
        messages.appendChild(bubble);

    });
}
showMessages();
role.addEventListener("change", showMessages);
window.addEventListener("storage", showMessages);