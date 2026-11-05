# PTI Mobile Tyres

Next.js App Router website for PTI Mobile Tyres, Leeds. Built against the live Pro Mobile Tyres reference, using its page structure, typography, spacing, colours and CSS motion as the visual baseline. The earlier concept designs are not used.

## Run

Requires Node.js 22.6 or newer (Node.js 24 recommended).

```sh
npm ci
npm run dev
```

Production:

```sh
npm test
npm run check
npm run build
npm start
```

## Pages

Home, About Us, Our Services, Areas We Cover, Contact Us, Mobile Tyre Fitting, Mobile Tyre Fitter, Spare Wheel Fitting, Mobile Tyre Replacement, Locking Wheel Nut Removal, and Emergency Mobile Tyre Call-Outs.

## Content and implementation

- Shared React header, footer, mobile menu and floating contact controls.
- Static, sanitised section data in `content/`, rendered by server components. The reference's selector names have been changed to `reference-*`.
- Local CSS and fonts. No WordPress server, PHP, Elementor runtime, jQuery or reference-domain requests are needed to run the website.
- CSS car drive, spinning wheels, moving road, floating cards, pulses, phone shake, button shine, entrance effects and running text. React IntersectionObserver triggers scroll reveals, with reduced-motion support.
- All quote forms open a pre-filled WhatsApp message for `447777779365`. No form details are posted to a database or emailed.
- Phone `07777779365`, email `phonepti449@gmail.com`, office `512 Oakwood Lane, Leeds, LS9 6QX`.
- Text logo, favicon, homepage-snapshot Open Graph image, metadata and security headers.

## Removed claims

Reference ratings, stars/review badges, accreditation and partner-logo artwork, years of experience, response-time figures, statistical counters and percentage progress bars have been removed. Their associated metric and partner-carousel widgets are not displayed. Unsupported round-the-clock claims are also removed. Process step numbers are instructional, not business statistics.

Reference service copy has been adapted for PTI. Coverage is limited to Leeds; other reference regions are not claimed. The reference currently hides its homepage coverage section at every breakpoint; that visibility is preserved. The Areas We Cover page shows Leeds.

## Before production deployment

Set `NEXT_PUBLIC_SITE_URL` to the actual HTTPS production origin and rebuild. This enables correct canonical links, absolute social-image URLs and the eleven-page sitemap. Without that setting the sitemap intentionally contains no production URLs and the local Open Graph base is localhost. No production domain was supplied.

## Validation

See `docs/BUILD_REPORT.md`, `docs/browser-qa.json`, and `docs/reference-audit.json`. Build and TypeScript checks pass. Six automated tests cover page structure, removed claims, WhatsApp encoding, asset existence, WebP sizes and form semantics. Desktop and narrow responsive checks cover every route.

The result is a close reference-based implementation, not a certified pixel-identical copy. Removing claims, changing the logo and business copy, adding the sixth service and the required floating controls intentionally changes parts of the rendered layout. Real-device testing and production PageSpeed measurement remain launch checks.
