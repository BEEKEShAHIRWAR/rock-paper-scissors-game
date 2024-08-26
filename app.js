let userscore = 0;
let compscore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userscorepara = document.querySelector("#user-score");
const compscorepara = document.querySelector("#comp-score");


const gencompchoice = () => {
    const options = ["rock", "paper", "scissors"];
    const randidx = Math.floor(Math.random() * 3);
    return options[randidx]
}
const drawgame = () => {
    // console.log("Game was draw.");
    msg.innerText = "Game was draw. play again";
    msg.style.backgroundColor = "#081b31";
}

const showWinner = (userwin, userchoice, compchoice) => {
    if (userwin) {
        // console.log("you win!")
        userscore++;
        userscorepara.innerText = userscore;
        msg.innerText = `you win! your ${userchoice} beats ${compchoice}`;
        msg.style.backgroundColor = "green"
    } else {
        // console.log("you lose!")
        compscore++;
        compscorepara.innerText = compscore;
        msg.innerText = `you lose! ${compchoice} beats your ${userchoice}`;
        msg.style.backgroundColor = "red"

    }
}

const playgame = (userchoice) => {
    console.log("userchoice", userchoice);
    // generate computer choice
    const compchoice = gencompchoice();
    console.log("compchoice", compchoice);

    if (userchoice === compchoice) {
        // draw game
        drawgame();
    } else {
        let userwin = true;
        if (userchoice === "rock") {
            // scissors, paper
            userwin = compchoice === "paper" ? false : true;
        } else if (userchoice === "paper") {
            // rock, scissors
            userwin = compchoice === "scissors" ? false : true;
        } else {
            //rock,paper
            userwin = compchoice === "rock" ? fale : true;
        }
        showWinner(userwin, userchoice, compchoice);
    }
};

choices.forEach((choice) => {
    // console.log(choice)
    choice.addEventListener("click", () => {
        const userchoice = choice.getAttribute("id")
        playgame(userchoice);

        // console.log("choice was clicked",userchoice)
    })
})
