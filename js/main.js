console.log("Tic Tac Toe");


  const gameBoard = [

    ['1', '2', '3'],
    ['4', '5', '6'],
    ['7', '8', '9']

  ];

  let playerTurn = true;

    $('.square').on('click', function() {

      if ( playerTurn === true ) {
      player1($(this).data('array'), $(this).data('index'));
      } else {
      player2($(this).data('array'), $(this).data('index'));
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

  const winner = function() {

    if (gameBoard[0][0] === gameBoard[0][1] && gameBoard[0][2] === gameBoard[0][1]) {
        if (gameBoard[0][0] === 'X') {
      console.log(`player 1 wins!`);
        } else {
      console.log(`player 2 wins`);
        }

    } else if (gameBoard[0][0] === gameBoard[1][1] && gameBoard[2][2] === gameBoard[1][1]) {
        if (gameBoard[0][0] === 'X') {
      console.log(`player 1 wins!`);
        } else {
      console.log(`player 2 wins`);
        }

    } else if (gameBoard[0][0] === gameBoard[1][0] && gameBoard[2][0] === gameBoard[1][0]) {
        if (gameBoard[0][0] === 'X') {
      console.log(`player 1 wins!`);
        } else {
      console.log(`player 2 wins`);
        }

    } else if (gameBoard[0][1] === gameBoard[1][1] && gameBoard[2][1] === gameBoard[1][1]) {
        if (gameBoard[0][1] === 'X') {
      console.log(`player 1 wins!`);
        } else {
      console.log(`player 2 wins`);
        }

    } else if (gameBoard[0][2] === gameBoard[1][2] && gameBoard[2][2] === gameBoard[1][2]) {
        if (gameBoard[0][2] === 'X') {
      console.log(`player 1 wins!`);
        } else {
      console.log(`player 2 wins`);
        }

    } else if (gameBoard[0][2] === gameBoard[1][1] && gameBoard[2][0] === gameBoard[1][1]) {
        if (gameBoard[0][2] === 'X') {
      console.log(`player 1 wins!`);
        } else {
      console.log(`player 2 wins`);
        }

    } else if (gameBoard[1][0] === gameBoard[1][1] && gameBoard[1][2] === gameBoard[1][1]) {
        if (gameBoard[1][0] === 'X') {
      console.log(`player 1 wins!`);
        } else {
      console.log(`player 2 wins`);
        }

    } else if (gameBoard[2][0] === gameBoard[2][1] && gameBoard[2][2] === gameBoard[2][1]) {
        if (gameBoard[2][0] === 'X') {
      console.log(`player 1 wins!`);
        } else {
      console.log(`player 2 wins`);
        }
    }
  };
