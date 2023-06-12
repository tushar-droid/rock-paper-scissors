function getComputerChoice(){
    choices= ['Rock', 'Paper', 'Scissors'];
    val= Math.floor(Math.random()*3);
    console.log(choices[val]);
}

getComputerChoice();