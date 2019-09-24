var gameport = document.getElementById("gameport");

var renderer = PIXI.autoDetectRenderer(400, 400, {backgroundColor: 0x282828});
gameport.appendChild(renderer.view);

var stage = new PIXI.Container();

// create sprite vars
var hero = new PIXI.Sprite(PIXI.Texture.fromImage("hero.png"));
var save = new PIXI.Sprite(PIXI.Texture.fromImage("save.png"));
var evil = new PIXI.Sprite(PIXI.Texture.fromImage("evil.png"));
var eviltwo = new PIXI.Sprite(PIXI.Texture.fromImage("eviltwo.png"));
var evilthree = new PIXI.Sprite(PIXI.Texture.fromImage("evilthree.png"));

// evil system two
var evil_rotate_system_one = new PIXI.Container();
evil_rotate_system_one.position.x = 100;
evil_rotate_system_one.position.y = 100;
stage.addChild(evil_rotate_system_one);

// evil system two
var evil_rotate_system_two = new PIXI.Container();
evil_rotate_system_two.position.x = 250;
evil_rotate_system_two.position.y = 250;
stage.addChild(evil_rotate_system_two);

// evil system three
var evil_rotate_system_three = new PIXI.Container();
evil_rotate_system_three.position.x = 180;
evil_rotate_system_three.position.y = 234;
stage.addChild(evil_rotate_system_three);

// hero
hero.position.x = 30;
hero.position.y = 30;

save.position.x = 380;
save.position.y = 380;

stage.addChild(save);
stage.addChild(hero);

// add evil guys to rotate system
evil_rotate_system_one.addChild(evil);
evil.anchor.x = 0.5;
evil.anchor.y = 0.5;
evil.position.x = 100;
evil.position.y = 100;

evil_rotate_system_two.addChild(eviltwo);
eviltwo.anchor.x = 0.75;
eviltwo.anchor.y = 0.75;
eviltwo.position.x = 50;
eviltwo.position.y = 50;

evil_rotate_system_three.addChild(evilthree);
evilthree.anchor.x = 0.50;
evilthree.anchor.y = 0.50;
evilthree.position.x = 100;
evilthree.position.y = 100;



function keydownEventHandler(e) {

  if (e.keyCode == 87) { // W key
    hero.position.y -= 10;
  }

  if (e.keyCode == 83) { // S key
    hero.position.y += 10;
  }

  if (e.keyCode == 65) { // A key
    hero.position.x -= 10;
  }

  if (e.keyCode == 68) { // D key
    hero.position.x += 10;
  }
}

document.addEventListener('keydown', keydownEventHandler);


function animate() {
  requestAnimationFrame(animate);
  // move the evil and evil eviltwo
  evil_rotate_system_one.rotation += 0.05;
  evil_rotate_system_two.rotation += 0.03;
  evil_rotate_system_three.rotation += 0.0291;

  renderer.render(stage);
}
animate();
