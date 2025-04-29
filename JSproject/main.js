function generateRandomPhoneNumber() {
    let phoneNumber = '';

    for (let i = 0; i < 10; i++) {
        phoneNumber += Math.floor(Math.random() * 10);
    }
    console.log(phoneNumber);
    return phoneNumber;
}



document.getElementById('generateBtn').addEventListener('click', () => {
    console.log("click");
    stopBouncingBalls();

    document.getElementById('ballsCanvas').style.display = 'none';



    const randomPhoneNumber = generateRandomPhoneNumber();
    document.getElementById('phoneNumber').innerText = randomPhoneNumber;


    document.getElementById('yesorno').style.display = 'block';

    document.getElementById('thumbsdownpic').style.display = 'none';
    document.getElementById('happypic').style.display = 'none';

});


document.getElementById('yesBtn').addEventListener('click', () => {
    document.getElementById('thumbsdownpic').style.display = 'none';
    document.getElementById('happypic').style.display = 'block';


    document.getElementById('ballsCanvas').style.display = 'block';
    startBouncingBalls();  
});



document.getElementById('noBtn').addEventListener('click', () => {
    document.getElementById('happypic').style.display = 'none';
    document.getElementById('thumbsdownpic').style.display = 'block';

    stopBouncingBalls();  
    document.getElementById('ballsCanvas').style.display = 'none';
});




const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");

const width = (canvas.width = window.innerWidth);
const height = (canvas.height = window.innerHeight);




let animationFrameId;
let isAnimationRunning = false;




function random(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}




function randomRGB() {
    return `rgb(${random(0, 255)},${random(0, 255)},${random(0, 255)})`;
}

class Ball {
    constructor(x, y, velX, velY, color, size) {
        this.x = x;
        this.y = y;
        this.velX = velX;
        this.velY = velY;
        this.color = color;
        this.size = size;
    }

    draw() {
        ctx.beginPath();
        ctx.fillStyle = this.color;
        ctx.arc(this.x, this.y, this.size, 0, 2 * Math.PI);
        ctx.fill();
    }

    update() {
        if (this.x + this.size >= width) {
            this.velX = -this.velX;
        }

        if (this.x - this.size <= 0) {
            this.velX = -this.velX;
        }

        if (this.y + this.size >= height) {
            this.velY = -this.velY;
        }

        if (this.y - this.size <= 0) {
            this.velY = -this.velY;
        }

        this.x += this.velX;
        this.y += this.velY;
    }

        collisionDetect() {
            for (const ball of balls) {
                if (this !== ball) {
                    const dx = this.x - ball.x;
                    const dy = this.y - ball.y;
                    const distance = Math.sqrt(dx * dx + dy * dy);
    
                    if (distance < this.size + ball.size) {
                        ball.color = this.color = randomRGB();
                    }
                }
            }
        }
    }





const balls = [];

while (balls.length < 25) {
    const size = random(10, 20);
    const ball = new Ball(
        random(0 + size, width - size),
        random(0 + size, height - size),
        random(-7, 7),
        random(-7, 7),
        randomRGB(),
        size,
    );

    balls.push(ball);
}
function startBouncingBalls() {
    if (isAnimationRunning) return;

    function loop() {

        ctx.clearRect(0, 0, width, height);

        for (const ball of balls) {
            ball.draw();
            ball.update();
            ball.collisionDetect();
        }

        animationFrameId = requestAnimationFrame(loop);
    }


    isAnimationRunning = true;
    loop();
}

function stopBouncingBalls() {
    cancelAnimationFrame(animationFrameId); 
    isAnimationRunning = false;
}




document.getElementById('generateBtn').addEventListener('click', () => {
    console.log("click");
    const randomPhoneNumber = generateRandomPhoneNumber();
    document.getElementById('phoneNumber').innerText = randomPhoneNumber;

    document.getElementById('yesorno').style.display = 'block';
    document.getElementById('thumbsdownpic').style.display = 'none';
    document.getElementById('happypic').style.display = 'none';
});

document.getElementById('yesBtn').addEventListener('click', () => {
    document.getElementById('thumbsdownpic').style.display = 'none';
    document.getElementById('happypic').style.display = 'block';

    document.getElementById('ballsCanvas').style.display = 'block'; 
    startBouncingBalls(); 
});

document.getElementById('noBtn').addEventListener('click', () => {
    document.getElementById('happypic').style.display = 'none';
    document.getElementById('thumbsdownpic').style.display = 'block';

    stopBouncingBalls(); 
    document.getElementById('ballsCanvas').style.display = 'none'; 
});