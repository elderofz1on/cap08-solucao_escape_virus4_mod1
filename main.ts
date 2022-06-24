let jogadorX = 2
let jogadorY = 4
let virusX = randint(0, 4)
let virusY = 0
let gameover = 0
basic.forever(function () {
    while (gameover == 0) {
        basic.clearScreen()
        led.plot(jogadorX, jogadorY)
        led.plot(virusX, virusY)
        if (virusY == 4 && virusX == jogadorX) {
            gameover = 1
        }
        if (input.buttonIsPressed(Button.A) && jogadorX > 0) {
            jogadorX = jogadorX - 1
        }
        if (input.buttonIsPressed(Button.B) && jogadorX < 4) {
            jogadorX = jogadorX + 1
        }
        virusY = virusY + 1
        if (virusY == 5) {
            virusX = randint(0, 4)
            virusY = 0
        }
        basic.pause(500)
    }
    basic.clearScreen()
    basic.showString("GAME OVER")
    gameover = 0
})
