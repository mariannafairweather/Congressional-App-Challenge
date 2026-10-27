const match = localStorage.getItem("match");
const input = document.getElementById("message-input");
const sendBtn = document.getElementById("send-btn");
const messages = document.getElementById("messages");
const params = new URLSearchParams(window.location.search);
const seniorNum = params.get("senior") || match;
const chatKey = "chat-" + seniorNum;
      if (params.get("role")) { role.value = params.get("role"); role.hidden = true; }
document.getElementById("chat-pfp").src = seniors[seniorNum].pfp;
document.getElementById("chat-name").textContent = seniors[seniorNum].name;
sendBtn.addEventListener("click", () => {
        console.log("clicked")
        const chat = JSON.parse(localStorage.getItem(chatKey)) || [];
        if (input.value === "") return;
    chat.push({ from: role.value, text: input.value });

localStorage.setItem(chatKey, JSON.stringify(chat));
showMessages();
        input.value = ""
    });
    function showMessages() {
        messages.innerHTML = "";
        const chat = JSON.parse(localStorage.getItem(chatKey)) || [];
        console.log(chat);
        chat.forEach((msg) => {
             const bubble = document.createElement("div");
             if (msg.from === role.value) { bubble.classList.add("my-bubble"); }
             else { bubble.classList.add("their-bubble"); }

        bubble.textContent = msg.text
        messages.appendChild(bubble);
messages.scrollTop = messages.scrollHeight
    });
}
showMessages();
role.addEventListener("change", showMessages);
window.addEventListener("storage", showMessages);