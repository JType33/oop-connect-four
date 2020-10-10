export class ColumnWinInspector {
    static inspect(column) {
        for (let i = 0; i < 3; i++) {
            if (column.a.slice(i,i+4).filter(token => token).every((token,x,arry) => token === arry[i]) && column.a.slice(i,i+4).filter(token => token).length === 4) return column.d(i);
        }
        return 0;
    }
}
