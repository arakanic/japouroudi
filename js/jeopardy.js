const numRows = 5
const numColumns = 5
let categoryArray = []
// Select an integer out of 18418 integers representing each Jeopardy category
const randomInt = () => Math.floor((Math.random() * 18418) + 1)

// Initialize gameboard categories + clues on page load
document.querySelector('button').addEventListener('click', initCategories)

function initCategories() {
    let catRow = document.getElementById("category-row")
    // Delete existing categories
    if (catRow) {
        categoryArray = []
        while (catRow.firstChild) {
            catRow.removeChild(catRow.firstChild);
        }
    }
    // Create category boxes
    for (let b = 0; b < numColumns; b++) {
        let box = document.createElement('div')
        box.className = 'category-box clue-box'
        catRow.appendChild(box)
    }
    initClues()
}

function initClues() {
    let board = document.getElementById("gameboard")
    // Delete existing clues
    let clueRows = document.querySelectorAll('.clue-row')
    clueRows.forEach(row => row.remove())

    // Create a number of rows...
    for (let r = 0; r < numRows; r++) {
        let row = document.createElement('div')
        let boxValue = 200 * (r + 1)
        row.className = 'clue-row'
        //  ... with a number of boxes
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
    buildCategories()
}

function buildCategories() {
    // url jservice.io to query category ids 
    // -> TO DO: Save to localstorage rather than simply a global variable
    // -> TO DO: Ensure each random integers is unique
    let requestArray = []
    
    for (let r = 1; r <= numColumns; r++) {
        this["fetchReq" + r] = fetch(`https://jservice.io/api/category?&id=${randomInt()}`).then(res => res.json())
        requestArray.push(this["fetchReq" + r])
    }

    // Collect all data once all requests are fulfilled
    const allData = Promise.all(requestArray)

    allData.then(res => {
        console.log(res)
        categoryArray = res
        setCategories(categoryArray)
        // setClues(categoryArray)
    })
}

function setCategories(categoryArray) {
    let element = document.getElementById('category-row')
    let children = element.children
    for (let i = 0; i < children.length; i++) {
        children[i].innerHTML = categoryArray[i].title
    }
}

// Get selected box
function getClue(event) {
    let child = event.currentTarget
    child.classList.add('selected-box')
    // Store value of box
    let boxValue = child.innerHTML.slice(1)
    // Find box index with parent
    let parent = child.parentNode
    // What tf is this .call() method?
    let index = Array.prototype.findIndex.call(parent.children, (c) => c === child)
    // Get array of clues from categoryArray for the relevant category (at box index)
    let cluesList = categoryArray[index].clues
    // Find first clue object from array that is worth value of box
    let clue = cluesList.find(obj => {
        return obj.value == boxValue
    })
    
    displayQuestion(clue, child, boxValue)
}

// function displayQuestion() {

// }