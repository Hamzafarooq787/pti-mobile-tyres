import type { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ContactControls from '@/components/ContactControls';
import './globals.css';
import styles from '@/content/styles.json';
export const metadata: Metadata = {
 title:{default:'PTI Mobile Tyres | Mobile Tyre Fitting in Leeds',template:'%s | PTI Mobile Tyres'},
 metadataBase:new URL(process.env.NEXT_PUBLIC_SITE_URL||'http://localhost:3000'),
 ...(process.env.NEXT_PUBLIC_SITE_URL?{alternates:{canonical:'/'}}:{}),
 openGraph:{title:'PTI Mobile Tyres | Mobile Tyre Fitting in Leeds',description:'Mobile tyre fitting and replacement at your location in Leeds.',type:'website',locale:'en_GB',images:[{url:'/og-image.webp',width:1200,height:630,alt:'PTI Mobile Tyres homepage'}]},
 twitter:{card:'summary_large_image',images:['/og-image.webp']},
 description:'Mobile tyre fitting, replacement, spare wheel fitting and locking wheel nut removal in Leeds. Call PTI Mobile Tyres on 07777779365.',
 robots:{index:true,follow:true}, icons:{icon:'/icon.svg'},
};
export default function RootLayout({children}:{children:React.ReactNode}) {
 return <html lang="en-GB"><head><link rel="stylesheet" href="/styles/fonts.css"/>{styles.map(s=><link key={s} rel="stylesheet" href={s}/>)}</head><body className="reference-kit-30 reference-default reference-page"><a className="skip-link" href="#content">Skip to content</a><Header/><main id="content">{children}</main><script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify({'@context':'https://schema.org','@type':'AutomotiveBusiness',name:'PTI Mobile Tyres',telephone:'+447777779365',email:'phonepti449@gmail.com',address:{'@type':'PostalAddress',streetAddress:'512 Oakwood Lane',addressLocality:'Leeds',postalCode:'LS9 6QX',addressCountry:'GB'},areaServed:{'@type':'City',name:'Leeds'}})}}/><Footer/><ContactControls/></body></html>;
}
