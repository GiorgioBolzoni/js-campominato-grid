/*
al click su btn
generare 64 quadratini

al click sul quadratino lo sfondo del quadratino stesso deve diventare verde

*/


/* 
<div class="square"></div> 
*/

const btn = document.querySelector('button');

btn.addEventListener('click', function () {

    if (btn.classList.contains('btn-clicked')) return;
    //numero di quadratini da generare
    const numSquare = 100;
    // mi prendo la griglia di gioco
    const playground = document.getElementById('playground');
    //ciclo per stampare i quadratini

    for (let i = 0; i < numSquare; i++) {
        //genero quadratino
        let square = drawSquare(i, numSquare);
        // console.log(square);

        //appendo il quadratino alla griglia (playground)
        playground.append(square);
        btn.classList.add('btn-clicked');
    };
});

function drawSquare(squareIndex, numSquare) {
    squareWidth = Math.sqrt(numSquare);
    // console.log(squareWidth);
    const square = document.createElement('div');
    square.classList.add('square');
    square.style.width = `calc(100% / ${squareWidth})`;
    square.style.height = `calc(100% / ${squareWidth})`;
    square.innerHTML = squareIndex + 1;
    square.addEventListener('click', function () {
        square.classList.add('active');
        console.log(this)
        square.style.color = 'black';
    });

    return square;
};