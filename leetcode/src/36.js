/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function(board) {
    const checkCol = (r, c) => {
        for (let i=0;i<9;i++) {
            if (i !== r && board[i][c] === board[r][c]) { 
                return false 
            }
        }
        return true
    }

    const checkRow = (r, c) => {
        for (let i=0;i<9;i++) {
            if (i !== c && board[r][i] === board[r][c]) { 
                return false 
            }
        }
        return true
    }

    const checkSquare = (r, c) => {
        const arr = []
        for (let i=0;i<3;i++) {
            for (let j=0;j<3;j++) {
                if (board[r+i][c+j] !== '.') { arr.push(board[r+i][c+j]) }
            }
        }
        const set = new Set(arr)
        return set.size === arr.length
    }

    for (let i=0;i<9;i++) {
        for (let j=0;j<9;j++) {
            if (board[i][j] === "." ) { continue }
            if (!checkCol(i, j) || !checkRow(i, j)) { return false }
        }
    }

    for (let i=0;i<3;i++) {
        for (let j=0;j<3;j++) {
            if (!checkSquare(i*3, j*3)) { return false }
        }
    }

    return true
};