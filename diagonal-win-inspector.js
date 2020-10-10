export class DiagonalWinInspector {
    static inspect(columns) {
        let winCheck;
        let tokenArry = [];
        for (let i = 0; i < 3; i++) {
        columns.forEach((column, idx) => {
            tokenArry.push(column.getTokenAt(i + idx))
        });
    }
        return 0;
        }
}
