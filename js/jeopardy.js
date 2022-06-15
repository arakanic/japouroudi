class GameBoard {
    constructor(gameData) {
        this._ = 
        this._ = 
        this._ = 
    }
    testCall() {

    }
    toDOM() {

    }
}

function enterInput() {

}

function assessInput() {

}

function changeDisplay() {

}

function populate() {
    const url = ``

    fetch(url)
        .then(res => res.json)
        .then(data => {
            console.log(data)
        })
        .catch(err => {
            console.log(`error! ${err}`)
        })
}