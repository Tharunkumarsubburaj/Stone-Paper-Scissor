let randomValue = Math.random();
let computerValue = '';
let Result = '';
let youWon = 0;
let youTie = 0;
let youLost = 0;
let won = document.getElementById('won');
let tie = document.getElementById('tie');
let lost = document.getElementById('lost');
let player = document.getElementById('yourmove');
let computer = document.getElementById('computerpick');
let result = document.getElementById('result');




//tells the computer moves.
function computerMove()
{
    if(randomValue <= 1/3)
    {
        computerValue = 'Rock';
    }
    else if(randomValue <= 2/3)
    {
        computerValue = 'Paper';
    }
    else
    {
        computerValue = 'Scissor';
    } 
}

//final output of the game.
function playerCalculation(playerMove)
{
    if(playerMove === 'Rock')
    {
        if(computerValue === 'Rock')
        {
            Result = 'You tie';
        }
        else if(computerValue === 'Paper')
        {
            Result = 'You lost';
        }
        else
        {
            Result = 'You won';
        }  
    }
    if(playerMove === 'Paper')
    {
        if(computerValue === 'Rock')
        {
            Result = 'You won';
        }
        else if(computerValue === 'Paper')
        {
            Result = 'You tie';
        }
        else
        {
            Result = 'You lost';
        }  
    }
    if(playerMove === 'Scissor')
    {
        if(computerValue === 'Rock')
        {
            Result = 'You lost';
        }
        else if(computerValue === 'Paper')
        {
            Result = 'You won';
        }
        else
        {
            Result = 'You tie';
        }  
    }
    console.log(Result);
    if(Result == 'You won')
    {
        youWon = youWon + 1;
    }
    if(Result === 'You tie')
    {
        youTie = youTie + 1;
    }
    if(Result === 'You lost')
    {
        youLost = youLost + 1;
    }
    won.innerHTML = youWon;
    tie.innerHTML = youTie;
    lost.innerHTML = youLost;
    computer.innerHTML = computerValue;
    player.innerHTML = playerMove;
    result.innerHTML = Result;



}

function reset()
{
    won.innerHTML = 0;
    tie.innerHTML = 0;
    lost.innerHTML = 0;
    computer.innerHTML = 'None';
    player.innerHTML = 'None';
    result.innerHTML = 'None';
    alert(`Value Reset Sucessfull`);
}