const match = localStorage.getItem("match");
const bubble = document.createElement("div");
const input = document.getElementById("message-input");
const sendBtn = document.getElementById("send-btn");
const messages = document.getElementById("messages");
document.getElementById("chat-pfp").src = seniors[match].pfp;
document.getElementById("chat-name").textContent = seniors[match].name;
sendBtn.addEventListener("click", () => {
        console.log("clicked")
        bubble.textContent = document.getElementById("input-value");
        bubble.classList.add("my-bubble");
        messages.appendChild(bubble);
        input.value = ""
    });