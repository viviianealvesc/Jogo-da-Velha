const xClass = 'x'
const oClass = 'o'
let xturn

const cells = document.querySelectorAll('.cell')
const board = document.querySelector('#board')

const gameEndMessage = document.querySelector('[data-game-end-message]')
const gameEndElement = document.querySelector('gameEndElement')

const restartButton = document.querySelector('restarButton')

startGame()

function startGame() {
    xturn = true
    board.classList.add('x')

    cells.forEach(cell => {
        cell.classList.remove(xClass)
        cell.classList.remove(oClass)
        board.classList.replace('o', 'x')

        cell.addEventListener('click', handleClick, { once: true })
    })

    restartButton.addEventListener('click', startGame)
    document.querySelector('main').classList.remove('end')
}

function handleClick(e) {
    let cell = e.target
    let turnClass = xturn ? xClass : oClass

    placeMark(cell, turnClass)
    swapTurn()
    setBoardHover()
    
}

function placeMark(cell, turnClass) {
    cell.classList.add(turnClass)
}

function swapTurn() {
    xturn = !xturn
}

function setBoardHover() {
    xturn ? board.classList.replace('o', 'x') : board.classList.replace('x', 'o')
}

/*Parei no minuto 10:51 do video*/