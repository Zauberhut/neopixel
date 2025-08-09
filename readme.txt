# NeoMatrix Extension for micro:bit

This MakeCode extension allows you to control a 16x16 NeoPixel matrix (WS2812) with serpentine (zigzag) wiring using blocks.

## Features

- Initialize the matrix on any micro:bit pin.
- Set pixels by (x, y) coordinates (0-15).
- Blocks for clear, show, and color selection.
- Handles zigzag addressing for serpentine wiring.

## Example

```blocks
neomatrix.init(DigitalPin.P0)
neomatrix.setPixel(0, 0, neomatrix.rgb(255, 0, 0)) // Top left pixel red
neomatrix.setPixel(15, 15, neomatrix.rgb(0, 0, 255)) // Bottom right pixel blue
neomatrix.show()
```

## Wiring

- The matrix must be connected in a serpentine (zigzag) layout:
    - Even rows: left to right
    - Odd rows: right to left

## Installation

1. Go to [MakeCode for micro:bit](https://makecode.microbit.org/).
2. Add this extension by copying the files or uploading to GitHub.

## License

MIT
