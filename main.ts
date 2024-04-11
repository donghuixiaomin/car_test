radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber == 1) {
        Microbit.MotorRun(Microbit.enMotors.M1, -60)
        Microbit.MotorRun(Microbit.enMotors.M2, 150)
    }
    if (receivedNumber == 2) {
        Microbit.MotorRun(Microbit.enMotors.M1, 60)
        Microbit.MotorRun(Microbit.enMotors.M2, 150)
    }
    if (receivedNumber == 3) {
        Microbit.MotorRun(Microbit.enMotors.M1, -60)
        Microbit.MotorRun(Microbit.enMotors.M2, -150)
    }
})
input.onButtonPressed(Button.A, function () {
    radio.sendNumber(1)
})
input.onButtonPressed(Button.AB, function () {
    radio.sendNumber(3)
})
input.onButtonPressed(Button.B, function () {
    radio.sendNumber(2)
})
radio.setGroup(20)
basic.forever(function () {
	
})
