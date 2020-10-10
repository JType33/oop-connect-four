export class DiagonalWinInspector {
    static inspect(columns) {
        let downSlantTokens = [];
        let upSlantTokens = [];
        for (let i = 0; i < 3; i ++) {
            columns.forEach((column, idx) => {
                downSlantTokens.push(column.getTokenAt(i+idx));
                upSlantTokens.push(column.getTokenAt(i + (3 - idx)));
            });
            const downSlantHasWon = (downSlantTokens.every((token,x,arry) => token === arry[0])) && downSlantTokens.every(token => token);
            const upSlantHasWon = (upSlantTokens.every((token,x,arry) => token === arry[0])) && upSlantTokens.every(token => token);
            if (downSlantHasWon) return downSlantTokens[0];
            if (upSlantHasWon) return upSlantTokens[0];
            downSlantTokens = [];
            upSlantTokens = [];
        }
        return 0;
    }
}
