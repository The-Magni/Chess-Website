class Piece {
    constructor(is_white, x, y) {
        this.is_white = is_white;
        this.is_killed = false;
        this.x = x;
        this.y = y;
    }
    kill() {
        this.is_killed = true;
    }
    setPos(x, y) {
        this.x = x;
        this.y = y;
    }
}

class Square {
    constructor(x, y, is_white) {
        this.is_white = is_white
        this.x = x;
        this.y = y;
    }
}

class King extends Piece {
    possiblePos() {
        return [
            [this.x+1, this.y],
            [this.x, this.y+1],
            [this.x-1, this.y],
            [this.x, this.y-1],
            [this.x+1, this.y+1],
            [this.x+1, this.y-1],
            [this.x-1, this.y+1],
            [this.x-1, this.y-1]
        ]
    }
}