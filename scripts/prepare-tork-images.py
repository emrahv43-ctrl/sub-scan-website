"""Crop Tork GPR photos, remove background, place on SubScan-dark cards."""
from __future__ import annotations

from pathlib import Path

from PIL import Image, ImageDraw, ImageFilter
from rembg import remove

ASSETS = Path(
    r"C:\Users\Emrah Vural\.cursor\projects\c-Users-Emrah-Vural-gemini-antigravity-scratch-SubScan-Deskop\assets"
)
OUT = Path(__file__).resolve().parents[1] / "public" / "partners"
OUT.mkdir(parents=True, exist_ok=True)

SHOWROOM = ASSETS / (
    "c__Users_Emrah_Vural_AppData_Roaming_Cursor_User_workspaceStorage_"
    "empty-window_images_image-5c3b9507-3501-4807-b834-0d5c244eb704.png"
)
GREEN_UNITS = ASSETS / (
    "c__Users_Emrah_Vural_AppData_Roaming_Cursor_User_workspaceStorage_"
    "empty-window_images_image-8e2319a0-ffb2-41fc-8350-dbb86215036d.png"
)

# left, top, right, bottom on source image
CROPS = {
    "tork-500mhz-cart": (SHOWROOM, (0, 320, 520, 1024)),
    "tork-300mhz-cart": (SHOWROOM, (140, 0, 576, 780)),
    "tork-300mhz-pro": (GREEN_UNITS, (380, 120, 1020, 620)),
}


def dark_card(w: int, h: int, accent: tuple[int, int, int]) -> Image.Image:
    card = Image.new("RGBA", (w, h), (10, 14, 20, 255))
    draw = ImageDraw.Draw(card)
    for i in range(h):
        t = i / max(h - 1, 1)
        r = int(10 + (18 - 10) * t)
        g = int(14 + (22 - 14) * t)
        b = int(20 + (32 - 20) * t)
        draw.line([(0, i), (w, i)], fill=(r, g, b, 255))
    glow = Image.new("RGBA", (w, h), (0, 0, 0, 0))
    gdraw = ImageDraw.Draw(glow)
    gdraw.ellipse((w * 0.15, h * 0.55, w * 0.85, h * 1.05), fill=(*accent, 40))
    glow = glow.filter(ImageFilter.GaussianBlur(28))
    return Image.alpha_composite(card, glow)


def process(name: str, src: Path, box: tuple[int, int, int, int], accent: tuple[int, int, int]) -> None:
    im = Image.open(src).convert("RGBA")
    cropped = im.crop(box)
    cut = remove(cropped)
    cut = cut.resize((int(cut.width * 0.92), int(cut.height * 0.92)), Image.Resampling.LANCZOS)

    pad = 48
    card_w = cut.width + pad * 2
    card_h = cut.height + pad * 2 + 20
    card = dark_card(card_w, card_h, accent)

    x = (card_w - cut.width) // 2
    y = pad
    card.alpha_composite(cut, (x, y))

    card.save(OUT / f"{name}.png", optimize=True)
    print(f"saved {OUT / f'{name}.png'}")


def main() -> None:
    process("tork-500mhz-cart", *CROPS["tork-500mhz-cart"], accent=(255, 140, 50))
    process("tork-300mhz-cart", *CROPS["tork-300mhz-cart"], accent=(34, 211, 238))
    process("tork-300mhz-pro", *CROPS["tork-300mhz-pro"], accent=(34, 211, 238))


if __name__ == "__main__":
    main()
