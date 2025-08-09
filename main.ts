/**
 * NeoMatrix Extension for 16x16 NeoPixel Matrix (Serpentine Wiring)
 * Author: Copilot
 * 
 * This extension allows controlling a 16x16 NeoPixel matrix in serpentine wiring.
 */

//% color=#00C0C0 icon="\uf00a" block="NeoMatrix"
namespace neomatrix {
    let strip: neopixel.Strip;
    const WIDTH = 16;
    const HEIGHT = 16;

    /**
     * Initialize the NeoMatrix on a given pin.
     * @param pin the pin the NeoPixel matrix is connected to
     */
    //% blockId="neomatrix_init" block="NeoMatrix at pin %pin"
    export function init(pin: DigitalPin): void {
        strip = neopixel.create(pin, WIDTH * HEIGHT, neopixel.NeoPixelMode.RGB);
        strip.clear();
        strip.show();
    }

    /**
     * Set pixel color at column, row
     * @param x column (0-15)
     * @param y row (0-15)
     * @param color color value
     */
    //% blockId="neomatrix_set_pixel" block="set pixel at x %x|y %y|to %color"
    //% x.min=0 x.max=15
    //% y.min=0 y.max=15
    //% color.shadow="colorNumberPicker"
    export function setPixel(x: number, y: number, color: number): void {
        if (!strip) return;
        let idx = xy2i(x, y);
        if (idx >= 0 && idx < WIDTH * HEIGHT) {
            strip.setPixelColor(idx, color);
        }
    }

    /**
     * Show the matrix (send the data to the strip)
     */
    //% blockId="neomatrix_show" block="show NeoMatrix"
    export function show(): void {
        if (!strip) return;
        strip.show();
    }

    /**
     * Clear the matrix
     */
    //% blockId="neomatrix_clear" block="clear NeoMatrix"
    export function clear(): void {
        if (!strip) return;
        strip.clear();
        strip.show();
    }

    /**
     * Convert matrix coordinates to strip index (serpentine)
     */
    function xy2i(x: number, y: number): number {
        // serpentine: even rows left->right, odd rows right->left
        if (y % 2 == 0) {
            return y * WIDTH + x;
        } else {
            return y * WIDTH + (WIDTH - 1 - x);
        }
    }

    /**
     * Make a color from red, green, blue values
     */
    //% blockId="neomatrix_rgb" block="red %red|green %green|blue %blue"
    //% red.min=0 red.max=255
    //% green.min=0 green.max=255
    //% blue.min=0 blue.max=255
    export function rgb(red: number, green: number, blue: number): number {
        return neopixel.rgb(red, green, blue);
    }
}
