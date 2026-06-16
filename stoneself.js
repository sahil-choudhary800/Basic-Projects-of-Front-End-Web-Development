let userscore=0;
let compscore=0;

const mychoice=document.querySelectorAll(".choice");
const msg=document.querySelector("#msg");
const userscorepara=document.querySelector("#user-score");
const compscorepara=document.querySelector("#comp-score");

mychoice.forEach((choice)=>{
    choice.addEventListener("click",()=>{
     const userchoice=choice.getAttribute("id");
     playGame(userchoice);
    })
})

const gencompchoice=()=>{
    const options=["rock","paper","scissors"];
    const randIdx=Math.floor(Math.random()*3);
    return options[randIdx];
}

const drawgame=()=>{
    console.log("the game is draw");
    msg.innerText="the game is draw play again";
    msg.style.backgroundColor="#081b31";

}

const showwinner=(userwin,userchoice,compchoice)=>{
    if(userwin){
     userscore++;
     userscorepara.innerText=userscore;
     msg.innerText=`you win the game. your ${userchoice} beats ${compchoice}`;
     msg.style.backgroundColor="green";
    }else{
         compscore++;
     compscorepara.innerText=compscore;
     msg.innerText=`you lose the game.  ${compchoice} beats your ${userchoice}`;
     msg.style.backgroundColor="red";
    }
}

const playGame=(userchoice)=>{
    console.log("user choice is =",userchoice);
    const compchoice=gencompchoice();
    console.log("comp choice is = ", compchoice);
    if(userchoice===compchoice){
        drawgame();
    }else{
        let userwin=true;
        if(userchoice==="rock"){
            userwin=compchoice==="paper"?false:true;
        }else if(userchoice==="paper"){
            userwin=compchoice==="scissors"?false:true;
        }else{
            userwin=compchoice==="rock"?false:true;
        }
        showwinner(userwin,userchoice,compchoice);
    }
};