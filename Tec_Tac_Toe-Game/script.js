let turn = true;
let boxMatrix =
    [
        ['a1', 'a2', 'a3'],
        ['b1', 'b2', 'b3'],
        ['c1', 'c2', 'c3']
    ]
function updateBox(id) {
    if (turn) {
        document.getElementById(id).innerHTML = 'X';
        turn = false;
        CheckIswin();
    }
    else {
        document.getElementById(id).innerHTML = 'O';
        turn = true;
        CheckIswin();
    }
}
function CheckIswin() {
    // Horizonal Condition
    if (boxMatrix[0][1] != null && boxMatrix[0][0] == boxMatrix[0][1] && boxMatrix[0][1] == boxMatrix[0][2]){
        window.alert("Player One Wins!");
    }
}