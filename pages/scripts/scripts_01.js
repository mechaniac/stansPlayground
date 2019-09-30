var canvas;
var ctx;
console.log("myTestfromPage");
function gameLoop() {
    requestAnimationFrame(gameLoop);
    ctx.fillStyle = "black";
    ctx.fillRect(0, 0, 600, 600);
}
window.onload = function () {
    canvas = document.getElementById("canvas_01");
    ctx = canvas.getContext("2d"); //cast as, because getContext is Union Type
    gameLoop();
};
