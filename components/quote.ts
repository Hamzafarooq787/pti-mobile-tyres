export function buildWhatsAppUrl(fields:Array<[string,string]>) {
 const labels:Record<string,string>={name:'Name',phone:'Phone',email:'Email',service:'Service',location:'Location / postcode',postcode:'Location / postcode',message:'Message',tyre_size:'Tyre size'};
 const text=['Hello PTI Mobile Tyres, I would like a quote.',...fields.map(([key,value])=>`${labels[key]||key.replace(/_/g,' ')}: ${value.trim()}`)].join('\n');
 return `https://wa.me/447777779365?text=${encodeURIComponent(text)}`;
}
