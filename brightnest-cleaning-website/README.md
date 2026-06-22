# BrightNest Cleaning Website

A responsive static website for a US-focused professional cleaning service business.

## Files
- `index.html` – main website page
- `css/styles.css` – full responsive design styling
- `js/script.js` – mobile menu, scroll animation, hero image slideshow, testimonial slider, before/after slider, SMS estimate request form
- `assets/logo.svg` – editable SVG logo
- `assets/before.svg` and `assets/after.svg` – before-after sample graphics

## Latest UI improvements
- Mobile hero statistics are now compact in one balanced row.
- Hero image area now has 4 automatic cleaning-process slides.
- Service strip is more compact on mobile and desktop.
- Process section is reduced into compact cards.
- Testimonials now run in a 3.5 second slider to reduce page height.
- Footer spacing is reduced, especially on mobile.

## Customize these first
1. Replace business name: `BrightNest Cleaning`
2. Replace phone number in:
   - `index.html`
   - `js/script.js` → `const businessPhoneE164 = '+14155550138';`
3. Replace email and city in `index.html`
4. Replace sample testimonials with real customer reviews
5. Replace Unsplash image URLs with your own real cleaning work images when available

## How to run
Open `index.html` directly in Chrome, or upload the whole folder to Netlify.

## Netlify upload
1. Go to Netlify
2. Drag and drop the full folder or zip file
3. After deployment, connect your custom domain if required

## Notes
The estimate form opens the customer's SMS app with a ready message. This is better for US clients than WhatsApp-first booking. No backend or database is required.

WhatsApp is kept only as an optional contact link in the contact section. You can remove it if the business does not use WhatsApp.
