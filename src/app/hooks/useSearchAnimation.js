import { gsap } from "gsap";

export default function useSearchAnimation(ref) {
  const getSearchWidth = () => {
    const w = window.innerWidth;
    if (w >= 1920) return "680px"; // 2xl
    if (w >= 1280) return "480px"; // xl
    if (w >= 1024) return "380px"; // lg
    if (w >= 768) return "400px"; // md
    return "100%"; // base
  };

  const openSearch = () => {
    gsap.fromTo(
      ref.current,
      { width: 0, opacity: 0, pointerEvents: "none" },
      {
        width: getSearchWidth(),
        opacity: 1,
        pointerEvents: "auto",
        duration: 0.1,
        ease: "power2.out",
        onComplete: () => ref.current?.focus(),
      },
    );
  };

  const closeSearch = (onDone) => {
    ref.current?.blur();
    gsap.to(ref.current, {
      width: 0,
      opacity: 0,
      pointerEvents: "none",
      duration: 0.4,
      ease: "power2.inOut",
      onComplete: onDone,
    });
  };

  return { openSearch, closeSearch };
}
