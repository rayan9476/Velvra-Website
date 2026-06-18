import { useEffect } from "react";
import gsap from "gsap";

export const useTopToBottomModalAnimation = ({
  isOpen,
  containerRef,
  onClose,
}) => {
  const closeModal = () => {
    const modal = containerRef.current.querySelector(".model-container");
    const content = containerRef.current.querySelector(".model-content");

    const tl = gsap.timeline({
      defaults: {
        duration: 0.6,
        ease: "power3.inOut",
      },
      onComplete: () => {
        onClose?.();
      },
    });

    tl.to(
      content,
      {
        opacity: 0,
        y: -40,
      },
      0,
    ).to(
      modal,
      {
        scaleY: 0,
        transformOrigin: "top",
      },
      0,
    );
  };
  useEffect(() => {
    if (!isOpen || !containerRef.current) return;

    const modal = containerRef.current.querySelector(".model-container");
    const content = containerRef.current.querySelector(".model-content");

    gsap.set(modal, {
      scaleY: 0,
      transformOrigin: "top",
    });

    gsap.set(content, {
      opacity: 0,
      y: -40,
    });

    const tl = gsap.timeline({
      defaults: {
        duration: 0.8,
        ease: "power3.inOut",
      },
    });

    tl.to(
      modal,
      {
        scaleY: 1,
      },
      0,
    ).to(
      content,
      {
        opacity: 1,
        y: 0,
      },
      0.4,
    );

    return () => tl.kill();
  }, [isOpen]);

  useEffect(() => {
    const preventScroll = (e) => e.preventDefault();

    if (isOpen) {
      document.body.style.overflow = "hidden";
      document.addEventListener("touchmove", preventScroll, { passive: false });
    } else {
      document.body.style.overflow = "";
      document.removeEventListener("touchmove", preventScroll);
    }

    return () => {
      document.body.style.overflow = "";
      document.removeEventListener("touchmove", preventScroll);
    };
  }, [isOpen]);

  return { closeModal };
};
