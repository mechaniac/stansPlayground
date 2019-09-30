var canvas: HTMLCanvasElement;
var ctx: CanvasRenderingContext2D;
console.log("myTestfromPage");

function gameLoop(){
    requestAnimationFrame(gameLoop);
    ctx.fillStyle = "black";
    ctx.fillRect(0,0,600,600);
}

window.onload = () =>{
    canvas =<HTMLCanvasElement>document.getElementById("canvas_01");
    ctx = canvas.getContext("2d") as CanvasRenderingContext2D;  //cast as, because getContext is Union Type
    gameLoop();
}