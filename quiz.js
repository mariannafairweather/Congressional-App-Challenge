
const buttons = document.querySelectorAll("button");
const answers = []
console.log(buttons);
buttons.forEach((btn) => {
btn.addEventListener("click", () => {
 console.log("spring clicked")
 answers.push(0);
 console.log(answers);
});
});


