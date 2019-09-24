var gameport = document.getElementById("gameport");

var renderer = PIXI.autoDetectRenderer(400, 400, {backgroundColor: 0x1818});
gameport.appendChild(renderer.view);

var stage = new PIXI.Container();

var hero = new PIXI.Sprite(PIXI.Texture.fromImage("hero.png"));
var evil = new PIXI.Sprite(PIXI.Texture.fromImage("evil.png"));
var eviltwo = new PIXI.Sprite(PIXI.Texture.fromImage("eviltwo.png"));

var evil_rotate_system_one = new PIXI.Container();
evil_rotate_system_one.position.x = 100;
evil_rotate_system_one.position.y = 100;
stage.addChild(evil_rotate_system_one);

var evil_rotate_system_two = new PIXI.Container();
evil_rotate_system_two.position.x = 100;
evil_rotate_system_two.position.y = 100;
stage.addChild(evil_rotate_system_two);

// hero
hero.position.x = 30;
hero.position.y = 30;

stage.addChild(hero);

// add evil guys to rotate system
evil_rotate_system_one.addChild(evil);
evil.anchor.x = 0.5;
evil.anchor.y = 0.5;
evil.position.x = 100;
evil.position.y = 100;

evil_rotate_system_one.addChild(evil);
evil.anchor.x = 0.5;
evil.anchor.y = 0.5;
evil.position.x = 100;
evil.position.y = 100;





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
  evil_rotate_system.rotation += 0.05;

  renderer.render(stage);
}
animate();
