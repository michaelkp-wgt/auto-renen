input.onButtonEvent(Button.A, input.buttonEventClick(), function () {
    Du.move(-1)
})
input.onButtonEvent(Button.AB, input.buttonEventClick(), function () {
    Du_Leben = 6
})
input.onButtonEvent(Button.B, input.buttonEventClick(), function () {
    Du.move(1)
})
let Du_Leben = 0
let Du: game.LedSprite = null
let Gegen_Ferker = randint(1, 3)
let Gegenfekr_k = game.createSprite(Gegen_Ferker, 0)
Du = game.createSprite(2, 3)
Du_Leben = 3
let Rant = game.createSprite(0, 0)
Rant = game.createSprite(0, 2)
Rant = game.createSprite(0, 4)
Rant = game.createSprite(4, 0)
Rant = game.createSprite(4, 2)
Rant = game.createSprite(4, 4)
let Rand2 = game.createSprite(0, 1)
Rand2 = game.createSprite(0, 3)
Rand2 = game.createSprite(4, 1)
Rand2 = game.createSprite(4, 3)
basic.forever(function () {
    if (Gegenfekr_k.isTouching(Du)) {
        Du_Leben += -1
        basic.pause(1000)
    }
})
basic.forever(function () {
    if (Du_Leben == 6) {
        basic.setLedColors(0xffff00, 0xffff00, 0xffff00)
    } else if (Du_Leben == 5) {
        basic.setLedColors(0xffff00, 0xffff00, 0x00ff00)
    } else if (Du_Leben == 4) {
        basic.setLedColors(0xffff00, 0x00ff00, 0x00ff00)
    } else if (Du_Leben == 3) {
        basic.setLedColors(0x00ff00, 0x00ff00, 0x00ff00)
    } else if (Du_Leben == 2) {
        basic.setLedColors(0x00ff00, 0x00ff00, 0x000000)
    } else if (Du_Leben == 1) {
        basic.setLedColors(0x00ff00, 0x000000, 0x000000)
    } else if (Du_Leben == 0) {
        basic.setLedColors(0x000000, 0x000000, 0x000000)
        game.gameOver()
    }
})
basic.forever(function () {
    basic.pause(1000)
    Gegen_Ferker = randint(1, 3)
    if (Gegenfekr_k.get(LedSpriteProperty.Y) == 4) {
        Gegenfekr_k.delete()
        Gegenfekr_k = game.createSprite(Gegen_Ferker, 0)
    } else {
        Gegenfekr_k.change(LedSpriteProperty.Y, 1)
    }
})
