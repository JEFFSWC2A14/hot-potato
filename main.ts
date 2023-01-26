let timer = 0
input.onButtonPressed(Button.A, function () {
    timer = randint(0, 30)
    basic.showIcon(IconNames.Square)
    while (timer > 0) {
        timer += -1
        basic.pause(1000)
    }
    basic.showIcon(IconNames.Skull)
})
