function humanChoice(choice) {
    const bot = botChoice()
    resultGame(choice, bot)
    showBotMove(bot)
    if (choice === "rock") {
        humansMove.innerHTML = "&#9994;"

    }
    else if (choice === "paper") {
        humansMove.innerHTML = "&#9995;"
    }
    else {
        humansMove.innerHTML = "&#9996;"
    }
}

function showBotMove(moveBot) {
    if (moveBot === "rock") {
        machineMove.innerHTML = "&#9994;"

    }
    else if (moveBot === "paper") {
        machineMove.innerHTML = "&#9995;"
    }
    else {
        machineMove.innerHTML = "&#9996;"
    }
}


function botChoice() {
    const choices = ['rock', 'paper', 'scissors']
    const randomNumber = Math.floor(Math.random() * 3)
    return choices[randomNumber]
}

function resultGame(human, bot) {
    console.log(`human: ${human} machine: ${bot}`)
    if (human === bot) {
        result.innerHTML = "Deu Empate!"
    }
    else if (human === "paper" && bot === "rock" ||
        human === "rock" && bot === "scissors" ||
        human === "scissors" && bot === "paper")
        {
            pointCount++
            score1.innerHTML = pointCount
            result.innerHTML = "Voce Ganhou!"
    }
    else {
        result.innerHTML = "Vitória do Bot!"
        pointCount2++
        score2.innerHTML = pointCount2
    }
}

let pointCount = 0
let pointCount2 = 0

const humansMove = document.querySelector(".humans-move")
const result = document.querySelector(".result")
const machineMove = document.querySelector(".machine-move")
const score1 = document.querySelector(".yourScoreSpan")
const score2 = document.querySelector(".botScoreSpan")