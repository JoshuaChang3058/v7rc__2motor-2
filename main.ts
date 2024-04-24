function 左轉 () {
    sensors.DDMmotor(
    AnalogPin.P15,
    1,
    AnalogPin.P16,
    125
    )
    sensors.DDMmotor(
    AnalogPin.P13,
    1,
    AnalogPin.P14,
    125
    )
}
function 右轉 () {
    sensors.DDMmotor(
    AnalogPin.P15,
    0,
    AnalogPin.P16,
    125
    )
    sensors.DDMmotor(
    AnalogPin.P13,
    0,
    AnalogPin.P14,
    125
    )
}
V7RC.v7rcOnConnectedEvent(function () {
    basic.showIcon(IconNames.Yes)
})
function 快後 () {
    sensors.DDMmotor(
    AnalogPin.P15,
    0,
    AnalogPin.P16,
    240
    )
    sensors.DDMmotor(
    AnalogPin.P13,
    1,
    AnalogPin.P14,
    240
    )
}
V7RC.v7rcOnDisconnectedEvent(function () {
    basic.showIcon(IconNames.No)
})
function 快前 () {
    sensors.DDMmotor(
    AnalogPin.P15,
    1,
    AnalogPin.P16,
    240
    )
    sensors.DDMmotor(
    AnalogPin.P13,
    0,
    AnalogPin.P14,
    240
    )
}
input.onButtonPressed(Button.A, function () {
    basic.showString("tupez")
})
V7RC.v7rcRecvEvent(function () {
    if (V7RC.v7rcCommand(V7RC.commandType.type02)) {
        basic.showNumber(0)
        if (V7RC.v7rcChannelInt(V7RC.channel.channel01) >= 1600 && V7RC.v7rcChannelInt(V7RC.channel.channel01) < 1800) {
            basic.showNumber(1)
            前進()
        }
        if (V7RC.v7rcChannelInt(V7RC.channel.channel01) >= 1800) {
            basic.showNumber(2)
            快前()
            if (V7RC.v7rcChannelInt(V7RC.channel.channel01) <= 1400 && V7RC.v7rcChannelInt(V7RC.channel.channel01) > 1200) {
                basic.showNumber(3)
                後退()
            }
            if (V7RC.v7rcChannelInt(V7RC.channel.channel01) <= 1200) {
                basic.showNumber(4)
                快後()
            }
            if (V7RC.v7rcChannelInt(V7RC.channel.channel01) < 1600 && V7RC.v7rcChannelInt(V7RC.channel.channel01) > 1400) {
                basic.showNumber(0)
                停止()
            }
            if (V7RC.v7rcChannelInt(V7RC.channel.channel02) >= 1950) {
                右轉()
            }
            if (V7RC.v7rcChannelInt(V7RC.channel.channel02) >= 1700 && V7RC.v7rcChannelInt(V7RC.channel.channel02) < 1950) {
                慢右()
            }
            if (V7RC.v7rcChannelInt(V7RC.channel.channel02) <= 1050) {
                左轉()
            }
            if (V7RC.v7rcChannelInt(V7RC.channel.channel02) > 1050 && V7RC.v7rcChannelInt(V7RC.channel.channel02) < 1300) {
                慢左()
            }
            if (V7RC.v7rcChannelInt(V7RC.channel.channel03) >= 1800) {
                pins.servoWritePin(AnalogPin.P1, 30)
                pins.servoWritePin(AnalogPin.P12, 150)
            }
            if (V7RC.v7rcChannelInt(V7RC.channel.channel03) <= 1200) {
                pins.servoWritePin(AnalogPin.P1, 105)
                pins.servoWritePin(AnalogPin.P12, 75)
            }
            if (V7RC.v7rcChannelInt(V7RC.channel.channel04) >= 1900) {
                pins.servoWritePin(AnalogPin.P1, 90)
                pins.servoWritePin(AnalogPin.P12, 90)
            }
        }
    }
})
function 後退 () {
    sensors.DDMmotor(
    AnalogPin.P15,
    0,
    AnalogPin.P16,
    120
    )
    sensors.DDMmotor(
    AnalogPin.P13,
    1,
    AnalogPin.P14,
    120
    )
}
function 前進 () {
    sensors.DDMmotor(
    AnalogPin.P15,
    1,
    AnalogPin.P16,
    120
    )
    sensors.DDMmotor(
    AnalogPin.P13,
    0,
    AnalogPin.P14,
    120
    )
}
function 慢左 () {
    sensors.DDMmotor(
    AnalogPin.P15,
    1,
    AnalogPin.P16,
    95
    )
    sensors.DDMmotor(
    AnalogPin.P13,
    1,
    AnalogPin.P14,
    95
    )
}
function 慢右 () {
    sensors.DDMmotor(
    AnalogPin.P15,
    0,
    AnalogPin.P16,
    95
    )
    sensors.DDMmotor(
    AnalogPin.P13,
    0,
    AnalogPin.P14,
    95
    )
}
function 停止 () {
    sensors.DDMmotor(
    AnalogPin.P15,
    0,
    AnalogPin.P16,
    0
    )
    sensors.DDMmotor(
    AnalogPin.P13,
    0,
    AnalogPin.P14,
    0
    )
}
bluetooth.startUartService()
basic.showIcon(IconNames.Heart)
pins.servoWritePin(AnalogPin.P1, 90)
pins.servoWritePin(AnalogPin.P12, 90)
