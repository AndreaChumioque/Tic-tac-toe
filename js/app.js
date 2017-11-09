window.onload = function () {
  var board = document.querySelector('.board-js');
  board.addEventListener('click', addPlay);

  var resetButton = document.querySelector('#reset');
  resetButton.addEventListener('click', resetGame);
}

var centinel = true;
var playCount = 0;

function addPlay(event) {
  console.log(event);
  if (centinel) {
    event.target.className = 'play-x';
    event.target.textContent = 'X';

  } else {
    event.target.className = 'play-o';
    event.target.textContent = 'O';
  }

  playCount++;
  if (playCount >= 5) {
    checkWinner();
  }
  centinel = !centinel;
}

// var rows = document.querySelector('.board').getElementsByTagName('tr');
// console.log(rows);
// console.log(rows[0].children);

function checkWinner() {
  var parent = event.target.parentElement.children;
  console.log(parent.length);
  // var element = event.target;
  console.log(parent.index);
  // if (event.target.isSameNode(event.target.nextSibling) {

  // }
  // for (var i = 0; i < parent.length; i++) {

  // }

  // if (parent[i] == event.target) {
  //   console.log(i);
  // }
}

function resetGame(event) {
  // console.log(event);
  var cells = document.getElementsByTagName('td');
  for (var i = 0; i < cells.length; i++) {
    cells[i].textContent = '';
  }
}