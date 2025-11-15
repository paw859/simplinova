# Simplinova — Shopify theme (scaffolded)

This workspace contains a custom Shopify theme scaffolded from Shopify's Dawn starter and preconfigured for the "Simplinova" dropshipping brand.

Next steps:

- Add this theme to your Shopify store or use `shopify theme serve` to preview locally.
- Edit `config/settings_data.json` to update colors, logo, and content if needed.

To preview locally (developer machine must have Shopify CLI installed and be logged in):

```bash
cd simplinova-theme
shopify theme serve
```

## Branding & logo

- **Logo file (brand asset):** `simplinova-theme/assets/simplinova-logo.svg` — this is your circular badge SVG that appears in the header when a theme logo isn't set.
- **Force brand asset:** The header section includes a checkbox setting named **"Always use brand logo asset"** (setting id: `force_brand_logo`). When enabled the header will inline `simplinova-logo.svg` even if a theme logo is configured in the theme editor.
- **Previewing the theme:** To see the logo in the header locally, run the preview command above from the `simplinova-theme` folder. If you want the brand asset to always show, enable the "Always use brand logo asset" checkbox in the header section settings (or set it via `config/settings_data.json`).
- **Brand styling:** The theme contains dedicated styles in `simplinova-theme/assets/simplinova-styles.css` that render the logo as a white circular badge with a soft shadow to match your supplied SVG.

If you'd like, I can now:

- Start `shopify theme serve` here and share the preview URL.
- Make any colour or typography changes across the theme to more closely match your brand palette.
- Run through the theme and create a short checklist of recommended brand-tuning items (hero copy, CTAs, trust badges, shipping/returns text).

