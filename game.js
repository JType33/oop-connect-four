import { a } from "./a.js";
import { b } from './b.js';
import { RowWinInspector } from './row-win-inspector.js';
import { DiagonalWinInspector } from './diagonal-win-inspector.js'
export class Game {
    constructor(playerOneName, playerTwoName){
        this.playerOneName = playerOneName;
        this.playerTwoName = playerTwoName;
        this.currentPlayer = 1;
        this.winnerNumber = 0;
        this.columns = [
                    new a(),
                    new a(),
                    new a(),
                    new a(),
                    new a(),
                    new a(),
                    new a(),
        ]
    }
    checkForRowWin() {
        if (this.winnerNumber === 0) {
            for (let i = 0; i < 4; i++) {
            let columnGroupIsWin = RowWinInspector.inspect(this.columns.slice(i,i+4));
            if (columnGroupIsWin) {this.winnerNumber = columnGroupIsWin; break;}
            }
        }
    }
    checkForDiagonalWin() {
        if (this.winnerNumber === 0) {
            for (let i = 0; i < 4; i++) {
            let columnGroupIsWin = DiagonalWinInspector.inspect(this.columns.slice(i,i+4));
            if (columnGroupIsWin) {this.winnerNumber = columnGroupIsWin; break;}
            }
        }
    }
    checkForColumnWin() {
        this.columns.forEach(column => {
            const winNumber = b.a(column);
            if (winNumber === 1 || winNumber === 2) return this.winnerNumber = winNumber;
        });
    }
    playInColumn(columnIdx) {
        this.columns[columnIdx].c(this.currentPlayer);
        if (this.currentPlayer === 1) {this.currentPlayer = 2;}
        else if (this.currentPlayer === 2) {this.currentPlayer = 1;}
        this.checkForTie();
        this.checkForColumnWin();
        this.checkForRowWin();
        this.checkForDiagonalWin();
    }
    getName(){
        if (this.winnerNumber === 3) return `${this.playerOneName} ties with ${this.playerTwoName}!`;
        if (this.winnerNumber === 1) return `${this.playerOneName} wins!`;
        if (this.winnerNumber === 2) return `${this.playerTwoName} wins!`;
        return `${this.playerOneName} vs ${this.playerTwoName}`;
    }
    getTokenAt(rowIdx, columnIdx){
       return this.columns[columnIdx].d(rowIdx);
    }
    isColumnFull(columnIdx){
        if (this.winnerNumber === 1 || this.winnerNumber === 2) return true;
        return this.columns[columnIdx].b();
    }
    checkForTie() {
        if (this.columns.every(column => column.b())) return this.winnerNumber = 3;
    }
}
