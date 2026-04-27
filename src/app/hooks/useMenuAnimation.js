import { gsap } from "gsap";

export default function useMenuAnimation(ref) {
  const openMenu = () => {
     if (typeof window === "undefined") return;
    if (window.innerWidth < 1024) return;
    if (!ref.current) return; // safety check to ensure ref is attached

    gsap.to(ref.current, {
      opacity: 1,
      y: 0,
      duration: 0.3,
      ease: "power2.inOut",
      pointerEvents: "auto",
    });
  };
  const closeMenu = (onDone) => {
     if (typeof window === "undefined") return;
    if (window.innerWidth < 1024) return;
    if (!ref.current) return; // safety check to ensure ref is attached

    gsap.to(ref.current, {
      opacity: 0,
      y: -20,
      duration: 0.3,
      ease: "power2.inOut",
      pointerEvents: "none",
      onComplete: onDone,
    });
  };

  return { openMenu, closeMenu };
}
