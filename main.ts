input.onButtonPressed(Button.A, function () {
	
})
input.onGesture(Gesture.Shake, function () {
    crying.showImage(0)
    basic.pause(5000)
})
let crying: Image = null
let happy = images.createImage(`
    . . . . .
    . # . # .
    . . . . .
    # . . . #
    . # # # .
    `)
crying = images.createImage(`
    . # . # .
    # . . . #
    # . . . #
    . # # # .
    # . . . #
    `)
let sad = images.createImage(`
    . . . . .
    . # . # .
    . . . . .
    . # # # .
    # . . . #
    `)
