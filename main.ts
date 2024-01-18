input.onPinTouchEvent(TouchPin.P1, input.buttonEventDown(), function () {
    if (spiel_gestartet) {
        reaktionszeit = input.runningTime() - startzeit
        spiel_gestartet = false
        pin = 2
    }
})
input.onPinTouchEvent(TouchPin.P0, input.buttonEventDown(), function () {
    if (spiel_gestartet) {
        reaktionszeit = input.runningTime() - startzeit
        spiel_gestartet = false
        pin = 1
    }
})
let startzeit = 0
let reaktionszeit = 0
let spiel_gestartet = false
let pin = 0
pin = 0
basic.forever(function () {
    spiel_gestartet = false
    basic.clearScreen()
    basic.pause(randint(1000, 5000))
    spiel_gestartet = true
    startzeit = input.runningTime()
    basic.showIcon(IconNames.Heart, 1000)
    if (pin != 0) {
        basic.showNumber(pin, 600)
        basic.clearScreen()
        basic.showNumber(reaktionszeit, 100)
        pin = 0
    } else {
        basic.showIcon(IconNames.No, 600)
    }
})
