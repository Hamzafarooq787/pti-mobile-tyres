import type { Metadata, Viewport } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ContactControls from '@/components/ContactControls';
import './globals.css';
import styles from '@/content/styles.json';
import {siteUrl} from '@/lib/site-url';

const socialImage = {
 url: 'https://pti-mobile-tyres.vercel.app/og-image-v2.jpg',
 width: 1200,
 height: 630,
 alt: 'PTI Mobile Tyres | Mobile Tyre Fitting in Leeds',
};

export const viewport: Viewport = {themeColor: '#DB010D'};
export const metadata: Metadata = {
 title:{default:'PTI Mobile Tyres | Mobile Tyre Fitting in Leeds',template:'%s | PTI Mobile Tyres'},
 metadataBase:new URL(siteUrl),
 alternates:{canonical:'/'},
 openGraph:{title:'PTI Mobile Tyres | Mobile Tyre Fitting in Leeds',description:'Mobile tyre fitting and replacement at your location in Leeds.',type:'website',locale:'en_GB',images:[socialImage]},
 twitter:{card:'summary_large_image',images:[socialImage]},
 description:'Mobile tyre fitting, replacement, spare wheel fitting and locking wheel nut removal in Leeds. Call PTI Mobile Tyres on 07777779365.',
 robots:{index:true,follow:true},
 icons: {
  icon: [
   {url: '/favicon.ico', sizes: '16x16 32x32 48x48', type: 'image/x-icon'},
   {url: '/icon.png', sizes: '512x512', type: 'image/png'},
  ],
  apple: {url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png'},
 },
};
export default function RootLayout({children}:{children:React.ReactNode}) {
 return <html lang="en-GB"><head><link rel="stylesheet" href="/styles/fonts.css"/>{styles.map(s=><link key={s} rel="stylesheet" href={s}/>)}</head><body className="reference-kit-30 reference-default reference-page"><a className="skip-link" href="#content">Skip to content</a><Header/><main id="content">{children}</main><script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify({'@context':'https://schema.org','@type':'AutomotiveBusiness',name:'PTI Mobile Tyres',telephone:'+447777779365',email:'phonepti449@gmail.com',address:{'@type':'PostalAddress',streetAddress:'512 Oakwood Lane',addressLocality:'Leeds',postalCode:'LS9 6QX',addressCountry:'GB'},areaServed:{'@type':'City',name:'Leeds'}})}}/><Footer/><ContactControls/></body></html>;
}
