
const buttons = document.querySelectorAll("button");
const answers = []
console.log(buttons);
buttons.forEach((btn) => {
    btn.addEventListener("click", () => {
        console.log("clicked")
        answers.push(btn.dataset.choice);
        btn.parentElement.hidden = true;
        btn.parentElement.nextElementSibling.hidden = false;

        console.log(answers);
    });
});


