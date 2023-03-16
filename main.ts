basic.showLeds(`
    . . . . .
    . . . . .
    . . # . .
    . # # # .
    . . . . .
    `)
basic.forever(function () {
    basic.showString("" + (input.temperature()))
})
