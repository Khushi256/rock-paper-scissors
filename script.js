let userScore=0;
let compScore=0;
const choices = document.querySelectorAll(".choice");
const msgpara = document.querySelector("#msgg");
const user_score = document.querySelector("#user-score");
const comp_score = document.querySelector("#comp-score");

const gencompchoice = () => {
    const option = ["rock","paper","scissors"];
    const randidx = Math.floor(Math.random() * 3);
    return option[randidx];
}

const showWinner = (userwin, userchoice, compchoice) => {
    if(userwin===true){
        userScore++;
        user_score.innerText = userScore;
        msgpara.innerText=`User won! ${userchoice} beats ${compchoice}`;
    }
    else{
        compScore++;
        comp_score.innerText = compScore;
        msgpara.innerText=`You loose! ${compchoice} beats ${userchoice}`;
        
    }
}

const play = (userchoice) => {
    const compchoice = gencompchoice();
    if(userchoice===compchoice){
        msgpara.innerText = "Oops! It's a draw"
    }
    else{
        let userwin = true;
        if(userchoice==="rock"){
            userwin = compchoice==="paper" ? false : true;
        }
        else if(userchoice==="paper"){
            userwin = compchoice==="rock" ? true : false;
        }
        else if(userchoice==="scissors"){
            userwin = compchoice==="rock" ? false : true;
        }showWinner(userwin,userchoice,compchoice);
    }
}
choices.forEach((choice) =>{
    choice.addEventListener("click",() =>{
        const userchoice = choice.getAttribute("id")
        play(userchoice);
    })
})
    