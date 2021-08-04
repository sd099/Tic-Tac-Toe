var p = document.querySelectorAll(".pos");
var head = document.querySelector("#header");
var stForClick = 0, stForOver = 0;
var reset = document.querySelector("#rst");

for (var i = 0; i < p.length; i++) {
    p[i].addEventListener("click", function () {
        if (stForOver === 0) {
            if (stForClick === 0 && (this.textContent != "X" || this.textContent != "O")) {
                this.textContent = "X";
                stForClick = 1;
            }
            else if (stForClick === 1 && (this.textContent != "X" || this.textContent != "O")) {
                this.textContent = "O";
                stForClick = 0;
            }
            check();
        }
    })
}
reset.addEventListener("click", function () {
    rst();
})

function check() {
    var j;
    for (j = 0; j < 8; j = j + 3) {
        if (p[j].textContent === p[j + 1].textContent && p[j + 1].textContent ===
            p[j + 2].textContent) {
            if (p[j].textContent != "") {
                stForOver = 1;
                head.textContent = "PLAYER  --" + p[j].textContent + "--  WINS"
                p[j].style.color = p[j + 1].style.color = p[j + 2].style.color = "#d64161";
                break;
            }
        }
    }
    if (stForOver === 0) {
        for (j = 0; j < 3; j++) {
            if (p[j].textContent === p[j + 3].textContent && p[j + 3].textContent ===
                p[j + 6].textContent) {
                if (p[j].textContent != "") {
                    stForOver = 1;
                    head.textContent = "PLAYER  --" + p[j].textContent + "--  WINS"
                    p[j].style.color = p[j + 3].style.color = p[j + 6].style.color = "#d64161";
                    break;
                }
            }
        }
    }
    if (stForOver === 0) {
        if (p[0].textContent === p[4].textContent && p[4].textContent === p[8].textContent) {
            if (p[0].textContent != "") {
                stForOver = 1;
                head.textContent = "PLAYER  --" + p[0].textContent + "--  WINS"
                p[0].style.color = p[4].style.color = p[8].style.color = "#d64161";
            }
        }
    }
    if (stForOver === 0) {
        if (p[2].textContent === p[4].textContent && p[4].textContent === p[6].textContent) {
            if (p[2].textContent != "") {
                stForOver = 1;
                head.textContent = "PLAYER  --" + p[2].textContent + "--  WINS"
                p[2].style.color = p[4].style.color = p[6].style.color = "#d64161";
            }
        }
    }
}

function rst() {
    for (var i = 0; i < p.length; i++) {
        p[i].textContent = "";
        p[i].style.color = "#3e4444";
    }
    stForClick = 0;
    stForOver = 0;
    head.textContent = "Tic Tac Toe";
}


