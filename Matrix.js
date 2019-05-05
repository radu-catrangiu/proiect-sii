const Matrix = (y, x, init) => {
    let res;
    res = Array(y)
        .fill()
        .map(() => Array(x).fill(init));

    res.print = () => {
        for (let i = 0; i < y; i++) {
            let str = '';
            for (let j = 0; j < x; j++) {
                str += res[i][j] + ' ';
            }
            console.log(str);
        }
    };

    return res;
};
