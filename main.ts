function setChristmasColors () {
    numVariations = 6
    for (let index = 0; index <= pixels - 1; index++) {
        for (let index = 0; index <= 29; index++) {
            if (index == 0) {
                strip.setPixelColor(0, neopixel.rgb(255, 172, 0))
            } else if (index == 1) {
                strip.setPixelColor(0, neopixel.rgb(255 / numVariations * 5, 172 / numVariations * 5, 255 / numVariations * 1))
            } else if (index == 2) {
                strip.setPixelColor(0, neopixel.rgb(255 / numVariations * 4, 172 / numVariations * 4, 255 / numVariations * 2))
            } else if (index == 3) {
                strip.setPixelColor(0, neopixel.rgb(255 / numVariations * 3, 172 / numVariations * 3, 255 / numVariations * 3))
            } else if (index == 4) {
                strip.setPixelColor(0, neopixel.rgb(255 / numVariations * 2, 172 / numVariations * 2, 255 / numVariations * 4))
            } else if (index == 5) {
                strip.setPixelColor(0, neopixel.rgb(255 / numVariations * 1, 172 / numVariations * 1, 255 / numVariations * 5))
            } else if (index == 6) {
                strip.setPixelColor(0, neopixel.rgb(0, 0, 255))
            } else if (index == 7) {
                strip.setPixelColor(0, neopixel.rgb(255 / numVariations * 1, 255 / numVariations * 1, 255 / numVariations * 5))
            } else if (index == 8) {
                strip.setPixelColor(0, neopixel.rgb(255 / numVariations * 2, 255 / numVariations * 2, 255 / numVariations * 4))
            } else if (index == 9) {
                strip.setPixelColor(0, neopixel.rgb(255 / numVariations * 3, 255 / numVariations * 3, 255 / numVariations * 3))
            } else if (index == 10) {
                strip.setPixelColor(0, neopixel.rgb(255 / numVariations * 4, 255 / numVariations * 4, 255 / numVariations * 2))
            } else if (index == 11) {
                strip.setPixelColor(0, neopixel.rgb(255 / numVariations * 5, 255 / numVariations * 5, 255 / numVariations * 1))
            } else if (index == 12) {
                strip.setPixelColor(0, neopixel.rgb(255, 255, 0))
            } else if (index == 13) {
                strip.setPixelColor(0, neopixel.rgb(255 / numVariations * 5, 255 / numVariations * 5, 255 / numVariations * 0))
            } else if (index == 14) {
                strip.setPixelColor(0, neopixel.rgb(255 / numVariations * 3, 255 / numVariations * 4, 255 / numVariations * 0))
            } else if (index == 15) {
                strip.setPixelColor(0, neopixel.rgb(255 / numVariations * 2, 255 / numVariations * 3, 255 / numVariations * 0))
            } else if (index == 16) {
                strip.setPixelColor(0, neopixel.rgb(255 / numVariations * 3, 255 / numVariations * 5, 255 / numVariations * 0))
            } else if (index == 17) {
                strip.setPixelColor(0, neopixel.rgb(255 / numVariations * 5, 255 / numVariations * 1, 255 / numVariations * 0))
            } else if (index == 18) {
                strip.setPixelColor(0, neopixel.rgb(255, 0, 0))
            } else if (index == 19) {
                strip.setPixelColor(0, neopixel.rgb(255 / numVariations * 5, 255 / numVariations * 1, 255 / numVariations * 0))
            } else if (index == 20) {
                strip.setPixelColor(0, neopixel.rgb(255 / numVariations * 4, 255 / numVariations * 2, 255 / numVariations * 0))
            } else if (index == 21) {
                strip.setPixelColor(0, neopixel.rgb(255 / numVariations * 3, 255 / numVariations * 3, 255 / numVariations * 0))
            } else if (index == 22) {
                strip.setPixelColor(0, neopixel.rgb(255 / numVariations * 2, 255 / numVariations * 4, 255 / numVariations * 0))
            } else if (index == 23) {
                strip.setPixelColor(0, neopixel.rgb(255 / numVariations * 1, 255 / numVariations * 5, 255 / numVariations * 0))
            } else if (index == 24) {
                strip.setPixelColor(0, neopixel.rgb(0, 255, 0))
            } else if (index == 25) {
                strip.setPixelColor(0, neopixel.rgb(255 / numVariations * 1, 255 - (255 - 172) / numVariations * 1, 255 / numVariations * 0))
            } else if (index == 26) {
                strip.setPixelColor(0, neopixel.rgb(255 / numVariations * 2, 255 - (255 - 172) / numVariations * 2, 255 / numVariations * 0))
            } else if (index == 27) {
                strip.setPixelColor(0, neopixel.rgb(255 / numVariations * 3, 255 - (255 - 172) / numVariations * 3, 255 / numVariations * 0))
            } else if (index == 28) {
                strip.setPixelColor(0, neopixel.rgb(255 / numVariations * 4, 255 - (255 - 172) / numVariations * 4, 255 / numVariations * 0))
            } else {
                strip.setPixelColor(0, neopixel.rgb(255 / numVariations * 5, 255 - (255 - 172) / numVariations * 5, 255 / numVariations * 0))
            }
            strip.show()
            strip.rotate(1)
            basic.pause(100)
        }
    }
    effect = 1
}
function CandyCane () {
    numVariations = 13
    for (let index = 0; index <= pixels - 1; index++) {
        for (let index = 0; index <= 29; index++) {
            if (index == 0) {
                strip.setPixelColor(0, neopixel.rgb(255, 0, 0))
            } else if (index == 1) {
                strip.setPixelColor(0, neopixel.rgb(255, 0, 0))
            } else if (index == 2) {
                strip.setPixelColor(0, neopixel.rgb(255, 0, 0))
            } else if (index == 3) {
                strip.setPixelColor(0, neopixel.rgb(255 / numVariations * 12, 172 / numVariations * 1, 255 / numVariations * 1))
            } else if (index == 4) {
                strip.setPixelColor(0, neopixel.rgb(255 / numVariations * 11, 172 / numVariations * 2, 255 / numVariations * 2))
            } else if (index == 5) {
                strip.setPixelColor(0, neopixel.rgb(255 / numVariations * 10, 172 / numVariations * 3, 255 / numVariations * 3))
            } else if (index == 6) {
                strip.setPixelColor(0, neopixel.rgb(255 / numVariations * 9, 172 / numVariations * 4, 255 / numVariations * 4))
            } else if (index == 7) {
                strip.setPixelColor(0, neopixel.rgb(255 / numVariations * 8, 255 / numVariations * 5, 255 / numVariations * 5))
            } else if (index == 8) {
                strip.setPixelColor(0, neopixel.rgb(255 / numVariations * 7, 255 / numVariations * 6, 255 / numVariations * 6))
            } else if (index == 9) {
                strip.setPixelColor(0, neopixel.rgb(255 / numVariations * 7, 255 / numVariations * 7, 255 / numVariations * 7))
            } else if (index == 10) {
                strip.setPixelColor(0, neopixel.rgb(255 / numVariations * 8, 255 / numVariations * 8, 255 / numVariations * 8))
            } else if (index == 11) {
                strip.setPixelColor(0, neopixel.rgb(255 / numVariations * 9, 255 / numVariations * 9, 255 / numVariations * 9))
            } else if (index == 12) {
                strip.setPixelColor(0, neopixel.rgb(255 / numVariations * 10, 255 / numVariations * 10, 255 / numVariations * 10))
            } else if (index == 13) {
                strip.setPixelColor(0, neopixel.rgb(255 / numVariations * 11, 255 / numVariations * 11, 255 / numVariations * 11))
            } else if (index == 14) {
                strip.setPixelColor(0, neopixel.rgb(255 / numVariations * 12, 255 / numVariations * 12, 255 / numVariations * 12))
            } else if (index == 15) {
                strip.setPixelColor(0, neopixel.rgb(255, 255, 255))
            } else if (index == 16) {
                strip.setPixelColor(0, neopixel.rgb(255 / numVariations * 12, 255 / numVariations * 12, 255 / numVariations * 12))
            } else if (index == 17) {
                strip.setPixelColor(0, neopixel.rgb(255 / numVariations * 11, 255 / numVariations * 11, 255 / numVariations * 11))
            } else if (index == 18) {
                strip.setPixelColor(0, neopixel.rgb(255 / numVariations * 10, 255 / numVariations * 10, 255 / numVariations * 10))
            } else if (index == 19) {
                strip.setPixelColor(0, neopixel.rgb(255 / numVariations * 9, 255 / numVariations * 9, 255 / numVariations * 9))
            } else if (index == 20) {
                strip.setPixelColor(0, neopixel.rgb(255 / numVariations * 8, 255 / numVariations * 8, 255 / numVariations * 8))
            } else if (index == 21) {
                strip.setPixelColor(0, neopixel.rgb(255 / numVariations * 7, 255 / numVariations * 7, 255 / numVariations * 7))
            } else if (index == 22) {
                strip.setPixelColor(0, neopixel.rgb(255 / numVariations * 7, 255 / numVariations * 6, 255 / numVariations * 6))
            } else if (index == 23) {
                strip.setPixelColor(0, neopixel.rgb(255 / numVariations * 8, 255 / numVariations * 5, 255 / numVariations * 5))
            } else if (index == 24) {
                strip.setPixelColor(0, neopixel.rgb(255 / numVariations * 9, 255 / numVariations * 6, 255 / numVariations * 4))
            } else if (index == 25) {
                strip.setPixelColor(0, neopixel.rgb(255 / numVariations * 10, 255 / numVariations * 3, 255 / numVariations * 3))
            } else if (index == 26) {
                strip.setPixelColor(0, neopixel.rgb(255 / numVariations * 11, 255 / numVariations * 2, 255 / numVariations * 2))
            } else if (index == 27) {
                strip.setPixelColor(0, neopixel.rgb(255 / numVariations * 12, 255 / numVariations * 1, 255 / numVariations * 1))
            } else if (index == 28) {
                strip.setPixelColor(0, neopixel.rgb(255, 0, 0))
            } else {
                strip.setPixelColor(0, neopixel.rgb(255, 0, 0))
            }
            strip.show()
            strip.rotate(1)
            basic.pause(100)
        }
    }
    effect = 1
}
input.onButtonPressed(Button.A, function () {
    strip.clear()
    CandyCane()
    effect = 0
})
input.onButtonPressed(Button.B, function () {
    strip.clear()
    setChristmasColors()
    effect = 1
})
let numVariations = 0
let effect = 0
let strip: neopixel.Strip = null
let pixels = 0
pixels = 87
strip = neopixel.create(DigitalPin.P0, pixels, NeoPixelMode.RGB_RGB)
strip.setBrightness(255)
strip.easeBrightness()
effect = 100
basic.forever(function () {
    if (effect == 0 || effect == 1) {
        strip.rotate(1)
        strip.show()
        basic.pause(100)
    } else {
    	
    }
})
