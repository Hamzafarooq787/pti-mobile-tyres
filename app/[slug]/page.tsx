import type {Metadata} from 'next';
import {notFound} from 'next/navigation';
import ReferencePage from '@/components/ReferencePage';
import {services} from '@/components/Footer';
const names:Record<string,string>={'about-us':'About Us','our-services':'Our Services','areas-we-cover':'Areas We Cover','contact-us':'Contact Us',...Object.fromEntries(services.map(([name,slug])=>[slug,name]))};
export const dynamicParams=false;
export function generateStaticParams(){return Object.keys(names).map(slug=>({slug}))}
export async function generateMetadata({params}:{params:Promise<{slug:string}>}):Promise<Metadata>{const {slug}=await params;return {title:names[slug],...(process.env.NEXT_PUBLIC_SITE_URL?{alternates:{canonical:`/${slug}/`}}:{}),description:`${names[slug]} from PTI Mobile Tyres in Leeds. Mobile tyre assistance at your home, work or roadside. Call 07777779365 or enquire on WhatsApp.`}}
export default async function Page({params}:{params:Promise<{slug:string}>}){const {slug}=await params;if(!names[slug])notFound();const content=await import(`@/content/${slug}.json`);return <ReferencePage content={content.default}/>}
