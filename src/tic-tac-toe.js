class TicTacToe {
    constructor() {
        this.playerSymbol = 'x';
        this.field = {
            0: {
                0: '-',
                1: '-',
                2: '-'
            },
            1: {
                0: '-',
                1: '-',
                2: '-'
            },
            2: {
                0: '-',
                1: '-',
                2: '-'
            }
        }
    }

    getCurrentPlayerSymbol() {
        return this.playerSymbol;
    }

    nextTurn(rowIndex, columnIndex) {
        if (this.field[rowIndex][columnIndex] === '-'){
            this.field[rowIndex][columnIndex] = this.playerSymbol;

            (this.playerSymbol === 'x') ? this.playerSymbol = 'o': this.playerSymbol = 'x';
        }
    }

    isFinished() {
       return (this.getWinner() || this.isDraw() || this.noMoreTurns()) ? true : false;
    }

    getWinner() {

        if ((this.field[0][0] === 'x' && this.field[0][1] === 'x' && this.field[0][2] === 'x') ||
            (this.field[1][0] === 'x' && this.field[1][1] === 'x' && this.field[1][2] === 'x') ||
            (this.field[2][0] === 'x' && this.field[2][1] === 'x' && this.field[2][2] === 'x') ||
            (this.field[0][0] === 'x' && this.field[1][0] === 'x' && this.field[2][0] === 'x') ||
            (this.field[0][1] === 'x' && this.field[1][1] === 'x' && this.field[2][1] === 'x') ||
            (this.field[0][2] === 'x' && this.field[1][2] === 'x' && this.field[2][2] === 'x') ||
            (this.field[0][0] === 'x' && this.field[1][1] === 'x' && this.field[2][2] === 'x') ||
            (this.field[2][0] === 'x' && this.field[1][1] === 'x' && this.field[0][2] === 'x')) {

            return 'x';

        } else if ((this.field[0][0] == 'o' && this.field[0][1] == 'o' && this.field[0][2] == 'o') ||
            (this.field[1][0] == 'o' && this.field[1][1] == 'o' && this.field[1][2] == 'o') ||
            (this.field[2][0] == 'o' && this.field[2][1] == 'o' && this.field[2][2] == 'o') ||
            (this.field[0][0] == 'o' && this.field[1][0] == 'o' && this.field[2][0] == 'o') ||
            (this.field[0][1] == 'o' && this.field[1][1] == 'o' && this.field[2][1] == 'o') ||
            (this.field[0][2] == 'o' && this.field[1][2] == 'o' && this.field[2][2] == 'o') ||
            (this.field[0][0] == 'o' && this.field[1][1] == 'o' && this.field[2][2] == 'o') ||
            (this.field[2][0] == 'o' && this.field[1][1] == 'o' && this.field[0][2] == 'o')) {

            return 'o';

        } else {
            return null;
        }
    }

    noMoreTurns() {
        return (this.field[0][0] !== '-' && this.field[0][1] !== '-' && this.field[0][2] !== '-' &&
                this.field[1][0] !== '-' && this.field[1][1] !== '-' && this.field[1][2] !== '-' &&
                this.field[2][0] !== '-' && this.field[2][1] !== '-' && this.field[2][2] !== '-') ? true : false;
    }

    isDraw() {
        //horizontal
        if ((this.field[0][0] === 'x' && this.field[0][1] === 'x' && this.field[0][2] === 'x') ||
            (this.field[1][0] === 'x' && this.field[1][1] === 'x' && this.field[1][2] === 'x') ||
            (this.field[2][0] === 'x' && this.field[2][1] === 'x' && this.field[2][2] === 'x') ||
        //vertical
            (this.field[0][0] === 'x' && this.field[1][0] === 'x' && this.field[2][0] === 'x') ||
            (this.field[0][1] === 'x' && this.field[1][1] === 'x' && this.field[2][1] === 'x') ||
            (this.field[0][2] === 'x' && this.field[1][2] === 'x' && this.field[2][2] === 'x') ||
        //diagonal
            (this.field[0][0] === 'x' && this.field[1][1] === 'x' && this.field[2][2] === 'x') ||
            (this.field[2][0] === 'x' && this.field[1][1] === 'x' && this.field[0][2] === 'x')) {

            return false;

        //horizontal
        } else if ((this.field[0][0] == 'o' && this.field[0][1] == 'o' && this.field[0][2] == 'o') ||
            (this.field[1][0] == 'o' && this.field[1][1] == 'o' && this.field[1][2] == 'o') ||
            (this.field[2][0] == 'o' && this.field[2][1] == 'o' && this.field[2][2] == 'o') ||
        //vertical
            (this.field[0][0] == 'o' && this.field[1][0] == 'o' && this.field[2][0] == 'o') ||
            (this.field[0][1] == 'o' && this.field[1][1] == 'o' && this.field[2][1] == 'o') ||
            (this.field[0][2] == 'o' && this.field[1][2] == 'o' && this.field[2][2] == 'o') ||
        //diagonal
            (this.field[0][0] == 'o' && this.field[1][1] == 'o' && this.field[2][2] == 'o') ||
            (this.field[2][0] == 'o' && this.field[1][1] == 'o' && this.field[0][2] == 'o')){

                return false;
        }

        return this.noMoreTurns();
    }

    getFieldValue(rowIndex, colIndex) {
        return (this.field[rowIndex][colIndex] === '-') ? null : this.field[rowIndex][colIndex];
    }
}

module.exports = TicTacToe;
