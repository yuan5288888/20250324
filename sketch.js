let rollSpriteSheet, lightSpriteSheet;
let rollAnimation = [];
let lightAnimation = [];
let currentAnimation = null;
let rollButton, lightButton;
let frameIndex = 0;
let frameDelay = 10; // 控制動畫速度

function preload() {
  // 載入圖片精靈
  rollSpriteSheet = loadImage('roll.png');
  lightSpriteSheet = loadImage('light.png');
}

function setup() {
  createCanvas(windowWidth, windowHeight);

  // 初始化按鈕
  rollButton = createButton('自我介紹');
  rollButton.position(50, 50);
  rollButton.size(100, 50);
  rollButton.style('font-size', '20px');
  rollButton.mouseOver(() => currentAnimation = rollAnimation);

  lightButton = createButton('作品簡介');
  lightButton.position(280, 50);
  lightButton.size(100, 50);
  lightButton.style('font-size', '20px');
  lightButton.mouseOver(() => currentAnimation = lightAnimation);

  // 初始化 roll.png 的動畫
  for (let i = 0; i < 9; i++) {
    let frame = rollSpriteSheet.get(i * 91, 0, 91, 59);
    rollAnimation.push(frame);
  }

  // 初始化 light.png 的動畫
  for (let i = 0; i < 5; i++) {
    let frame = lightSpriteSheet.get(i * 91, 0, 91, 89);
    lightAnimation.push(frame);
  }
}

function draw() {
  background(220);

  // 顯示當前動畫
  if (currentAnimation) {
    image(currentAnimation[frameIndex], 50, 150); // 將 y 座標從 50 改為 150

    // 控制動畫速度
    if (frameCount % frameDelay === 0) {
      frameIndex = (frameIndex + 1) % currentAnimation.length;
    }
  }
}