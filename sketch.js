
//const Engine = Matter.Engine;
//const World = Matter.World;
//const Bodies = Matter.Bodies;
//const Body = Matter.Body;
var Can, can1
var Bottles, bot
var packet, pack
var converter, cimg
var score = 0;
var bgimg
var plastic
var plasticGroup

function preload() {
	can1 = loadImage("can.png")
	bot = loadImage("bottle.png")
	pack = loadImage("packet.png")
	cimg = loadImage("converter.png")
	bgimg = loadImage("bg.jpg")
	plasticGroup = createGroup()

}

function setup() {
	createCanvas(800, 700);


	//packet.addImage(pack);
	//Can.addImage(can);

	converter = createSprite(400, 600)
	converter.addImage(cimg)
	converter.scale = 0.5



	//Bottles.addImage(bot);
	//Bottles=createSprite(100,100,100,100)
	//Bottles.velocityY=+5








}


function draw() {
	//* rectMode(CENTER);
	background(bgimg);

	fill("red")
	textSize(30)
	text("score = " + score, 100, 100)






	if (keyIsDown(LEFT_ARROW)) {
		converter.x = converter.x - 5
	}

	if (keyIsDown(RIGHT_ARROW)) {
		converter.x = converter.x + 5
	}


	//if (frameCount % 5 === 0) {

	//Bottles.addImage(bot);
	//Bottles=createSprite(100,100,100,100)
	//}


	if (frameCount % 60 === 0) {
		var choice = Math.round(random(1, 3))


		if (choice == 1) {
			boot()

		} else if (choice == 2) {
			canS()

		} else { pack2() }

	}

	plasticGroup.overlap(converter,recycle)

	textSize(30)

	drawSprites();
}


function boot() {
	Bottles = createSprite(random(50, 750), random(50, 100), 100, 100)
	Bottles.velocityY = +5
	Bottles.addImage(bot);
	Bottles.scale = 0.5
	plasticGroup.add(Bottles)

	Bottles.setCollider("rectangle",0,0,50,140)
}

function canS() {

	Can = createSprite(random(50, 750), random(50, 100), 100, 100)
	Can.velocityY = +5
	Can.addImage(can1)
	Can.scale = 0.5
	plasticGroup.add(Can)
	
	Can.setCollider("rectangle",0,0,240,300)

}





function pack2() {

	pack1 = createSprite(random(50, 750), random(50, 100), 100, 100)
	pack1.velocityY = +5
	pack1.addImage(pack)
	plasticGroup.add(pack1)
	
	pack1.setCollider("rectangle",0,0,150,120)

}

function recycle(plasticOBJ){
plasticOBJ.remove()
score+=1


}


