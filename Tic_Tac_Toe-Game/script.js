/*
* pseudoCode:
 * View:
 *  -UpdateBox()
 *     - box = GetElementByID -> 'X' or box = GetElementByID -> 'O'
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
 *  -Playing Times++
 *  -Playing Times = 9? => Drow
 *  -Win_Conditions-
 *      -Horizonal:Matrix[a0] = Matrix[a1] = Matrix[a2] Etc..
 *      -Vertical: Matrix[a0] = Matrix[b0] = Matrix[c0] Etc..
 *      -Diagonal: Matrix[a0] = Matrix[b1] = Matrix[a2] or Matrix[b1] = Matrix[c0] = Matrix[a2]
 *  -Window Alter Player('X' or 'O'): Wins 🤩-
 *  -Points Counter++;
 *  -Clear():
*    - ReDeclear Matrix
*    - Remove Box Value
*/
let turn = true;
var playTimes = 0;
var isWin = false;
let Matrix =
    [
        ['a0', 'a1', 'a2'],
        ['b0', 'b1', 'b2'],
        ['c0', 'c1', 'c2']
    ];

function GameLogic(id) {
    let symb1 = 'X', symb2 = 'O';
    if (turn) {
        document.getElementById(id).innerHTML = symb1;
        turn = !turn;
        updateArray(id, symb1);
        checkWin();
        if (isWin) {
            window.alert(`Player(${symb1}) Wins🤩!!`);
            isWin = false;

        }
        playTimes++;
    }
    else {
        document.getElementById(id).innerHTML = symb2;
        turn = !turn;
        updateArray(id, symb2);
        checkWin();
        if (isWin) {
            window.alert(`Player(${symb2}) Wins🤩!!`);
            isWin = false;

        }
        playTimes++;
    }
    document.getElementById(id).disabled = true;
    if (playTimes == 9) {
        window.alert("Drow 🙂");
        clearBoxs();
    }
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
    const arrayColumn = (arr, n) => arr.map(el => el[n]);
    for (let index = 0; index < 3; index++) {
        if (checkArrayElementsEquality(Matrix[index]))
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
function clearBoxs() {
    Matrix =
        [
            ['a0', 'a1', 'a2'],
            ['b0', 'b1', 'b2'],
            ['c0', 'c1', 'c2']
        ];
    for (let i = 0; i < Matrix.length; i++) {
        for (let j = 0; j < Matrix[i].length; j++) {
            document.getElementById(Matrix[i][j]).disabled = false;
            document.getElementById(Matrix[i][j]).textContent = "";
        }
    }
    isWin = false;
    playTimes = 0;
    turn = true;
}
