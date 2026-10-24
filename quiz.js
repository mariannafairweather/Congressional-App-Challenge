
const buttons = document.querySelectorAll("button");
const answers = []
const scores = [0, 0, 0, 0, 0];
const questionColors = [
    {name: "q1", color:"linear-gradient(180deg, #F7F0E6, #effdffff)"},
    {name: "q2", color:"linear-gradient(180deg, #F7F0E6, #d5faffff)"},
    {name: "q3", color:"linear-gradient(180deg, #F7F0E6, #9df4ffff)"},
    {name: "q4", color:"linear-gradient(180deg, #F7F0E6, #7cf0ffff)"},
    {name: "q5", color:"linear-gradient(180deg, #F7F0E6, #70eeffff)"},
];
    
const seniors = [
    {name: "amelie", pfp: "images/amelie.png", bio: "Founder of HER club at CVU", contacts:"802-489-8855", color:"linear-gradient(180deg, #F7F0E6, #fbc9c9ff)"},
    {name: "ally", pfp: "images/ally.png", bio: "senior number 2", contacts:"802-233-8401"},
    {name: "willow", pfp: "images/willow.png", bio: "senior number 3", contacts:"xxx-xxx-xxxx"},
    {name: "milashi", pfp: "images/milashi.png", bio: "senior number 4", contacts:"xxx-xxx-xxxx"},
];
console.log(buttons);
buttons.forEach((btn) => {
    btn.addEventListener("click", () => {
        console.log("clicked")
        answers.push(btn.dataset.choice);
        scores[btn.dataset.senior]++;
        console.log(scores);
        document.body.style.background = questionColors[answers.length].color;
        if (answers.length === 5) { const winner = scores.indexOf(Math.max(...scores));
            document.body.style.background = seniors[winner].color;
            document.getElementById("match-pfp").src = seniors[winner].pfp; 
            document.getElementById("match-name").textContent = seniors[winner].name;
            document.getElementById("match-bio").textContent = seniors[winner].bio;
            document.getElementById("match-contact").textContent = seniors[winner].contacts;}
           

        btn.parentElement.hidden = true;
        btn.parentElement.nextElementSibling.hidden = false;

        console.log(answers);
    });
});


