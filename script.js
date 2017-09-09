var wheel1X = 75
var speed = 10;

function setup() {
    createCanvas(windowWidth, windowHeight)
}

function draw() {
    clear()
    background('grey')
    fill("white")
    rect(wheel1X, 320, 200, 100, 20);
    fill(87, 150, 239)
    ellipse(wheel1X, 400, 100, 100)
    ellipse(wheel1X + 200, 400, 100, 100)

    if (wheel1X + 250 >= windowWidth || wheel1X - 50 <= 0) {
        speed *= -1
    }
    wheel1X += speed
}

function keyPressed() {
    if (keyCode === UP_ARROW) {
        speed *= 1.1

    }
    else if (keyCode === DOWN_ARROW) {
        speed *= .9
    }
}
