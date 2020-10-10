export class RowWinInspector {
    static inspect(columns) {
        let winCheck;
        for (let i = 0; i < 6; i++) {
            let currentTokens = [];
            columns.forEach(column => { currentTokens.push(column.getTokenAt(i)) });
            const playerInRow = (currentTokens.reduce((acc, token) => acc + token) / 4);
            const playerExists = currentTokens.every(token => token);
            if (playerExists && (playerInRow === 1 || playerInRow === 2)) {
                    winCheck = playerInRow;
            }
        }
        if (winCheck) return winCheck;
        return 0;
    }
}
