"use client";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef, useLayoutEffect } from "react";

gsap.registerPlugin(ScrollTrigger);
function FadeIn({ children, delay = 0, y = 100, once = false }) {
  const ref = useRef(null);

  useLayoutEffect(() => {
    const el = ref.current;
    if (!el) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        el,
        {
          opacity: 0,
          y: y,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.9,
          ease: "power2.out",
          scrollTrigger: {
            trigger: el,
            start: "top 80%",
            end: "top 40%",
            scrub: 0.5,
            once: once,
          },
        },
      );
    }, el);

    return () => ctx.revert();
  }, [y, once]);

  return (
    <div ref={ref} className="">
      {children}
    </div>
  );
}
export default FadeIn;
