function take_snapshot(){
    save('Moustache.png')
}

function preload() {

}

function draw() {

}

function setup() {
    canvas = createCanvas(640, 480);
    canvas.position(110, 250);
    video = createCapture(VIDEO);
    video.hide();

    tint_color = "";
}