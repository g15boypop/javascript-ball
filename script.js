var scene = document.getElementById("scenediv");
var ball = document.getElementById("balle");
// ball.style.left = "100px";
// ball.style.top = "50px";

var sceneW = 700;
var sceneH = 450;
var posX = 50;
var posY = 399;
ball.style.left = posX + "px";
ball.style.top = posY + "px";
// on renote les deux valeur pour que la balle n'aparaisse pas a gauche en position de départ
var vx = 3;
var vy = -15;


setInterval(update, 20);

function update() {
    vy += 0.3;
    // cad que tout les 20 milliseconde on augmente de 0.02
    posY += vy;
    posX += vx;

    if (posY >= (sceneH - 30)) {
        vy = -vy;
        posY = sceneH - 30;
        // ou vy *= -1; equivalent à vy = vy * (-1)
    }
    if (posY <= 30) {
        vy = -vy;
        posY = 30
    }
    if (posX >= (sceneW - 30)) {
        vx = -vx;
        posX = sceneW - 30;
    }
    if (posX <= 30) {
        vx = -vx;
        posX = 30
    }




    // plus on agrandi ce chiffre plus la vitesse augmente
    ball.style.left = posX + "px";
    ball.style.top = posY + "px";
    // donc toute les 5OO milliseconde ma balle va se décaler de 50 px
}
