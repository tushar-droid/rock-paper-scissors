function getComputerChoice(){
    choices= ['rock', 'paper', 'scissors'];
    val= Math.floor(Math.random()*3);
    return choices[val];
}

function playRound(PlayerSelection, ComputerSelection){
    console.log('Computer Choice: '+ ComputerSelection);
    console.log('PlayerSelection: '+ PlayerSelection);
    if(PlayerSelection=='rock'){
        if(ComputerSelection=='paper'){
            return 'You Loose! Paper beats Rock';
        }
        else if(ComputerSelection=='rock'){
            return 'It is a Tie';
        }
        else{
            return 'You Won! Rock beats Scissors';
        }
    }
    if(PlayerSelection=='paper'){
        if(ComputerSelection=='scissors'){
            return 'You Loose! scissors beats paper';
        }
        else if(ComputerSelection=='paper'){
            return 'It is a Tie';
        }
        else{
            return 'You Won! paper beats rock';
        }
    }
    if(PlayerSelection=='scissors'){
        if(ComputerSelection=='rock'){
            return 'You Loose! rock beats scissors';
        }
        else if(ComputerSelection=='scissors'){
            return 'It is a Tie';
        }
        else{
            return 'You Won! scissors beats paper';
        }
    }
}



function game(){
    for(let i=0;i<5;i++){
        let PlayerSelection=prompt("Input Your Choice");
        PlayerSelection= PlayerSelection.toLowerCase();
        let ComputerSelection= getComputerChoice();
        console.log(playRound(PlayerSelection, ComputerSelection));
    }
}

game();