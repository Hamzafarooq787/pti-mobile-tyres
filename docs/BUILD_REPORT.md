# Build and verification report

## Reference audit

All 11 linked public pages were fetched and their section structure, selectors, styles, responsive media queries and animation hooks inspected. Every route was opened at desktop and narrow responsive widths. Representative desktop/full-page screenshots and mobile hero views were inspected. Responsive browser checks used 1363 CSS pixels on desktop and 340 CSS pixels through browser zoom on the narrow pass; this is responsive-layout inspection, not a physical-phone test. The reference also received a 454-pixel breakpoint pass during inspection.

The homepage has a phone strip, navigation, animated car hero, Why Choose Us, services, process, hidden coverage panel, contact/form, footer and bottom-left phone pill. Inner service pages use a photo collage, service marquee, benefit cards, information panels, process, related services, contact banner and enquiry form. About, Services, Areas and Contact have their own layouts. Page headings and source animation names are recorded in `reference-audit.json`.

## Implementation choices

Next.js App Router statically renders all 11 routes. The reference's sanitised section structure and local styles form the baseline. The app has no WordPress, Elementor, jQuery, analytics or tracking runtime. Server-rendered sections are parsed to React elements; native React components handle forms and shared navigation. All image, font and stylesheet dependencies are local.

The supplied PTI contacts replace the reference details. All six supplied services have routes, footer links and form choices; the homepage and Services listing include the sixth service. Unverified ratings, accreditation/partner badges, response-time figures, experience totals, numerical counters and percentage bars were removed. Associated metric animation and logo carousel widgets were removed with those claims. CSS car/road/wheel motion, float, pulse, shine, shake, entrance reveals and the running service marquee remain. Reduced-motion preferences are respected.

The reference's hidden coverage panel remains hidden. PTI's coverage page lists Leeds only. Other reference regions are not carried over. No unsupported opening hours are asserted.

## Checks completed

- Production Next.js build and TypeScript check.
- Six automated tests, including every route's H1, claims exclusion, assets and form semantics.
- All 11 routes at desktop and narrow widths: no horizontal document overflow, one H1, no blank `#` links.
- Mobile menu opens/closes and exposes the expected links.
- Phone and email destinations checked; WhatsApp URL encoding checked automatically.
- Browser form test opened a WhatsApp handoff. The external application protocol was blocked by browser policy, so the WhatsApp app itself was not tested and no message was sent.
- Local photographs are WebP and less than 200 KB each.
- Production snapshot saved as the Open Graph image.

## Limits and launch configuration

This is not a pixel-diff certification or an exhaustive frame-by-frame animation comparison. The source's reveal effects and dynamic timing mean a screenshot can capture a different animation phase. Required PTI changes also prevent literal pixel equivalence.

Set `NEXT_PUBLIC_SITE_URL` to the real production origin and rebuild before deployment. Canonical URLs and sitemap production entries are withheld until then. No hosting deployment or domain changes were requested. Physical devices, production PageSpeed, Google indexing and real WhatsApp app handoff remain launch checks.
