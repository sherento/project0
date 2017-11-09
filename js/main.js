console.log("Tic Tac Toe");


  const gameBoard = [

    ['1', '2', '3'],
    ['4', '5', '6'],
    ['7', '8', '9']

  ];
  $(".X").hide();
  $(".O").hide();

  let playerTurn = true;
  let gameOver = false;

    $('.square').on('click', function() {
      if (gameOver === false) {
        if ( playerTurn === true && gameBoard[$(this).data('array')][$(this).data('index')] !== 'X' && gameBoard[$(this).data('array')][$(this).data('index')] !==  'O' ) {
        player1($(this).data('array'), $(this).data('index'));
        $(this).append($(`<div class="X">
          <div class="cross slash1"></div>
          <div class="cross slash2"></div>
          </div>`));
        } else if (playerTurn === false && gameBoard[$(this).data('array')][$(this).data('index')] !== 'X' && gameBoard[$(this).data('array')][$(this).data('index')] !==  'O'){
        player2($(this).data('array'), $(this).data('index'));
        $(this).append($(`<div class="O">
            <svg id="round" class="noughts" width="120" height="120">
            <circle cx="60" cy="60" r="40" stroke-width="15"/>
            </div>`))
        }
      }
      console.log('clicked');

    });

    const player1 = function( array, index ) {
      if ( playerTurn ) {

          if ( gameBoard[array][index] !== 'X' && gameBoard[array][index] !== 'O' ) {
            gameBoard[array][index] = 'X';

            playerTurn = false;
            winner();

          } else {
            console.log("Square taken, please try another one!");
          }
      } else {
        console.log("It is not your turn!");
        playerTurn = false;
      }
    };

    const player2 = function( array, index ) {
      if ( playerTurn === false ) {

        if ( gameBoard[array][index] !== 'X' && gameBoard[array][index] !== 'O' ) {
          gameBoard[array][index] = 'O';

          playerTurn = true;
          winner();
        } else {
          console.log("Square taken, please try another one!");
        }
      } else {
      console.log("It is not your turn!");
      playerTurn = true;
      }
    };

  const winnerNotification = function(player) {
    let notification = $(`<div class='notification'><p>Winner!</br>${player}</p></div>`);
    $("body").append(notification);
  };

  const winner = function() {

        if (gameBoard[0][0] === gameBoard[0][1] && gameBoard[0][2] === gameBoard[0][1]) {
            if (gameBoard[0][0] === 'X') {
          console.log(`player 1 wins!`);
          gameOver = true;
          winnerNotification('player 1');
            } else {
          console.log(`player 2 wins`);
          gameOver = true;
          winnerNotification('player 2');
            }

        } else if (gameBoard[0][0] === gameBoard[1][1] && gameBoard[2][2] === gameBoard[1][1]) {
            if (gameBoard[0][0] === 'X') {
          console.log(`player 1 wins!`);
          gameOver = true;
          winnerNotification('player 1');
            } else {
          console.log(`player 2 wins`);
          gameOver = true;
          winnerNotification('player 2');
            }

        } else if (gameBoard[0][0] === gameBoard[1][0] && gameBoard[2][0] === gameBoard[1][0]) {
            if (gameBoard[0][0] === 'X') {
          console.log(`player 1 wins!`);
          gameOver = true;
          winnerNotification('player 1');
            } else {
          console.log(`player 2 wins`);
          gameOver = true;
          winnerNotification('player 2');
            }

        } else if (gameBoard[0][1] === gameBoard[1][1] && gameBoard[2][1] === gameBoard[1][1]) {
            if (gameBoard[0][1] === 'X') {
          console.log(`player 1 wins!`);
          gameOver = true;
          winnerNotification('player 1');
            } else {
          console.log(`player 2 wins`);
          gameOver = true;
          winnerNotification('player 2');
            }

        } else if (gameBoard[0][2] === gameBoard[1][2] && gameBoard[2][2] === gameBoard[1][2]) {
            if (gameBoard[0][2] === 'X') {
          console.log(`player 1 wins!`);
          gameOver = true;
          winnerNotification('player 1');
            } else {
          console.log(`player 2 wins`);
          gameOver = true;
          winnerNotification('player 2');
            }

        } else if (gameBoard[0][2] === gameBoard[1][1] && gameBoard[2][0] === gameBoard[1][1]) {
            if (gameBoard[0][2] === 'X') {
          console.log(`player 1 wins!`);
          gameOver = true;
          winnerNotification('player 1');
            } else {
          console.log(`player 2 wins`);
          gameOver = true;
          winnerNotification('player 2');
            }

        } else if (gameBoard[1][0] === gameBoard[1][1] && gameBoard[1][2] === gameBoard[1][1]) {
            if (gameBoard[1][0] === 'X') {
          console.log(`player 1 wins!`);
          gameOver = true;
          winnerNotification('player 1');
            } else {
          console.log(`player 2 wins`);
          gameOver = true;
          winnerNotification('player 2');
            }

        } else if (gameBoard[2][0] === gameBoard[2][1] && gameBoard[2][2] === gameBoard[2][1]) {
            if (gameBoard[2][0] === 'X') {
          console.log(`player 1 wins!`);
          gameOver = true;
          winnerNotification('player 1');
            } else {
          console.log(`player 2 wins`);
          gameOver = true;
          winnerNotification('player 2');
            }
        }
  };
