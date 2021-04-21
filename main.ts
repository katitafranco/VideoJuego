controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    projectile = sprites.createProjectileFromSprite(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . 5 5 . . . . . . . 
        . . . . . 5 5 5 5 5 5 . . . . . 
        . . . . 5 5 5 5 5 5 5 5 . . . . 
        . . . . 5 5 5 5 5 5 5 5 . . . . 
        . . . . . 5 5 5 5 5 5 5 . . . . 
        . . . . . 5 5 5 5 5 5 . . . . . 
        . . . . . 5 5 5 5 5 5 . . . . . 
        . . . . . . 5 5 5 5 5 . . . . . 
        . . . . . . . 5 5 . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, nave, 0, -100)
    music.magicWand.play()
})
let tarzan: Sprite = null
let projectile: Sprite = null
let nave: Sprite = null
nave = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . 1 1 . . . . . . . . 
    . . . . . . 1 1 . . . . . . . . 
    . . . . . 1 1 1 1 . . . . . . . 
    . . . . . 1 . . 1 . . . . . . . 
    . . . . 1 1 6 6 1 1 . . . . . . 
    . . . . 1 . 6 6 . 1 . . . . . . 
    . . . 1 1 1 1 1 1 1 1 . . . . . 
    . . . 5 1 . . . . 1 5 . . . . . 
    . . 5 5 1 . . . . 1 5 5 . . . . 
    . 5 5 5 1 . . . . 1 5 5 5 . . . 
    . . . . 1 1 1 1 1 1 . . . . . . 
    . . . . . 2 2 2 2 . . . . . . . 
    . . . . . . 2 2 . . . . . . . . 
    . . . . . . 5 5 . . . . . . . . 
    `, SpriteKind.Player)
controller.moveSprite(nave)
nave.setStayInScreen(true)
game.onUpdateInterval(500, function () {
    tarzan = sprites.create(assets.image`villager2WalkRight2`, SpriteKind.Enemy)
    tarzan.setPosition(randint(0, 150), 0)
    tarzan.setVelocity(0, 50)
})
