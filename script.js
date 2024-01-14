let boxes = document.querySelectorAll(".box");
let turnO = true;
let h1 = document.querySelector("h1");
let reset = document.querySelector(".reset");
let wins = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],
];

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        if (turnO) {
            box.innerText = "O";
            turnO = false;
        } else {
            box.innerText = "x";
            turnO = true;
        }
        box.disabled = true;
        checkWinner();
    });
});

const checkWinner = () => {
    wins.forEach((win) => {
        p1 = boxes[win[0]].innerText;
        p2 = boxes[win[1]].innerText;
        p3 = boxes[win[2]].innerText;
        if (p1 != "" && p2 != "" && p3 != "") {
            if (p1 == p2 && p1 == p3) {
                if (turnO) {
                    h1.innerText = "X is winner ";
                } else {
                    h1.innerText = "O is winner";
                }
                boxes.forEach((box) => {
                    box.disabled = true;
                });
            }
        }
    });
};
reset.addEventListener("click", () => {
    boxes.forEach((box) => {
        box.innerText = "";
        box.disabled = false;
        h1.innerText = "Tic Tac Toe";
    });
});
