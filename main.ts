input.onButtonPressed(Button.A, function () {
    // si se presiona el botón A
    // disminuya en una unidad la cantidad de clientes
    clientes += -1
    // muestre el número de clientes
    basic.showNumber(clientes)
    // pausa de 1 segundo
    basic.pause(1000)
    if (clientes >= 1 && clientes <= 50) {
        // si hay entre 1 y 50 clientes
        // muestre ícono de aforo ideal
        basic.showIcon(IconNames.Yes)
    } else {
        // si hay menos de 1 cliente
        // muestre ícono de que no hay clientela
        basic.showIcon(IconNames.Sad)
    }
    // pausa de 1 segundo
    basic.pause(1000)
    // limpiar pantalla
    basic.clearScreen()
})
input.onButtonPressed(Button.AB, function () {
    // si se presiona el boton A+B
    // muestre el número cero
    basic.showNumber(0)
    // restablecer la cuenta de clientes a cero
    clientes = 0
})
input.onButtonPressed(Button.B, function () {
    // si se presiona el botón B
    // aumente la cantidad de clientes en una unidad
    clientes += 1
    // muestre la cantidad actual de clientes
    basic.showNumber(clientes)
    // pausa de 1 segundo
    basic.pause(1000)
    if (clientes > 50) {
        // si se excede el aforo de 50 clientes
        // muestre símbolo de alerta
        basic.showLeds(`
            # . . . #
            . # . # .
            . . # . .
            . # . # .
            # . . . #
            `)
        for (let index = 0; index < 4; index++) {
            // reproduzca 4 veces el sonido de alerta
            music.playTone(262, music.beat(BeatFraction.Breve))
            // pausa de 500 milisegundos entre cada alarma
            basic.pause(500)
        }
    } else if (clientes >= 1 && clientes <= 50) {
        // si hay entre 1 y 50 clientes
        // muestre ícono de aforo ideal
        basic.showIcon(IconNames.Yes)
        // pausa de 1 segundo
        basic.pause(1000)
    } else {
        // muestre ícono de que no hay clientela
        basic.showIcon(IconNames.Sad)
        // pausa de 1 segundo
        basic.pause(1000)
    }
    // pausa de 1 segundo
    basic.pause(1000)
    // limpiar pantalla
    basic.clearScreen()
})
let clientes = 0
// inicialice clientes en 50
clientes = 50
// muestre la clientela actual (50)
basic.showNumber(clientes)
// completa la oración con la abreviatura de máximo
basic.showString("max.")
// pausa de 1 segundo
basic.pause(1000)
// limpiar pantalla
basic.clearScreen()
