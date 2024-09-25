let secretNumber=Math.floor(Math.random() * 20) + 1
let score=20
let highscore=0
let currentStreak=0

const displayMessage=(message) => {
    document.getElementById('message').textContent=message
}

const resetGame=() => {
    score=20
    secretNumber=Math.floor(Math.random() * 20) + 1
    document.querySelector('.score').textContent=score
    document.querySelector('.guess').value=''
    displayMessage('Try the Game!')
    document.querySelector('.game_header').style.backgroundColor='#222'
    document.querySelector('div[name="number"]').textContent='?'
}

