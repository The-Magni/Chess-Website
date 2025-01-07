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

class Knight extends Piece {
    constructor(white) {
        super(white);
    }
    canMove(start, end) {
        if (end.piece.white === this.white) {
            return false;
        }
        const x = Math.abs(start.row - end.row);
        const y = Math.abs(start.col - end.col);
        return (x * y === 2);
    }
}

class Rook extends Piece {
    constructor(white) {
        super(white);
    }
    canMove(board, start, end) {
        if (end.piece && (end.piece.white === this.white)) {
            return false;
        }
        if (start.row === end.row) {
            if (start.col < end.col) {
                for (let i = start.col + 1; i < end.col; i++) {
                    if (board.grid[start.row][i].piece !== null) {
                        return false;
                    }
                }
                return true;
            } else {
                for (let i = end.col + 1; i < start.col; i++) {
                    if (board.grid[start.row][i].piece !== null) {
                        return false;
                    }
                }
                return true;
            }
        }
        else if (start.col === end.col) {
            if (start.row < end.row) {
                for (let i = start.row + 1; i < end.row; i++) {
                    if (board.grid[i][start.col].piece !== null) {
                        return false;
                    }
                }
                return true;
            } else {
                for (let i = end.row + 1; i < start.row; i++) {
                    if (board.grid[i][start.col].piece !== null) {
                        return false;
                    }
                }
                return true
            }
        }
        else {
            return false;
        }
    }
}

class Bishop extends Piece {

}

class Queen extends Piece {

}

class Pawn extends Piece {

}










// implement logic for the square and board
export class Square {
    constructor(row, col, piece=null) {
        this._row = row;
        this._col = col;
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
                rowArray.push(new Square(i, j));
            }
            grid.push(rowArray);
        }
        return grid;
    }
    resetBoard() {
        this.grid[0][0] = new Square(0, 0, new Rook(true));
        this.grid[0][1] = new Square(0, 1, new Knight(true));
        this.grid[0][2] = new Square(0, 2, new Bishop(true));
        this.grid[0][3] = new Square(0, 3, new Queen(true));
        this.grid[0][4] = new Square(0, 4, new King(true));
        this.grid[0][5] = new Square(0, 5, new Bishop(true));
        this.grid[0][6] = new Square(0, 6, new Knight(true));
        this.grid[0][7] = new Square(0, 7, new Rook(true));
        for (let i = 0; i < 8; i++) {
            this.grid[1][i] = new Square(1, i, new Pawn(true));
        }
        for (let i = 2; i <= 5; i++) {
            for (let j = 0; j < 8; j++) {
                this.grid[i][j] = new Square(i, j);
            }
        }
        this.grid[7][0] = new Square(7, 0, new Rook(false));
        this.grid[7][1] = new Square(7, 1, new Knight(false));
        this.grid[7][2] = new Square(7, 2, new Bishop(false));
        this.grid[7][3] = new Square(7, 3, new Queen(false));
        this.grid[7][4] = new Square(7, 4, new King(false));
        this.grid[7][5] = new Square(7, 5, new Bishop(false));
        this.grid[7][6] = new Square(7, 6, new Knight(false));
        this.grid[7][7] = new Square(7, 7, new Rook(false));
        for (let i = 0; i < 8; i++) {
            this.grid[6][i] = new Square(6, i, new Pawn(false));
        }
    }
}