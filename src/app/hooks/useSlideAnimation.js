import { useLayoutEffect } from "react";
import gsap from "gsap";

export default function useSlideAnimation(isOpen, ref, direction = "right") {
  useLayoutEffect(() => {
    if (!ref.current) return;

    if (isOpen) {
      gsap.to(ref.current, {
        x: 0,
        duration: 0.8,
        ease: "power3.out",
      });
    } else {
      gsap.to(ref.current, {
        x: "-100%",
        duration: 0.6,
        ease: "power3.in",
      });
    }
  }, [isOpen, ref]);

  useLayoutEffect(() => {
    if (!isOpen) return;
    const scrollY = window.scrollY;

    document.body.style.position = "fixed";
    document.body.style.top = `-${scrollY}px`;
    document.body.style.left = "0";
    document.body.style.right = "0";
    document.body.style.width = "100%";
    document.body.style.overflow = "hidden";

    document.documentElement.style.overflow = "hidden";

    return () => {
      const top = document.body.style.top;

      document.body.style.position = "";
      document.body.style.top = "";
      document.body.style.left = "";
      document.body.style.right = "";
      document.body.style.width = "";
      document.body.style.overflow = "";

      document.documentElement.style.overflow = "";

      window.scrollTo(0, parseInt(top || "0") * -1);
    };
  }, [isOpen]);
}
