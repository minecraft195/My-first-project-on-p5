function setup()
{
    canvas = createCanvas(640, 480);
    CanvasGradient.center
    video = createCapture(VIDEO);
    video.hide();
}

function draw() {
    image(video, 0, 0, 640, 480);
    fill("red")
    stroke("green")
    circle(50 ,50, 60);
    circle(600, 50, 60);
    circle(50, 450, 60);
    circle(600, 450, 60);
    rect(100, 25, 450, 40);
    rect(95, 430, 450, 40);
    rect(25, 90, 50, 320);
    rect(575, 89, 50, 320)
}

function take_snapshot(){
    SVGAElement('student_name.png')
}
