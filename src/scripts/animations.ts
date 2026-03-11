import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

// Fade up animations
gsap.utils.toArray<HTMLElement>('[data-animate="fade-up"]').forEach((el, i) => {
  gsap.from(el, {
    y: 40,
    opacity: 0,
    duration: 0.8,
    ease: 'power3.out',
    scrollTrigger: {
      trigger: el,
      start: 'top 85%',
      toggleActions: 'play none none none',
    },
    delay: i % 3 * 0.1,
  });
});

// Slide in from right (hero phone)
gsap.utils.toArray<HTMLElement>('[data-animate="slide-in-right"]').forEach((el) => {
  gsap.from(el, {
    x: 80,
    opacity: 0,
    rotation: 3,
    duration: 1,
    ease: 'power3.out',
    scrollTrigger: {
      trigger: el,
      start: 'top 80%',
      toggleActions: 'play none none none',
    },
  });
});

// Bento grid stagger
const bentoItems = gsap.utils.toArray<HTMLElement>('[data-animate="bento-item"]');
if (bentoItems.length > 0) {
  gsap.from(bentoItems, {
    y: 30,
    opacity: 0,
    duration: 0.6,
    stagger: 0.1,
    ease: 'power3.out',
    scrollTrigger: {
      trigger: bentoItems[0],
      start: 'top 85%',
      toggleActions: 'play none none none',
    },
  });
}

// Count-up animation for stats
gsap.utils.toArray<HTMLElement>('.count-up').forEach((el) => {
  const target = parseInt(el.dataset.target || '0');

  ScrollTrigger.create({
    trigger: el,
    start: 'top 90%',
    onEnter: () => {
      const obj = { value: 0 };
      gsap.to(obj, {
        value: target,
        duration: 2,
        ease: 'power2.out',
        onUpdate: () => {
          el.textContent = Math.floor(obj.value).toLocaleString('fr-FR');
        },
      });
    },
    once: true,
  });
});
