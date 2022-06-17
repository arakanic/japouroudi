const numRows = 5
const numColumns = 5

// Initialize gameboard categories + clues on page load
initCategories()

initClues()

function initCategories() {
    let catRow = document.getElementById("category-row")
    for (let b = 0; b < numColumns; b++) {
        let box = document.createElement('div')
        box.className = 'category-box clue-box'
        catRow.appendChild(box)
    }
}
function initClues() {
    let board = document.getElementById("gameboard")
    // POPULATE 5 ROWS...
    for (let r = 0; r < numRows; r++) {
        let row = document.createElement('div')
        let boxValue = 200 * (r + 1)
        row.className = 'clue-row'
        //  ... OF 5 BOXES
        for (let b = 0; b < numColumns; b++) {
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

// Select an integer out of 18418 integers representing each Jeopardy category
const randomInt = () => Math.floor((Math.random() * 18418) + 1)

function buildCategories() {
    // url jservice.io to query category ids 
    // -> TO DO: Save to localstorage rather than simply a global variable
    // -> TO DO: Ensure each random integers is unique
    
    let requestArray = []
    
    for (let r = 1; r <= numColumns; r++) {
        this["fetchReq" + r] = fetch(`https://jservice.io/api/category?&id=${randomInt()}`).then(res => res.json())
        requestArray.push(this["fetchReq" + r])
    }
    // console.log(requestArray)
    // Collect all data once all requests are fulfilled
    const allData = Promise.all(requestArray)

    allData.then(res => console.log(res))
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
    // const fetchReq1 = fetch(`https://jservice.io/api/category?&id=${randomInt()}`).then(res => res.json)
    // const fetchReq2 = fetch(`https://jservice.io/api/category?&id=${randomInt()}`).then(res => res.json)
    // const fetchReq3 = fetch(`https://jservice.io/api/category?&id=${randomInt()}`).then(res => res.json)
    // const fetchReq4 = fetch(`https://jservice.io/api/category?&id=${randomInt()}`).then(res => res.json)
    // const fetchReq5 = fetch(`https://jservice.io/api/category?&id=${randomInt()}`).then(res => res.json)
    // requestArray.push(fetchReq1)
    // requestArray.push(fetchReq2)
    // requestArray.push(fetchReq3)
    // requestArray.push(fetchReq4)
    // requestArray.push(fetchReq5)

//     fetch(url)
//         .then(res => res.json)
//         .then(data => {
//             console.log(data)
//         })
//         .catch(err => {
//             console.log(`error! ${err}`)
//         })
// }