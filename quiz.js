
const buttons = document.querySelectorAll("button");
const answers = []
const scores = [0, 0, 0, 0, 0, 0];
const questionColors = [
    {name: "q1", color:"linear-gradient(180deg, #F7F0E6, #effdffff)"},
    {name: "q2", color:"linear-gradient(180deg, #F7F0E6, #d5faffff)"},
    {name: "q3", color:"linear-gradient(180deg, #F7F0E6, #9df4ffff)"},
    {name: "q4", color:"linear-gradient(180deg, #F7F0E6, #7cf0ffff)"},
    {name: "q5", color:"linear-gradient(180deg, #F7F0E6, #70eeffff)"},
    {name: "q6", color:"linear-gradient(180deg, #F7F0E6, #5eecffff)"},
    {name: "q6", color:"linear-gradient(180deg, #F7F0E6, #2ce6ffff)"},
];
    
const seniors = [
    {name: "Maya Thompson", pfp: "images/mayasenior1.png", bio: "Theater kid, and artist", pronouns: "she/her", color:"linear-gradient(180deg, #F7F0E6, #ff86fdff)"},
    {name: "Jordan Reyes", pfp: "images/jordansenior2.png", bio: "President of GSA", pronouns: "they/them", color:"linear-gradient(180deg, #F7F0E6, #c53232ff)"},
    {name: "Priya Shah", pfp: "images/priyasenior3.png", bio: "Varsity soccer and AP Chem", pronouns: "she/her", color:"linear-gradient(180deg, #F7F0E6, #7dffa2ff)"},
    {name: "Sam Brooks", pfp: "images/samsenior4.png", bio: "Soccer player and robotics", pronouns: "he/him", color:"linear-gradient(180deg, #F7F0E6, #5bb2ffff)"},
];
console.log(buttons);
buttons.forEach((btn) => {
    btn.addEventListener("click", () => {
        console.log("clicked")
        answers.push(btn.dataset.choice);
        scores[btn.dataset.senior]++;
        console.log(scores);
        document.body.style.background = questionColors[answers.length].color;
        if (answers.length === 6) { const winner = scores.indexOf(Math.max(...scores));
            localStorage.setItem("match", winner);
            document.body.style.background = seniors[winner].color;
            document.getElementById("match-pfp").src = seniors[winner].pfp; 
            document.getElementById("match-name").textContent = seniors[winner].name;
            document.getElementById("match-bio").textContent = seniors[winner].bio;
            document.getElementById("match-contact").textContent = seniors[winner].contacts;
             document.getElementById("match-pronouns").textContent = seniors[winner].pronouns;}
           

        btn.parentElement.hidden = true;
        btn.parentElement.nextElementSibling.hidden = false;

        console.log(answers);
    });
});


