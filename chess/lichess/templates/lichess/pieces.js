class Piece {
    constructor(white) {
        this.white = white;
        this.kill = false;
    }
}

export class Square {
    constructor(row, col, white, piece=null) {
        this.row = row;
        this.col = col;
        this.white = white;
        this.piece = piece;
    }
}

export class Board {
    constructor() {
        this.grid = this.createBoard();
    }

    createBoard() {
        const grid = [];
        for (let i = 0; i < 8; i++) {
            const rowArray = [];
            for (let j = 0; j < 8; j++) {
                if ((i + j) % 2 === 0) {
                    rowArray.push(new Square(i, j, true));
                } else {
                    rowArray.push(new Square(i, j, false));
                }
            }
            grid.push(rowArray);
        }
        return grid;
    }
}