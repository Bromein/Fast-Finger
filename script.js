const resetButton = document.querySelector('.reset');
const player1Score = document.querySelector('.p1score');
const player2Score = document.querySelector('.p2score');
let playTo = document.querySelector('#playto');
let gameOver = false;
let p1score = 0;
let p2score = 0;


const reset = () => {
  gameOver = false;
  p1score = 0;
  p2score = 0;
  playTo.value = 5;
  player1Score.parentElement.classList.remove('winner');
  player2Score.parentElement.classList.remove('winner');
  player1Score.parentElement.classList.remove('loser');
  player2Score.parentElement.classList.remove('loser');
  player1Score.innerText = p1score;
  player2Score.innerText = p2score;

}

const setPlayTo = (e) => {
  playTo.value = e.target.value;
  console.log(playTo.value);
}

const scoreUpdate = (e) => {
  debugger;


  if (e.key === "z" && !gameOver) {
    p1score++;
    player1Score.innerText = p1score;

    if (p1score === Number(playTo.value)) {
      gameOver = true;
      player1Score.parentElement.classList.add('winner');
      player2Score.parentElement.classList.add('loser');
    }
  } else if (e.key === 'm' && !gameOver) {
    p2score++;
    player2Score.innerText = p2score;
    if (p2score === Number(playTo.value)) {
      gameOver = true;
      player2Score.parentElement.classList.add('winner');
      player1Score.parentElement.classList.add('loser');
    }
  }
}

//reset listeners
resetButton.addEventListener('click', reset);
document.addEventListener('keyup', (e) => {
  if (e.key === 'r') {
    reset();
  }
});

//play listeners
playTo.addEventListener('change', setPlayTo);
document.addEventListener('keyup', scoreUpdate);