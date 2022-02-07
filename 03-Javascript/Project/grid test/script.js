const hello = document.querySelector('.hello');
const hellos = document.querySelectorAll('.hello');
const add = document.querySelector('#add');
const remove = document.querySelector('#remove');
const toggle = document.querySelector('#toggle');
const check = document.querySelector('#check');
const addAll = document.querySelector('#addAll');
const removeAll = document.querySelector('#removeAll');
add.addEventListener('click', () => {
    hello.classList.add('bg');
})
remove.addEventListener('click', () => {
    hello.classList.remove('bg');
})
toggle.addEventListener('click', () => {
    hello.classList.toggle('bg');
})
check.addEventListener('click', () => {
    hello.innerText = hello.classList.contains('bg');
})
addAll.addEventListener('click', () => {
    hello.classList.add('bg', 'bd');
})
removeAll.addEventListener('click', () => {
    hello.classList.remove('bg', 'bd', 'hello');
})
hello.addEventListener('click', () =>{
    hello.classList.add('bg');
})
//console.log(`${0%2} ${1%2} ${2%2}`);


// for (let index = 0; index < array.length / 7; index++) {
//     const element = array[index];
    
// }



let turnCounter = 0;
console.log(hellos);
hellos.forEach((hey) =>{
    let previousTurnCounter = turnCounter;
    hey.addEventListener("click", () =>{
        if(turnCounter%2 == 0 && hey.classList.contains("unlocked")){
            hey.classList.add('player1');
            hey.classList.remove('unlocked');
            turnCounter++;
        }
        else if(turnCounter%2 == 1 && hey.classList.contains("unlocked")){
            hey.classList.add('player2');
            hey.classList.remove('unlocked');
            turnCounter++;
        }

        console.log(turnCounter);
        console.log(hey);
        
        //CheckWin();
        
    })
})




class cell
{
    x;
    y;
    constructor(x,y){
        this.x = x;
        this.y = y;
    }

}

class Game{

    let array = new Int[21];
    constructor(player1Array, player2Array){
        
    }
    player1Array;
    player2Array;

    Player1Points(cell)
    {
        this.player1Array.push(cell);
        console.log(player1Array);
    }
    Player2Points(cell)
    {
        this.player2Array.push(cell);
    }



    Mapper(a){
        let y = Math.floor(a / 7);
        let x = Math.floor(a / 6);
    }


    // horizontalCheck 
    HorizontalCheck(){
for (let j = 0; j<6-3 ; j++ ){
    for (let i = 0; i<7(); i++){
        if (this.board[i][j] == player && this.board[i][j+1] == player && this.board[i][j+2] == player && this.board[i][j+3] == player){
            return true;
        }           
    }
}
}
// verticalCheck
VerticalCheck(){
for (let i = 0; i<7()-3 ; i++ ){
    for (let j = 0; j<6; j++){
        if (this.board[i][j] == player && this.board[i+1][j] == player && this.board[i+2][j] == player && this.board[i+3][j] == player){
            return true;
        }           
    }
}}
// ascendingDiagonalCheck 
UpDiagonalCheck(){
for (let i=3; i<6(); i++){
    for (let j=0; j<7()-3; j++){
        if (this.board[i][j] == player && this.board[i-1][j+1] == player && this.board[i-2][j+2] == player && this.board[i-3][j+3] == player)
            return true;
    }
}}
// descendingDiagonalCheck
DownDiagonalCheck(){
for (let i=3; i<6(); i++){
    for (let j=3; j<7(); j++){
        if (this.board[i][j] == player && this.board[i-1][j-1] == player && this.board[i-2][j-2] == player && this.board[i-3][j-3] == player)
            return true;
    }
}
}}

let testGame = new Game();
testGame.Player1Points(10);
testGame.Player1Points(12);
testGame.Player1Points(13);
testGame.Player1Points(15);

