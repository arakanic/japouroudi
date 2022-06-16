// INITIALIZE GAMEBOARD ON PAGE LOAD
initBoard()

function initBoard() {
    let board = document.getElementById("gameboard")
    const numRows = 5
    const numBoxes = 5
    // POPULATE 5 ROWS...
    for (let r = 0; r < numRows; r++) {
        let row = document.createElement('div')
        let boxValue = 200 * (r + 1)
        row.className = 'clue-row'
        //  ... OF 5 BOXES
        for (let b = 0; b < numBoxes; b++) {
            let box = document.createElement('div')
            box.className = 'clue-box'
            box.textContent = `$${boxValue}` // new-school
            // box.appendChild(document.createTextNode(`${boxValue}`)) // old-school
            box.addEventListener('click', getClue, false)
            row.appendChild(box)
        }
        board.appendChild(row)
    }
}

function getClue() {
    console.log(this.textContent)
}

// class GameBoard {
//     constructor(gameData) {
//         this._ = 
//         this._ = 
//         this._ = 
//     }
//     testCall() {

//     }
//     toDOM() {

//     }
// }

// function enterInput() {

// }

// function assessInput() {

// }

// function changeDisplay() {

// }

// function populate() {
//     const url = ``

//     fetch(url)
//         .then(res => res.json)
//         .then(data => {
//             console.log(data)
//         })
//         .catch(err => {
//             console.log(`error! ${err}`)
//         })
// }