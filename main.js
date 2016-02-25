'use strict';
var i = 1;
var boxArr = [];
var xArr = [];
var oArr = [];

var boxes = document.getElementById('boxes');

document.addEventListener('DOMContentLoaded', init);

function init() {
  console.log(i);
  boxes.addEventListener('click', onClick);
  document.getElementById('reset').addEventListener('click', reset);
}

function playerTurn() {
  if(i >= 9) {
    document.getElementById('draw').style.display = 'block';
    document.getElementById('X').style.display = 'none';
    document.getElementById('O').style.display = 'none';
    boxes.removeEventListener('click', onClick);
    return null;
  }
  else if(i % 2 === 0){ //x turn
    
    return 0;
  }

  else if(i % 2 != 0) { //o turn
    
    return 1;
  }

}

function onClick() {

  var whoseTurn = playerTurn();
  var boxNum = event.target.id.slice(-1);
  var boxClick = event.target;

  if(boxArr.indexOf(boxNum) === -1) {
  boxArr.push(boxNum);
    if (whoseTurn === 0) {
      boxClick.innerHTML = 'X';
      xArr.push(boxNum);
      document.getElementById('X').style.display = 'none';
      document.getElementById('O').style.display = 'block';
      winDetection();
      i += 1;
    }
    else if(whoseTurn === 1) {
      boxClick.innerHTML = 'O';
      oArr.push(boxNum);
      console.log(oArr);
      document.getElementById('X').style.display = 'block';
      document.getElementById('O').style.display = 'none';
      winDetection();
      i += 1;
    }
  }  
console.log(i);
}


function winDetection() {
 
  if((xArr.indexOf('1') != -1 && xArr.indexOf('2') !=-1 && xArr.indexOf('3') != -1)
    ||(xArr.indexOf('4') != -1 && xArr.indexOf('5') !=-1 && xArr.indexOf('6') != -1)
    ||(xArr.indexOf('7') != -1 && xArr.indexOf('8') !=-1 && xArr.indexOf('9') != -1)
    ||(xArr.indexOf('1') != -1 && xArr.indexOf('4') !=-1 && xArr.indexOf('7') != -1)
    ||(xArr.indexOf('2') != -1 && xArr.indexOf('5') !=-1 && xArr.indexOf('8') != -1)
    ||(xArr.indexOf('3') != -1 && xArr.indexOf('6') !=-1 && xArr.indexOf('9') != -1)
    ||(xArr.indexOf('1') != -1 && xArr.indexOf('5') !=-1 && xArr.indexOf('9') != -1)
    ||(xArr.indexOf('3') != -1 && xArr.indexOf('5') !=-1 && xArr.indexOf('7') != -1)) {
    document.getElementById('X').style.display = 'none';
    document.getElementById('O').style.display = 'none';
    document.getElementById('winX').style.display = 'block';
    boxes.removeEventListener('click', onClick);
  };

  if((oArr.indexOf('1') != -1 && oArr.indexOf('2') !=-1 && oArr.indexOf('3') != -1)
    ||(oArr.indexOf('4') != -1 && oArr.indexOf('5') !=-1 && oArr.indexOf('6') != -1)
    ||(oArr.indexOf('7') != -1 && oArr.indexOf('8') !=-1 && oArr.indexOf('9') != -1)
    ||(oArr.indexOf('1') != -1 && oArr.indexOf('4') !=-1 && oArr.indexOf('7') != -1)
    ||(oArr.indexOf('2') != -1 && oArr.indexOf('5') !=-1 && oArr.indexOf('8') != -1)
    ||(oArr.indexOf('3') != -1 && oArr.indexOf('6') !=-1 && oArr.indexOf('9') != -1)
    ||(oArr.indexOf('1') != -1 && oArr.indexOf('5') !=-1 && oArr.indexOf('9') != -1)
    ||(oArr.indexOf('3') != -1 && oArr.indexOf('5') !=-1 && oArr.indexOf('7') != -1)) {
    document.getElementById('X').style.display = 'none';
    document.getElementById('O').style.display = 'none';
    document.getElementById('winO').style.display = 'block';
    boxes.removeEventListener('click', onClick);
  };
}

function reset() {
  window.location.reload();
}





















