# JUMPER

## Description
Jumper is a game where the player can move left, right and jump. The goal of the game is to move your character to reach the "mushroom" at the top of the map. Along the way, the player can "die" when they collide with obstacles (deadly snowballs & shuriken). Upon dying, a "Game Over" screen will appear with the ability to restart game.

I like anime a lot, so if you do too then you'll probably catch all the little references :)

### Bonus
Collect all coins <b>before</b> grabbing the mushroom. This unlocks a special anime reference that only I probably find cool. Enjoy!

#### Link

https://stefanhranek.github.io/jumper/

## MVP (DOM - CANVAS)
<i>CANVAS</i>, This is a game where the player can move & jump from platform to platform with the ability to complete the game by reaching the top.

## Fixes to be made
<ul>
  <li>Jumping - currently, you can fly around the map by holding 'up' key</li>
  <li>Shuriken - no game-over collision detection set yet</li>
  <li>Ramen bowl - no acquisition collision detection set yet</li>
</ul>

## Backlog
<ul>
  <li>Coins-to-win condition</li>
  <li>Obstacles</li>
  <li>Coin counter</li>
  <li>Window(view) scrolling with character</li
  <li>Character sprite</li>
  <li>Star sprite</li>
  <li>Coin sprite</li>
  <li>Sceen transitions</li>
  <li>More sound Effects</li>
</ul>

## Data structure

### main.js
```

buildSplashScreen(){
}


buildGameScreen(){
}

buildGameOverScreen(){
}

buildDom() {
}
```

### game.js
```
Game() {
  this.canvas;
}

Game.prototype.startLoop() {
}

Game.prototype.checkCollisions {
}

Game.prototype
```

### player.js
```
Player() {
  this.canvas
  this.ctx
  this.size
  this.x
  this.y
  this.direction
  this.speed
}

Player.prototype.startPosition() {
}

Player.prototype.movement() {
}

Player.prototype.screenCollision () {
}

Player.prototype.enemyCollision () {
}

Player.prototype.winCollision () {
}

Player.prototype.draw() {
  this.ctx.fillStyle
  this.ctx.fillRect
}
```

### enemy.js
```
Enemy() {
  this.canvas
  this.ctx
  this.size
  this.x
  this.y
  this.speed
}

Enemy.prototype.draw() {
  this.ctx
  this.ctx.FillRect
    this.x
    this.y
    this.size
    this.size
}

Enemy.prototype.updatePosition() {
}

Enemy.prototype.isInsideScreen() {
}
```


## States & Transitions
```
- splashScreen
  - buildSplash()
  - addEventListener(startGame)

- gameScreen
  - buildGameScreen()
  - addEventListener(enemyCollision)
  - addEventListener(winCollision)

- gameoverScreen
  - buildGameOverScreen()
  - addEventListener(startGame)

- winScreen
  - buildWinScreen()
  - addEventListener(startGame)

````

## Tasks
- Main - buildDom
- Main - buildSplashScreen
- Main - addEventListener
- Main - buildGameScreen
- Main - buildGameOverScreen
- Main - buildWinScreen
- Game - buildCanvas
- Game - clearCanvas
- Game - updateCanvas
- Game - drawCanvas
- Game - setGameOver
- Game - setWin
- Game - addEventListeners
- Player - construct Player
- Player - basic movement
- Player - jumping
- Player - screenCollision
- Player - enemyCollision
- Player - winCollision
- Enemy - construct Enemy
- Enemy - setRandomLocation
- Enemy - setDirection
- Enemy - updatePosition
- Enemy - isInsideOfScreen

## Links


### Trello
[Link url](https://trello.com/b/JPkqm7jW/ironhack-project-1-platformer)


### Git
URls for the project repo and deploy
[Link Repo](http://github.com)
[Link Deploy](http://github.com)


### Slides
URls for the project presentation (slides)
[Link Slides.com](http://slides.com)
