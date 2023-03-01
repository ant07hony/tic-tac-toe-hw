/*----- constants -----*/

// 1.1
const colors = {
    'null': 'white',
    'Player 1': 'red',
    'Player -1': 'black',
}
// 1.2 winning conditions
const winCombination = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
]



/*----- state variables -----*/
// 2.1
let boardEl = []


// 2.2
let playerTurn = 1 //tracks whose turn it is
let winner = 'null' //represent 3 possibilities - player won, a tie, game in play


/*----- cached elements  -----*/

const resetBtn = document.querySelector('button')


// 3.1 
const squares = document.querySelectorAll('.square')


squares.forEach(function(square){
    square.addEventListener('click', handleClick)
})


/*----- event listeners -----*/

function handleClick(evt) {
    if (playerTurn === 1){
        evt.target.innerHTML = 'X'
        playerTurn = -1
        evt.target.removeEventListener('click',handleClick)
    } else if (playerTurn === -1){
        evt.target.innerHTML = 'O'
        playerTurn = 1
        evt.target.removeEventListener('click',handleClick)
    }

    

    
    console.log('test handleClick')
}


/*----- functions -----*/

//function for game initialization
//4.1.1
function init() {
    boardEl.setContent = 'null'
    boardEl = [
        'null', 'null', 'null', 'null', 'null',
        'null', 'null', 'null', 'null',
        ]
    playerTurn = 1

    //changePlayer()
    winner = 'null'



   
}

//function to reset game 
function resetGame() {
    resetBtn.addEventListener('click', function(){
    document.getElementById('square').reset()

        console.log('resetGame')

    })
    }
    



// function checkWinner() {

//     for( let i = 0; i < winCombination.length; i++){
//         if ( 1 === winCombination[i]){
//             console.log('winner')
//         }

//     }

// }





init()