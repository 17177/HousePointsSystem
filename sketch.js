let LBCLogoImg;

var xPos = 147;
let data;

function preload(){
    LBCLogoImg = loadImage('https://play-lh.googleusercontent.com/tgWzW8P3uZNIqaloZNoy6IZBdcyKYbKXxwsnLePo4YuS-7oGkqaprIOQ28x_RFoaRbQ=s200');
}

function setup() 
{
    frameRate(3);
	createCanvas(600, 600);
    mainScreenDraw();
    noLoop();
}

function draw()
{
    drawBars(random(70, 400), random(70, 400), random(70, 400), random(70, 400), random(70, 400));
}



function mainScreenDraw(){
    background(255);
    rectMode(CORNER).fill(0, 88, 124);
    rect(6, 5, 125.597, 584.629);
    rect(136, 5, 457, 584.629);

    let s = 'House Leader Board';
    textAlign(LEFT);
    textFont('Calibri').textStyle(BOLD);
    textSize(35).fill(255);
    text(s, 14, 30, 160, 150);

    image(LBCLogoImg, 0, 412, 138, 147);

    textSize(22);
    textAlign(CENTER);
    text('Takahē', xPos, 523, 70, 523);
    text('Tïeke', xPos+90, 523, 70, 523);
    text('Tara Iti', xPos+90*2, 523, 70, 523);
    text('Kea', xPos+90*3, 523, 70, 523);
    text('Kōkako', xPos+90*4, 523, 70, 523);
}

function drawBars(a, b, c, d, e){
    mainScreenDraw();
    rectMode(CORNERS).noStroke();

    let max = Math.ceil(Math.max(a, b, c, d, e)/20)*0;

    //Takahe
    fill(234, 76, 74);
    rect(xPos, 510, 217, 500-a);
    circle(35+xPos, 500-a, 70);
    fill(255);
    text(Math.round(a), 35+xPos, 500-(a+40));

    //Tieke
    fill(252, 145, 62);
    rect(xPos+90, 510, 307, 500-b);
    circle(35+xPos+90, 500-b, 70)
    fill(255);
    text(Math.round(b), 35+xPos+90, 500-(b+40));

    //Tara iti
    fill(255, 200, 72);
    rect(xPos+90*2, 510, 397, 500-c);
    circle(35+xPos+90*2, 500-c, 70)
    fill(255);
    text(Math.round(c), 35+xPos+90*2, 500-(c+40));

    //Kia
    fill(138, 200, 83);
    rect(xPos+90*3, 510, 487, 500-d);
    circle(35+xPos+90*3, 500-d, 70)
    fill(255);
    text(Math.round(d), 35+xPos+90*3, 500-(d+40));

    //Kokako
    fill(68, 124, 202);
    rect(xPos+90*4, 510, 577, 500-e);
    circle(35+xPos+90*4, 500-e, 70)
    fill(255);
    text(Math.round(e), 35+xPos+90*4, 500-(e+40));
}