function createBoard() {
    let ChessTable = document.createElement('table');
    for (let i = 0; i < 8; i++) {
        let tr = document.createElement('tr');
        for (let j = 0; j < 8; j++) {
            let td = document.createElement('td');
            if ((i + j) % 2 == 0) {
                td.setAttribute('class', 'cell whitecell');
                tr.appendChild(td);
            } else {
                td.setAttribute('class', 'cell blackcell')
                tr.appendChild(td);
            }
            ChessTable.appendChild(tr);
        }
    }
    document.querySelector('#board').appendChild(ChessTable);
}


document.addEventListener('DOMContentLoaded', function() {
    createBoard();
})