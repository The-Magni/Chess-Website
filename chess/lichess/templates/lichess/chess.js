import { Board } from "./pieces.js"

const board = document.querySelector('#board');
const chessBoard = new Board();
chessBoard.resetBoard();

chessBoard.grid.forEach(row => {
    row.forEach(square => {
        const div = document.createElement('div');
        div.classList.add('cell');
        if ((square.row + square.col) % 2 === 0) {
            div.classList.add('whitecell');
        } else {
            div.classList.add('blackcell');
        }
        board.appendChild(div);
    });
});