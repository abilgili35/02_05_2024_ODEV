var timeLimit = 30;
var resetTimer = false;
var secretNumber;
var level;
var remainingAttempts;
var maxNumber;
var timerFunction;

window.onload=function(){
    maxNumber = 10;
    timerFunction = setInterval(timer, 1000);
    secretNumber = getRandomNumber(maxNumber);
    level = 1;
    remainingAttempts = 5;

    document.getElementById("infoText").innerText = "Oyun Basladi!";
    document.getElementById("secretNumber").innerText = secretNumber;

    showInfo();
}

function endGame(){
        document.getElementById("timeLimit").innerText = 0;
        document.getElementById("inputNumber").disabled = true;
        document.getElementById("guessButton").disabled = true;
        document.getElementById("infoText").innerText = "Oyun Sona Erdi!";
        clearInterval(timerFunction);
}

function timer(){
    
    document.getElementById("timeLimit").innerText = timeLimit;
    

    if(timeLimit == 0){
        endGame();
    }

    timeLimit--;
}






function resetTime(){
    timeLimit = 30; 
}

function getRandomNumber(maxValue){
    let num = Math.floor((Math.random() * maxValue) + 1);
    return num;
}

function showInfo(){
    document.getElementById("remAttempts").innerText = remainingAttempts;
    document.getElementById("level").innerText = level;
    document.getElementById("secretNumber").innerText = secretNumber;
}


function guessNumber(){
    var guessedNumber = document.getElementById("inputNumber").value;
    
    if(guessedNumber == secretNumber){
        maxNumber += 10;
        remainingAttempts = 5;
        level +=1;
        secretNumber = getRandomNumber(maxNumber);
        resetTime();
        
    }
    else if(guessedNumber < secretNumber){
        document.getElementById("infoText").innerText = "Lutfen daha buyuk bir deger girin!";
       
        remainingAttempts--;

        if(remainingAttempts == 0){
            showInfo();
            endGame();
        }
    }
    else{
        document.getElementById("infoText").innerText = "Lutfen daha kucuk bir deger girin!";
        
        remainingAttempts--;

        if(remainingAttempts == 0){
            showInfo();
            endGame();
        }

        
    }

    showInfo();
    
}










