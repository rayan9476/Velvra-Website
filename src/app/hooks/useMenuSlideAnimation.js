import { useLayoutEffect } from "react";
import gsap from "gsap";

export default function useMenuSlideAnimation(
  isOpen,
  ref,
  direction = "right",
) {
  useLayoutEffect(() => {
    if (!ref.current) return;
    if (window.innerWidth > 1023) return;

    if (isOpen) {
      gsap.to(ref.current, {
        x: 0,
        // opacity: 1,
        duration: 0.8,
        ease: "power3.out",
      });
    } else {
      gsap.to(ref.current, {
        x: "-100%",
        // opacity: 0,
        duration: 0.6,
        ease: "power3.in",
      });
    }
  }, [isOpen, ref]);
}
