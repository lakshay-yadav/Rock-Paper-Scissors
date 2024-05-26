let userScore = 0;
let compScore = 0;

let userScoreId = document.querySelector("#user-score")
let compScoreId = document.querySelector("#comp-score")
let message = document.querySelector("#mess")

let choices = document.querySelectorAll(".choice")

const genCompChoice = ()=>{
    let options = ['rock','paper','scissors']
    let option = Math.floor(Math.random()*3)

    return options[option]
}

const playGame= (userChoice)=>{
    let compChoice = genCompChoice()
    if(userChoice===compChoice){
        console.log("Draw")
        message.innerText = "Draw. Play again"
        message.style.backgroundColor = "black"
    }
    else{
        if(userChoice==='rock'){
            if(compChoice==='scissors'){
                console.log("User win")
                userScore++;
                message.innerText = "You win"
                message.style.backgroundColor = "green"
            }
            else{
                console.log("Comp win")
                compScore++;
                message.innerText = "You lose"
                message.style.backgroundColor = "red"
            }
        }
        if(userChoice=='paper'){
            if(compChoice==='rock'){
                console.log("User win")
                userScore++
                message.innerText = "You win"
                message.style.backgroundColor = "green"
            }
            else{
                console.log("Comp win")
                compScore++;
                message.innerText = "You lose"
                message.style.backgroundColor = "red"
            }
        }
        if(userChoice=='scissors'){
            if(compChoice==='paper'){
                console.log("User win")
                userScore++
                message.innerText = "You win"
                message.style.backgroundColor = "green"
            }
            else{
                console.log("Comp win")
                compScore++;
                message.innerText = "You lose"
                message.style.backgroundColor = "red"
            }
        }
    }
    
}

choices.forEach((choice)=>{
    choice.addEventListener("click",(e)=>{
        const userChoice = choice.getAttribute("id")
        playGame(userChoice)
        userScoreId.innerText = userScore
        compScoreId.innerText = compScore
    })
})

