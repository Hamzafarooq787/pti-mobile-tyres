import type {MetadataRoute} from 'next';
import {services} from '@/components/Footer';
import {siteUrl} from '@/lib/site-url';
export default function sitemap():MetadataRoute.Sitemap{return ['','about-us','our-services','areas-we-cover','contact-us',...services.map(([,slug])=>slug)].map(slug=>({url:new URL(slug?`/${slug}/`:'/',siteUrl).href,changeFrequency:'monthly',priority:slug?0.7:1}));}
