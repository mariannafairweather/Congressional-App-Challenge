
const buttons = document.querySelectorAll("button");
const answers = []
console.log(buttons);
buttons.forEach((btn) => {
btn.addEventListener("click", () => {
 console.log("clicked")
 answers.push(btn.dataset.choice);
 console.log(answers);
});
});


