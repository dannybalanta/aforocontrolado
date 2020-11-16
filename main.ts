input.onButtonPressed(Button.A, function () {
    clientes += -1
    basic.showNumber(clientes)
    basic.pause(1000)
    if (clientes >= 1 && clientes <= 50) {
        basic.showIcon(IconNames.Yes)
    } else {
        basic.showIcon(IconNames.Sad)
    }
    basic.pause(1000)
    basic.clearScreen()
})
input.onButtonPressed(Button.AB, function () {
    basic.showNumber(0)
    clientes = 0
})
input.onButtonPressed(Button.B, function () {
    clientes += 1
    basic.showNumber(clientes)
    basic.pause(1000)
    if (clientes > 50) {
        basic.showLeds(`
            # . . . #
            . # . # .
            . . # . .
            . # . # .
            # . . . #
            `)
        for (let index = 0; index < 4; index++) {
            music.playTone(262, music.beat(BeatFraction.Breve))
            basic.pause(500)
        }
    } else if (clientes >= 1 && clientes <= 50) {
        basic.showIcon(IconNames.Yes)
        basic.pause(1000)
    } else {
        basic.showIcon(IconNames.Sad)
        basic.pause(1000)
    }
    basic.pause(1000)
    basic.clearScreen()
})
let clientes = 0
clientes = 50
basic.showNumber(clientes)
basic.showString("max.")
basic.pause(1000)
basic.clearScreen()
