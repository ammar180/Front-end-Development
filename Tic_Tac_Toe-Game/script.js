/*
* Persuade Code:
 * View:
 *  -UpdateBox()
 *     - ElementByID -> 'X', ElementByID -> 'O'
 *     - Disable ElementByID
 *  -Swich_Symbols-
 *     - If turn Is ture : ElementByID -> 'X' -> switch turn, else: ElementByID -> 'O' switch turn;
 * Controler:
 *  -Fill_Matrix:
 *      The Matrix =>
        ['a0', 'a1', 'a2'],
        ['b0', 'b1', 'b2'],
        ['c0', 'c1', 'c2']
 *      - if ID a_ -> Matrix[0][ID:_'n'] = 'X' or 'O'
 *      - if ID b_ -> Matrix[1][ID:_'n'] = 'X' or 'O'
 *      - if ID c_ -> Matrix[2][ID:_'n'] = 'X' or 'O'
 *  -Win_Conditions-
 *      -Horizonal:Matrix[a0] = Matrix[a1] = Matrix[a2] Etc..
 *      -Vertical: Matrix[a0] = Matrix[b0] = Matrix[c0] Etc..
 *      -Diagonal: Matrix[a0] = Matrix[b1] = Matrix[a2] or Matrix[b1] = Matrix[c0] = Matrix[a2]
 *  -Window Alter Player('X' or 'O'): Wins 🤩-
 *  -Point Counter++;
*/
let turn = true;
var isWin;
let Matrix =
    [
        ['a0', 'a1', 'a2'],
        ['b0', 'b1', 'b2'],
        ['c0', 'c1', 'c2']
    ]

function GameLogic(id) {
    let symb1 = 'X', symb2 = 'O';
    if (turn) {
        document.getElementById(id).innerHTML = symb1;
        turn = !turn;
        updateArray(id, symb1);
        checkWin();
        if(isWin)
            window.alert(`Player(${symb1}) Wins🤩!!`);
    }
    else {
        document.getElementById(id).innerHTML = symb2;
        turn = !turn;
        updateArray(id, symb2);
        checkWin();
        if(isWin)
            window.alert(`Player(${symb2}) Wins🤩!!`);
    }
    document.getElementById(id).disabled = true;
}
function updateArray(id, symb) {
    let row = 0;
    let col = +id[1];

    id[0] === 'a' ?
        row = 0 : id[0] === 'b' ?
            row = 1 : row = 2;

    Matrix[row][col] = symb;
}

function checkWin() {
    isWin = false;
    const arrayColumn = (arr, n) => arr.map(x => x[n]);
    for (let index = 0; index < 3; index++) {
        if(checkArrayElementsEquality(Matrix[index]))
            isWin = true; // -> Horizonal
        if (checkArrayElementsEquality(arrayColumn(Matrix, index)))
            isWin = true;// -> Vertical
    }
    if (Matrix[0][0] == Matrix[1][1] && Matrix[1][1] == Matrix[2][2])
        isWin = true;
    if (Matrix[0][2] == Matrix[1][1] && Matrix[1][1] == Matrix[2][0])
        isWin = true;
}
function checkArrayElementsEquality(arr) {
    return arr.every((val, i, arr) => val === arr[0]);
}
