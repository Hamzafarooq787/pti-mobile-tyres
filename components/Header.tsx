'use client';
import Image from 'next/image';
import Link from 'next/link';
import {usePathname} from 'next/navigation';
import {useState} from 'react';
export const navigation=[['Home','/'],['About Us','/about-us/'],['Our Services','/our-services/'],['Areas We Cover','/areas-we-cover/'],['Mobile Tyre Fitting','/mobile-tyre-fitting/'],['Contact Us','/contact-us/']];
export default function Header(){const [open,setOpen]=useState(false);const pathname=usePathname();return <header className="site-header"><div className="phone-strip"><a href="tel:07777779365">07777779365</a><span>We come to you in 20–30 minutes</span></div><div className="navigation-row"><Link href="/" className="brand" aria-label="PTI Mobile Tyres home" onClick={()=>setOpen(false)}><Image src="/pti-mobile-tyres-logo.webp" alt="PTI Mobile Tyres" width={201} height={67} priority className="brand-logo"/><span className="sr-only">PTI Mobile Tyres</span></Link><button type="button" className="menu-toggle" aria-label={open?'Close menu':'Open menu'} aria-expanded={open} aria-controls="main-navigation" onClick={()=>setOpen(!open)}><svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
  <path d={open ? 'M6 6l12 12M18 6 6 18' : 'M3 6h18M3 12h18M3 18h18'} stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
</svg><span>{open ? 'Close' : 'Menu'}</span></button><nav id="main-navigation" aria-label="Main navigation" className={open?'open':''}>{navigation.map(([title,url])=><Link key={url} href={url} aria-current={pathname.replace(/\/$/,'')===url.replace(/\/$/,'')?'page':undefined} onClick={()=>setOpen(false)}>{title}</Link>)}</nav></div></header>}
