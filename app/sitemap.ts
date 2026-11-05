import type {MetadataRoute} from 'next';
import {services} from '@/components/Footer';
export default function sitemap():MetadataRoute.Sitemap{const base=process.env.NEXT_PUBLIC_SITE_URL;if(!base)return [];return ['','about-us','our-services','areas-we-cover','contact-us',...services.map(([,slug])=>slug)].map(slug=>({url:new URL(slug?`/${slug}/`:'/',base).href,changeFrequency:'monthly',priority:slug?0.7:1}));}
