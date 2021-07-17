const rock = 1;
const paper = 2;
const scissors = 3;

function getMatchResult(player1, player2) {
    if (player1 == player2) {
        return 0
    }
    if (player1 == rock && player2 == paper) {
        return 2
    }
    if (player1 == paper && player2 == scissors) {
        return 2
    }
    if (player1 == scissors && player2 == rock) {
        return 2
    }

    return 1;

}


function getRandomNumber(min, max) {
    var random = Math.random();
    var range = max - min;
    return Math.round(min + random * range);
}

function getChoiceLabel(choice) {
    if (choice === rock)
        return "rock";
    if (choice === paper)
        return "paper";
    if (choice === scissors)
        return "scissors";
}

function getWinningChoice(player1) {
    if (player1 == rock) {
        return paper;
    }
    if (player1 == paper) {
        return scissors;
    }
    if (player1 == scissors) {
        return rock;
    }
    return rock;
}

var player1points = 0
var player2points = 0

alert = function(message) {
    messages.innerText += message + "\n";
}


function choose(player1) {
    messages.innerText = ''
    let player2 = getRandomNumber(1, 3);
    alert("player1 choose " + getChoiceLabel(player1))
    alert("player2 choose " + getChoiceLabel(player2))
    
    let winner = getMatchResult(player1, player2)

    if (winner == 1) {
        player1points = player1points + 1
    }


    if (winner == 2) {
        player2points = player2points + 1
    }

    if (winner == 0) {
        alert("it was a tie")
    }
    
    else {
        alert("winner was player " + winner)
    }

alert("player 1 points " + player1points)
alert("player 2 points " + player2points)


}