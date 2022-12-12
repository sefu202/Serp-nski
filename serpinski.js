function drawTriangle(){
    let a = 700;
    let sqrt3 = 1.732;
    var element = document.getElementById("sandbox");
    var ctx = element.getContext("2d");
    let dotA = [0,0];
    let dotB = [a, 0];
    let dotC = [a/2, ((sqrt3/2)*a)];

    let edgeDots = [dotA, dotB, dotC];

    drawDot(ctx, dotA);
    drawDot(ctx, dotB);
    drawDot(ctx, dotC);

    let newDot = [300, 600];

    drawDot(ctx, newDot);

    for (var i = 0; i < 200000; i++){
            newDot = middleDot(edgeDots[Math.floor(Math.random()*3)], newDot);
            drawDot(ctx, newDot);
    }
    


    ctx.stroke();
}

function middleDot(xyA, xyB){
    return [(xyA[0]+xyB[0])/2, (xyA[1]+xyB[1])/2 ]
}

function drawDot(ctx, xyArr){
    ctx.fillRect(xyArr[0],xyArr[1],1,1);
}