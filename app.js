var allImages = document.getElementsByTagName('img');
var result = document.getElementById('result');
var totalWins = document.getElementById('wins');
var totalLoses = document.getElementById('loses');
var counter = document.getElementById('counter');
var wins=0;
var loses=0;
var count = 5;


var init = setInterval(countFunc,1000);

function checkCard(num){
    var randNum = Math.floor(Math.random()*4);
    clearInterval(init);
    if(num === randNum){

        for(i=0; i<allImages.length; i++){
            allImages[i].src = 'images/king.png';
        }
        allImages[num].src = 'images/black.png';
        result.style.display = 'block';
        result.innerHTML = 'Horah! You Won';
        calcWinLose('win');
    }else{

        for(i=0; i<allImages.length; i++){
            allImages[i].src = 'images/joker.png';
        }
        allImages[randNum].src = 'images/black.png';
        result.style.display = 'block';
        result.innerHTML = 'Alas! You Lose';
        calcWinLose('lose');
    }
}
function resetGame(){
    for(i=0 ;i<allImages.length ;i++){
        allImages[i].src = 'images/back.png';
    }
    result.style.display = 'none';
    result.innerHTML = '';
    count = 5;
    counter.innerHTML = 'Counter: ' + count;
    init = setInterval(countFunc,1000);
}
function calcWinLose(matchResult){
    if(matchResult === 'win'){
        wins++;
        totalWins.innerHTML = 'Wins: ' + wins;
    }else{
        loses++;
        totalLoses.innerHTML = 'Loses: ' + loses;
    }
}
function countFunc(){
    if(count <= 0){
        clearInterval(init);
        checkCard();
    }else{
        count--;
        counter.innerHTML = 'Counter: ' + count;
    }
}