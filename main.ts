input.onButtonPressed(Button.A, function () {
    basic.showString("Hero story")
})
input.onGesture(Gesture.ScreenUp, function () {
    basic.showString("Battle Mode")
})
input.onButtonPressed(Button.AB, function () {
    basic.showString("Last Story")
})
input.onButtonPressed(Button.B, function () {
    basic.showString("Dark Story")
})
input.onGesture(Gesture.Shake, function () {
    basic.showString("Chao Garden")
})
basic.showString("Sonic Adventure 2")
