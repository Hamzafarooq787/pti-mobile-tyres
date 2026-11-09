import Image from 'next/image';
import content from '@/content/home.json';
import ReferencePage from '@/components/ReferencePage';

const gallery = [
  ['pti-mobile-tyres-van-side', 'Side profile of the PTI Mobile Tyres service van'],
  ['pti-mobile-tyre-fitting-van-leeds', 'Open PTI service van beside a blue car'],
  ['pti-night-tyre-callout-leeds', 'PTI night call-out beside a red car'],
  ['pti-mobile-tyres-van-front', 'PTI logo on the front of the service van'],
  ['pti-home-tyre-fitting-callout-leeds', 'PTI van on a residential tyre fitting call-out'],
  ['pti-van-timber-garage-leeds', 'PTI service van beside a timber garage'],
  ['pti-van-amber-lights-leeds', 'PTI van with its amber lights on under a bridge'],
  ['pti-tyre-service-van-roadside', 'Rear view of a PTI service van parked by the road'],
  ['pti-van-rear-safety-markings', 'Reflective safety markings on the PTI van rear doors'],
  ['pti-van-residential-driveway-leeds', 'PTI service van parked in a residential driveway'],
];

export default function Home() {
  return (
    <>
      <ReferencePage content={content} />
      <section className="pti-photo-gallery" id="photo-gallery" aria-labelledby="photo-gallery-title">
        <h2 id="photo-gallery-title">PTI Mobile Tyres <span>on the Job</span></h2>
        <div className="pti-photo-gallery-grid">
          {gallery.map(([name, alt]) => {
            const src = `/media/${name}.webp`;
            return (
              <a key={name} href={src} target="_blank" rel="noopener noreferrer" aria-label={`Open full photo: ${alt} (new tab)`}>
                <Image src={src} alt={alt} width={960} height={720} sizes="(max-width: 900px) 50vw, (max-width: 1280px) 20vw, 240px" loading="lazy" />
              </a>
            );
          })}
        </div>
      </section>
    </>
  );
}
