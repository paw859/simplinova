Simplinova — Brand guide

Palette
- Logo Teal: `#3D5A6B` (primary brand mark)
- Deep Ocean: `#1E3A4C` (headers / footer / strong backgrounds)
- Accent Coral: `#FF6B6B` (primary CTAs / badges)
- Accent Warm (alt): `#F97316` (optional secondary CTA)
- Soft Mint: `#A8E6CF` (trust badges / success accents)

Neutrals
- Background (page): `#FAFBFC` (off-white)
- Light Gray: `#F3F4F6` (card/section backgrounds)
- Text Dark: `#1F2937` (primary text)
- Text Light: `#6B7280` (secondary text)

Typography
- Headings (display): Poppins (loaded via Google Fonts)
- Body: Inter

Usage guidance
- Header/Footer: use Deep Ocean for backgrounds; use white or very light text
- Primary Buttons/CTAs: use Accent Coral (`#FF6B6B`) with white text; hover state uses Logo Teal
- Secondary Buttons: transparent or light background with coral text or bordered
- Hero: use a gradient from Deep Ocean -> Logo Teal
- Backgrounds: alternate between `#FAFBFC` (page) and `#F3F4F6` for section cards
- Trust badges: Soft Mint backgrounds with Deep Ocean icons/text

Accessibility
- Ensure buttons meet color contrast for normal and hover states; coral (#FF6B6B) on white has good contrast for CTAs.
- Primary text uses `#1F2937` for high contrast against off-white background.

Files updated
- `simplinova-theme/assets/simplinova-styles.css` — palette tokens, header, hero, footer, buttons, trust badges
- `simplinova-theme/layout/theme.liquid` — Google Fonts for Poppins + Inter

Next steps
- Swap product images and hero copy to match brand voice.
- Test the site with `shopify theme dev` to verify colors and contrast in the live preview.
- Iterate on specific components (product cards, collection pages) if you'd like tighter brand tuning.
