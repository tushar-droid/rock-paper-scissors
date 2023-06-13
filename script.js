function getComputerChoice(){
    choices= ['rock', 'paper', 'scissors'];
    val= Math.floor(Math.random()*3);
    return choices[val];
}

function playRound(PlayerSelection, ComputerSelection){
    if(PlayerSelection=='rock'){
        if(ComputerSelection=='paper'){
            computer_score++;
            return 'COMPUTER WON! Paper beats Rock';
        }
        else if(ComputerSelection=='rock'){
            return 'It is a Tie';
        }
        else{
            player_score++;
            return 'YOU WON! Rock beats Scissors';
        }
    }
    if(PlayerSelection=='paper'){
        if(ComputerSelection=='scissors'){
            computer_score++;
            return 'COMPUTER WON! scissors beats paper';
        }
        else if(ComputerSelection=='paper'){
            return 'It is a Tie';
        }
        else{
            player_score++;
            return 'YOU WON! paper beats rock';
        }
    }
    if(PlayerSelection=='scissors'){
        if(ComputerSelection=='rock'){
            computer_score++;
            return 'COMPUTER WON! rock beats scissors';
        }
        else if(ComputerSelection=='scissors'){
            return 'It is a Tie';
        }
        else{
            player_score++;
            return 'YOU WON! scissors beats paper';
        }
    }
    if(PlayerSelection=='ch_yes' || PlayerSelection=="ch_no"){
        playagain();
    }
}

const btn = document.querySelectorAll('button');
let computer_score =0;
let player_score= 0;
btn.forEach(e =>{
    e.addEventListener('click', () =>{
        const PlayerSelection= e.className;
        const ComputerSelection= getComputerChoice();
        const win= playRound(PlayerSelection, ComputerSelection);
        printOnScreen(win);

    });
})

function printOnScreen(winner){
    const div= document.querySelector('.result');
    div.textContent= winner;
    const pl_score_holder= document.querySelector(".pscore_val");
    const comp_score_holder = document.querySelector(".cscore_val");
    pl_score_holder.textContent= player_score;
    comp_score_holder.textContent= computer_score;
    const win_string= document.createElement('h3');
    if(player_score>=5){
        const final_res= document.querySelector(".winner");
        win_string.textContent="CONGRATULATIONS YOU WON!!"
        final_res.appendChild(win_string);
        playagain();
    }
    else if(computer_score>=5){
        const final_res= document.querySelector(".winner");
        win_string.textContent="COMPUTER WON THIS TIME!!";
        final_res.appendChild(win_string);
        playagain();
    }

}



function playagain(){
    const btn = document.querySelectorAll('.choice-buttons > button');
    btn.forEach(e =>{
        e.disabled=true;
    })    
    const play_again_box= document.querySelector('.play_again');
    play_again_box.style= "display:block";
    const btn_y= document.querySelector('.ch_yes')
    const btn_n= document.querySelector('.ch_no')

    btn_y.addEventListener("click", () =>{
        location.reload();
    })

    btn_n.addEventListener("click", () =>{
        window.close();
    })


}
