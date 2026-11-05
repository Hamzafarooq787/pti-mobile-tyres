'use client';
import type {FormEvent} from 'react';
import {buildWhatsAppUrl} from '@/components/quote';
export default function QuoteForm({children,className}:{children:React.ReactNode,className?:string}){function submit(event:FormEvent<HTMLFormElement>){event.preventDefault();const form=event.currentTarget;if(!form.reportValidity())return;const data=new FormData(form);const fields=Array.from(data.entries()).filter(([key,value])=>!key.startsWith('_')&&typeof value==='string'&&value.trim()).map(([key,value])=>[key,String(value)] as [string,string]);window.open(buildWhatsAppUrl(fields),'_blank','noopener,noreferrer');}return <form className={className} data-pti-quote="true" onSubmit={submit}>{children}</form>}
