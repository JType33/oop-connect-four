export class DiagonalWinInspector {
    static inspect(columns) {
        let tokenDownArray = [];
        let tokenUpArray = [];
        let winCheck = 0;
        for (let i = 0; i < 3; i++) {
            columns.forEach((column, idx) => {
                console.log(`Token at column ${idx} and index ${i + idx} is ${column.tokens[i + idx]}, pushed to tokenDownArray`)
                tokenDownArray.push(column.tokens[i + idx]);
                console.log(`Token at column ${idx} and index ${i + (3 - idx)} is ${column.tokens[i + (3 - idx)]}, pushed to tokenUpArray`)
                tokenUpArray.push(column.tokens[i + (3 - idx)]);
            });
            console.log('Upward tokens after forEach',tokenUpArray);
            console.log('Downward tokens after forEach',tokenDownArray);
            tokenDownArray = tokenDownArray.filter(token => token);
            tokenUpArray = tokenUpArray.filter(token => token);
            console.log('Upward tokens after filter',tokenUpArray);
            console.log('Downward tokens after filter',tokenDownArray);
            const playerDownCanWin = tokenDownArray.length === 4;
            const playerUpCanWin = tokenUpArray.length === 4;
            const playerDownHasWon = tokenDownArray.every((token,x,arry) => token === arry[0]);
            const playerUpHasWon = tokenDownArray.every((token,x,arry) => token === arry[0]);
            if (playerUpCanWin && playerUpHasWon) return winCheck = tokenUpArray.reduce((acc, token) => acc + token);
            if (playerDownCanWin && playerDownHasWon) return winCheck = tokenDownArray.reduce((acc, token) => acc + token);
        }
        return winCheck;
    }
}
