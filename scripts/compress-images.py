"""Shrink the repository's PNGs to a 256-colour palette (about 80% smaller).

Run after re-rendering an image from the brand library:
    python3 scripts/compress-images.py [--dither] <files>
Pass --dither for photographic or gradient-heavy images (the README hero and diagram) so
gradients do not band; leave it off for flat UI screenshots and icons.
"""
import sys

from PIL import Image

args = sys.argv[1:]
dither = "--dither" in args

for path in (arg for arg in args if arg != "--dither"):
    image = Image.open(path)
    if dither:
        out = image.convert("RGB").quantize(256, method=Image.Quantize.MEDIANCUT, dither=Image.Dither.FLOYDSTEINBERG)
    elif image.mode == "RGBA":
        out = image.quantize(256, method=Image.Quantize.FASTOCTREE, dither=Image.Dither.NONE)
    else:
        out = image.convert("RGB").quantize(256, dither=Image.Dither.NONE)
    out.save(path, optimize=True)
    print(path)
