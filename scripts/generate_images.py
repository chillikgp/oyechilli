import os
from PIL import Image, ImageDraw, ImageFont

os.makedirs("src/assets/icons", exist_ok=True)
os.makedirs("src/assets/images", exist_ok=True)

def draw_chilli(draw, offset_x, offset_y, scale=1.0):
    # Chilli stem (green)
    stem_width = max(2, int(4 * scale))
    draw.arc([offset_x + 10 * scale, offset_y, offset_x + 36 * scale, offset_y + 24 * scale], start=180, end=300, fill="#15803D", width=stem_width)
    
    # Chilli body (chilli red)
    points = [
        (offset_x + 16 * scale, offset_y + 12 * scale),
        (offset_x + 28 * scale, offset_y + 16 * scale),
        (offset_x + 34 * scale, offset_y + 30 * scale),
        (offset_x + 30 * scale, offset_y + 45 * scale),
        (offset_x + 18 * scale, offset_y + 56 * scale),
        (offset_x + 12 * scale, offset_y + 54 * scale),
        (offset_x + 15 * scale, offset_y + 40 * scale),
        (offset_x + 16 * scale, offset_y + 24 * scale),
    ]
    draw.polygon(points, fill="#D93829")

# 1. Favicon PNG (192x192)
img_fav = Image.new("RGBA", (192, 192), (250, 247, 242, 255))
draw_fav = ImageDraw.Draw(img_fav)
# Draw circular background
draw_fav.ellipse([8, 8, 184, 184], fill="#FAF7F2", outline="#E8E2D9", width=4)
# Draw chilli centered
draw_chilli(draw_fav, offset_x=48, offset_y=40, scale=2.0)
img_fav.save("src/assets/icons/favicon.png", "PNG")

# 2. Apple Touch Icon (180x180)
img_apple = Image.new("RGBA", (180, 180), (250, 247, 242, 255))
draw_apple = ImageDraw.Draw(img_apple)
draw_chilli(draw_apple, offset_x=42, offset_y=34, scale=1.9)
img_apple.save("src/assets/icons/apple-touch-icon.png", "PNG")

# 3. OG Image PNG (1200x630)
img_og = Image.new("RGBA", (1200, 630), "#FAF7F2")
draw_og = ImageDraw.Draw(img_og)

# Inner card
draw_og.rounded_rectangle([40, 40, 1160, 590], radius=32, fill="#FFFFFF", outline="#E8E2D9", width=2)
# Background decorative circles
draw_og.ellipse([920, 80, 1120, 280], fill="#FDF1EE")
draw_og.ellipse([860, 320, 1060, 520], fill="#FEF3C7")

# Try to load Helvetica or Arial font
try:
    font_brand = ImageFont.truetype("/System/Library/Fonts/Helvetica.ttc", 46)
    font_pill = ImageFont.truetype("/System/Library/Fonts/Helvetica.ttc", 20)
    font_h1 = ImageFont.truetype("/System/Library/Fonts/Helvetica.ttc", 60)
    font_sub = ImageFont.truetype("/System/Library/Fonts/Helvetica.ttc", 26)
    font_prod = ImageFont.truetype("/System/Library/Fonts/Helvetica.ttc", 22)
    font_domain = ImageFont.truetype("/System/Library/Fonts/Helvetica.ttc", 22)
except Exception:
    font_brand = font_pill = font_h1 = font_sub = font_prod = font_domain = ImageFont.load_default()

# Logo & Wordmark
draw_chilli(draw_og, offset_x=100, offset_y=90, scale=1.4)
draw_og.text((170, 102), "Oye Chilli", fill="#1C1917", font=font_brand)

# Studio Pill
draw_og.rounded_rectangle([100, 195, 480, 240], radius=22, fill="#FAF7F2", outline="#E8E2D9", width=1)
draw_og.ellipse([118, 212, 130, 224], fill="#D93829")
draw_og.text((142, 206), "Independent Studio · Mumbai, India", fill="#57534E", font=font_pill)

# Headline
draw_og.text((100, 280), "A little spice. A lot of possibility.", fill="#1C1917", font=font_h1)

# Supporting copy
draw_og.text((100, 365), "We make playful apps and useful digital tools for everyday life.", fill="#57534E", font=font_sub)

# Product tags
# Natkhat
draw_og.rounded_rectangle([100, 450, 300, 506], radius=28, fill="#FDF1EE", outline="#F7CBC4", width=2)
draw_og.ellipse([120, 471, 134, 485], fill="#E05A47")
draw_og.text((148, 465), "Natkhat", fill="#1C1917", font=font_prod)

# huhu!
draw_og.rounded_rectangle([320, 450, 490, 506], radius=28, fill="#FFFBEB", outline="#FDE68A", width=2)
draw_og.ellipse([340, 471, 354, 485], fill="#D97706")
draw_og.text((368, 465), "huhu!", fill="#1C1917", font=font_prod)

# Pickal
draw_og.rounded_rectangle([510, 450, 680, 506], radius=28, fill="#EFF6FF", outline="#BFDBFE", width=2)
draw_og.ellipse([530, 471, 544, 485], fill="#2563EB")
draw_og.text((558, 465), "Pickal", fill="#1C1917", font=font_prod)

# Domain Watermark
draw_og.text((950, 520), "oyechilli.com", fill="#78716C", font=font_domain)

img_og.save("src/assets/images/og-image.png", "PNG")
print("Assets generated successfully!")
