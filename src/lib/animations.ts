import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export { gsap, ScrollTrigger };

/**
 * Fade-in + slide-up animation for sections
 */
export function fadeInUp(
  element: string | Element | Element[],
  options?: {
    delay?: number;
    duration?: number;
    y?: number;
    stagger?: number;
    trigger?: string | Element;
  }
) {
  const {
    delay = 0,
    duration = 0.8,
    y = 40,
    stagger = 0.15,
    trigger,
  } = options || {};

  return gsap.from(element, {
    y,
    opacity: 0,
    duration,
    delay,
    stagger,
    ease: "power2.out",
    scrollTrigger: {
      trigger: (trigger || element) as string | Element,
      start: "top 85%",
      toggleActions: "play none none none",
    },
  });
}

/**
 * Fade-in animation (no slide)
 */
export function fadeIn(
  element: string | Element | Element[],
  options?: {
    delay?: number;
    duration?: number;
    trigger?: string | Element;
  }
) {
  const { delay = 0, duration = 0.8, trigger } = options || {};

  return gsap.from(element, {
    opacity: 0,
    duration,
    delay,
    ease: "power2.out",
    scrollTrigger: {
      trigger: (trigger || element) as string | Element,
      start: "top 85%",
      toggleActions: "play none none none",
    },
  });
}

/**
 * Scale-in animation for cards
 */
export function scaleIn(
  element: string | Element | Element[],
  options?: {
    delay?: number;
    duration?: number;
    stagger?: number;
    trigger?: string | Element;
  }
) {
  const { delay = 0, duration = 0.7, stagger = 0.12, trigger } = options || {};

  return gsap.from(element, {
    scale: 0.95,
    opacity: 0,
    duration,
    delay,
    stagger,
    ease: "power2.out",
    scrollTrigger: {
      trigger: (trigger || element) as string | Element,
      start: "top 85%",
      toggleActions: "play none none none",
    },
  });
}

/**
 * Slide-in from left
 */
export function slideInLeft(
  element: string | Element | Element[],
  options?: {
    delay?: number;
    duration?: number;
    x?: number;
    trigger?: string | Element;
  }
) {
  const { delay = 0, duration = 0.8, x = -60, trigger } = options || {};

  return gsap.from(element, {
    x,
    opacity: 0,
    duration,
    delay,
    ease: "power2.out",
    scrollTrigger: {
      trigger: (trigger || element) as string | Element,
      start: "top 85%",
      toggleActions: "play none none none",
    },
  });
}

/**
 * Slide-in from right
 */
export function slideInRight(
  element: string | Element | Element[],
  options?: {
    delay?: number;
    duration?: number;
    x?: number;
    trigger?: string | Element;
  }
) {
  const { delay = 0, duration = 0.8, x = 60, trigger } = options || {};

  return gsap.from(element, {
    x,
    opacity: 0,
    duration,
    delay,
    ease: "power2.out",
    scrollTrigger: {
      trigger: (trigger || element) as string | Element,
      start: "top 85%",
      toggleActions: "play none none none",
    },
  });
}

/**
 * Counter animation for stats
 */
export function animateCounter(
  element: Element,
  endValue: number,
  options?: {
    duration?: number;
    trigger?: string | Element;
    suffix?: string;
    prefix?: string;
  }
) {
  const {
    duration = 2,
    trigger,
    suffix = "",
    prefix = "",
  } = options || {};

  const obj = { value: 0 };

  return gsap.to(obj, {
    value: endValue,
    duration,
    ease: "power2.out",
    scrollTrigger: {
      trigger: (trigger || element) as string | Element,
      start: "top 85%",
      toggleActions: "play none none none",
    },
    onUpdate: () => {
      element.textContent =
        prefix + Math.floor(obj.value).toLocaleString() + suffix;
    },
  });
}
