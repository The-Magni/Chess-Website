class Piece {
    constructor(white) {
        this._white = white;
        this._kill = false;
    }
    get white() {
        return this._white;
    }
    set white(white) {
        this._white = white;
    } 
    get kill() {
        return this._kill;
    }
    set kill(kill=true) {
        this._kill = kill;
    }
}

class King extends Piece {
    constructor(white) {
        super(white);
        this._castlingDone = false;
    }
    get castlingDone() {
        return this._castlingDone;
    }
    set castlingDone(castlingDone) {
        this._castlingDone = castlingDone;
    }

    canMove(board, start, end) {
        if (end.piece.white == this.white) {
            return false;
        }

        const x = Math.abs(start.row - end.row);
        const y = Math.abs(start.col - end.col);
        if (x + y === 1) {
            // additional check if this move result in the king being attack
            return true;
        }
        return this.isValidCastling(board, start, end);
    }
    isValidCastling(board, start, end) {
        if (this.castlingDone) {
            return false;
        }

        // logic to check if any square is being attacked
    }
    isCastlingMove(start, end) {
        // checking if starting and ending position are correct
    }
}

export class Square {
    constructor(row, col, white, piece=null) {
        this._row = row;
        this._col = col;
        this._white = white;
        this._piece = piece;
    }
    get row() {
        return this._row;
    }
    set row(row) {
        this._row = row;
    }
    get col() {
        return this._col;
    }
    set col(col) {
        this._col = col;
    }
    get white() {
        return this._white;
    }
    set white(white) {
        this._white = white;
    }
    get piece() {
        return this._piece;
    }
    set piece(piece) {
        this._piece = piece;
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