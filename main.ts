scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.hazardLava0, function (sprite, location) {
    music.play(music.melodyPlayable(music.wawawawaa), music.PlaybackMode.InBackground)
    game.gameOver(false)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile3`, function (sprite, location) {
    game.gameOver(false)
})
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    game.splash("EZ WIN")
    game.gameOver(true)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile2`, function (sprite, location) {
    music.play(music.stringPlayable("C E G C G E G - ", 500), music.PlaybackMode.UntilDone)
    game.gameOver(true)
})
controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    music.play(music.melodyPlayable(music.knock), music.PlaybackMode.InBackground)
    pause(500)
})
let myCorg = corgio.create(SpriteKind.Player)
myCorg.updateSprite()
myCorg.horizontalMovement()
myCorg.verticalMovement()
scene.cameraFollowSprite(myCorg)
tiles.setCurrentTilemap(tilemap`уровень1`)
scene.setBackgroundColor(9)
