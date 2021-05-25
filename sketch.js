/*
    To do!!
    Make the bars animated as they rise up
    Get better images and import them in 
    Optimise further 
    Add interactability
    Add export to image functionality
*/


var xPos = 147; //X pos offset
let data; //JSON data file
let LBCLogoImg; //LBC logo

//Loads the images and data from github
function preload(){
    LBCLogoImg = loadImage('https://play-lh.googleusercontent.com/tgWzW8P3uZNIqaloZNoy6IZBdcyKYbKXxwsnLePo4YuS-7oGkqaprIOQ28x_RFoaRbQ=s200');
    data = loadJSON('https://raw.githubusercontent.com/17177/HousePointsSystem/main/data.json');
}

function setup() 
{
	createCanvas(600, 600);
    mainScreenDraw();
    noLoop();
    print(data.houses[0].contrib[0].name); //Prints a test data point
    
    drawBars();
}

function draw()
{
    
}

function mainScreenDraw(){
    //Sets up the main background of the screen
    background(255);
    rectMode(CORNER).fill(0, 88, 124);
    rect(6, 5, 125.597, 584.629);
    rect(136, 5, 457, 584.629);

    let s = 'House Leader Board';
    textAlign(LEFT);
    textFont('Calibri').textStyle(BOLD);
    textSize(35).fill(255);
    text(s, 14, 30, 160, 150);

    image(LBCLogoImg, 10, 412, 120, 147);

    textSize(22);
    textAlign(CENTER);
    for(i = 0; i < 5; i++){
        text(data.houses[i].name, xPos+90*i, 523, 70, 523);
    }
}

function drawBars(){
    mainScreenDraw();
    rectMode(CORNERS).noStroke();

    let max = Math.max(data.houses[0].points, data.houses[1].points, data.houses[2].points, data.houses[3].points, data.houses[4].points);
    print(max);

    let min = Math.min(data.houses[0].points, data.houses[1].points, data.houses[2].points, data.houses[3].points, data.houses[4].points);
    print(min);

    for(i = 0; i < 5; i++){
        print(data.houses[i].colour); //Prints the colour of the house

        fill(data.houses[i].colour);
        rect(xPos+90*i, 510, (xPos+70)+90*i, 500 - (data.houses[i].points*(max/min)));
        circle(35+xPos+90*i, 500- data.houses[i].points*(max/min), 70);

        //Draws text at top of bar
        fill(255);
        text(data.houses[i].points, 35+xPos+90*i, 500-(data.houses[i].points*(max/min)+40));
    }
}
