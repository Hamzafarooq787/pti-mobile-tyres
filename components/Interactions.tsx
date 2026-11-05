'use client';

import { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const revealDirections: Record<string, { x?: number; y?: number }> = {
  fadeIn: {},
  fadeInUp: { y: 24 },
  fadeInLeft: { x: -24 },
  fadeInRight: { x: 24 },
};

const homeReveals = [
  '.mts-trust-content',
  '.mts-trust-right',
  '.pro-services__head',
  '.pro-services__grid',
  '.road-process-head',
  '.road-stop-content',
  '.mts-contact-info',
  '.mts-contact-form-side',
].join(', ');

export default function Interactions() {
  useEffect(() => {
    const main = document.querySelector('main');
    if (!main) return;

    gsap.registerPlugin(ScrollTrigger);
    const motion = gsap.matchMedia(main);

    motion.add('(prefers-reduced-motion: no-preference)', () => {
      const hero = main.querySelector('.hero-container');
      if (hero) {
        gsap.from('.hero-content', { opacity: 0, y: 18, duration: 0.8, ease: 'power2.out' });
        gsap.from('.hero-visual', { opacity: 0, y: 12, delay: 0.12, duration: 0.75, ease: 'power2.out' });

        const drive = gsap.timeline({
          scrollTrigger: { trigger: hero, toggleActions: 'play pause resume pause' },
        });
        drive
          .fromTo('.car-wrap', { x: -20 }, { x: 34, duration: 2.1, repeat: -1, yoyo: true, ease: 'sine.inOut' }, 0)
          .to('.car', { y: -1, duration: 0.11, repeat: -1, yoyo: true, ease: 'sine.inOut' }, 0)
          .to('.wheel', { rotation: 360, duration: 0.65, repeat: -1, ease: 'none' }, 0)
          .fromTo('.car-shadow', { x: -18, scaleX: 0.9 }, { x: 25, scaleX: 1.05, duration: 2.1, repeat: -1, yoyo: true, ease: 'sine.inOut' }, 0)
          .to('.road-line', {
            keyframes: { x: [390, -430], scaleX: [0.65, 1.25], opacity: [0, 0.85, 0], easeEach: 'none' },
            duration: 0.85,
            stagger: { each: 0.18, repeat: -1 },
            ease: 'none',
          }, 0)
          .to('.service-card-top', { y: -12, duration: 2, repeat: -1, yoyo: true, ease: 'sine.inOut' }, 0)
          .to('.service-card-bottom', { y: 11, duration: 2.2, repeat: -1, yoyo: true, ease: 'sine.inOut' }, 0);

        const stage = main.querySelector<HTMLElement>('.road-process-stage');
        if (stage) {
          const road = gsap.timeline({
            scrollTrigger: {
              trigger: stage,
              invalidateOnRefresh: true,
              toggleActions: 'play pause resume pause',
            },
          });
          road
            .fromTo('.process-car', { x: -140 }, { x: () => stage.clientWidth + 120, duration: 9, repeat: -1, ease: 'none' }, 0)
            .to('.process-wheel', { rotation: 360, duration: 0.55, repeat: -1, ease: 'none' }, 0)
            .to('.road-track-inner', { backgroundPositionX: '-75px', duration: 2, repeat: -1, ease: 'none' }, 0)
            .to('.road-dash', {
              keyframes: { x: [140, -180], opacity: [0, 1, 0], easeEach: 'none' },
              duration: 1.2,
              stagger: { each: 0.15, repeat: -1 },
              ease: 'none',
            }, 0);
        }
      }

      main.querySelectorAll<HTMLElement>(`[data-settings], .reference-invisible, ${homeReveals}`).forEach(element => {
        let animation = 'fadeInUp';
        let delay = 0;
        if (element.dataset.settings) {
          try {
            const settings = JSON.parse(element.dataset.settings);
            animation = settings?._animation || settings?.animation ||
              (element.matches('.reference-invisible') ? 'fadeInUp' : 'none');
            delay = (Number(settings?._animation_delay) || 0) / 1000;
          } catch {
            return;
          }
        }
        const direction = revealDirections[animation];
        if (!direction || !element.getClientRects().length) return;

        gsap.from(element, {
          ...direction,
          opacity: 0,
          delay,
          duration: 0.7,
          ease: 'power2.out',
          immediateRender: false,
          scrollTrigger: { trigger: element, start: 'top bottom', once: true },
        });
      });
    });

    return () => motion.revert();
  }, []);

  return null;
}
