"""Shrink the repository's PNGs to a 256-colour palette (about 80% smaller).

Run after re-rendering an image from the brand library:
    python3 scripts/compress-images.py docs/assets/hero.png assets/screenshots/*.png
Photographic or gradient-heavy images (the README hero and diagram) are dithered so
gradients do not band; flat UI screenshots and icons are not.
"""
import sys

from PIL import Image

DITHERED = {"hero.png", "mcp-diagram.png"}

for path in sys.argv[1:]:
    image = Image.open(path)
    if path.rsplit("/", 1)[-1] in DITHERED:
        out = image.convert("RGB").quantize(256, method=Image.Quantize.MEDIANCUT, dither=Image.Dither.FLOYDSTEINBERG)
    elif image.mode == "RGBA":
        out = image.quantize(256, method=Image.Quantize.FASTOCTREE, dither=Image.Dither.NONE)
    else:
        out = image.convert("RGB").quantize(256, dither=Image.Dither.NONE)
    out.save(path, optimize=True)
    print(path)
