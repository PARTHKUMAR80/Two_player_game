// change color
let generator=function(){
    newColor='#'+(Math.random()*0xFFFFFF<<0).toString(16);
    console.log(newColor);
    if (newColor.length<7){
        generator();
    }
    return newColor;
}
document.getElementById('change-color-btn').addEventListener('click',() => {
    generator();
    document.body.style.background=newColor;
})

// game logic
let player1Score=0;
let player2Score=0;
let numberOfTurns_1=0;
let numberOfTurns_2=0;
let no_of_matches_won_by_player_1=0;
let no_of_matches_won_by_player_2=0;
function randomNumber(){
    let num=Math.floor(Math.random()*6+1);
    return num;
}

let player1Btn=document.getElementById('player1-btn').addEventListener('click', () => {
    if (numberOfTurns_1===6){
        alert('Turns cannot be more than 6 for one player...');
        return;
    }
    numberOfTurns_1++;
    let number=randomNumber();
    console.log(number);
    player1Score+=number;
    changeColor(1,number);
    document.getElementById('number-span1').innerText=number;
    showScorePlayer1();
    if (numberOfTurns_1===6 && numberOfTurns_2===6){
        // setTimeout(greet,4000);
        if (player1Score===player2Score){
            document.getElementById('header').innerText="The Match Is Drawn...";
        }
        else if (player1Score>player2Score){
            no_of_matches_won_by_player_1++;
            document.getElementById('header').innerText="Player1 Won The Match...!!!";
        }
        else {
            no_of_matches_won_by_player_2++;
            document.getElementById('header').innerText="Player2 Won The Match...!!!";
        }
    }
    document.getElementById('no-of-wins-1').innerText=no_of_matches_won_by_player_1;
    document.getElementById('no-of-wins-2').innerText=no_of_matches_won_by_player_2;
})

let player2Btn=document.getElementById('player2-btn').addEventListener('click', () => {
    if (numberOfTurns_2===6){
        alert('Turns cannot be more than 6 for one player...');
        return;
    }
    numberOfTurns_2++;
    let number=randomNumber();
    console.log(number);
    changeColor(2,number);
    player2Score+=number;
    document.getElementById('number-span2').innerText=number;
    showScorePlayer2();
    if (numberOfTurns_1===6 && numberOfTurns_2===6){
        // setTimeout(greet,4000);
        if (player1Score===player2Score){
            document.getElementById('header').innerText="The Match Is Drawn...";
        }
        else if (player1Score>player2Score){
            no_of_matches_won_by_player_1++;
            document.getElementById('header').innerText="Player1 Won The Match...!!!";
        }
        else {
            no_of_matches_won_by_player_2++;
            document.getElementById('header').innerText="Player2 Won The Match...!!!";
        }
    }
    document.getElementById('no-of-wins-1').innerText=no_of_matches_won_by_player_1;
    document.getElementById('no-of-wins-2').innerText=no_of_matches_won_by_player_2;
})

function showScorePlayer1(){
    document.getElementById('empty-score-block1').innerText=player1Score + ',' +numberOfTurns_1;
}
function showScorePlayer2(){
    document.getElementById('empty-score-block2').innerText=player2Score + ',' + numberOfTurns_2;
}

function greet(){
    alert('Click Reset To Play Again...');
}

document.getElementById('reset').addEventListener('click', () => {
    player1Score=0;
    player2Score=0;
    numberOfTurns_1=0;
    numberOfTurns_2=0;
    document.getElementById('header').innerText="Lets see who wins the Game!!!";
    document.getElementById('number-span1').innerText="...";
    document.getElementById('number-span2').innerText="...";
    document.getElementById('empty-score-block1').innerText="...";
    document.getElementById('empty-score-block2').innerText="...";
    document.getElementById('empty-11').style.backgroundColor='rgb(182, 167, 167)';
    document.getElementById('empty-22').style.backgroundColor='rgb(182, 167, 167)';
})

const number_to_color=[
    {
        1:'red',
        2:'rgb(221, 74, 74)',
        3:'rgb(199, 139, 139)',
        4:'rgb(82, 187, 82)',
        5:'rgb(70, 201, 70)',
        6:'rgb(46, 219, 46)'
    }
]

function changeColor(num,number){
    if (num==1){
        document.getElementById('empty-11').style.backgroundColor=number_to_color[0][number];
    }
    else {
        document.getElementById('empty-22').style.backgroundColor=number_to_color[0][number];
    }
}