import { useRef } from "react";
import { gsap } from "gsap";

export default function useDropdownAnimation() {
  const dropdownRefs = useRef({});
  const openItemRef = useRef(null);

  const toggle = (title, setOpenItem) => {
    const el = dropdownRefs.current[title];
    if (!el || !setOpenItem) return;

    if (openItemRef.current === title) {
      // close
      gsap.to(el, {
        height: 0,
        opacity: 0,
        duration: 0.3,
        ease: "power2.inOut",
      });
      openItemRef.current = null;
      setOpenItem(null);
    } else {
      // close previous
      if (openItemRef.current && dropdownRefs.current[openItemRef.current]) {
        gsap.to(dropdownRefs.current[openItemRef.current], {
          height: 0,
          opacity: 0,
          duration: 0.3,
          ease: "power2.inOut",
        });
      }
      // open new
      gsap.set(el, { height: "auto", opacity: 1 });
      gsap.from(el, {
        height: 0,
        opacity: 0,
        duration: 0.3,
        ease: "power2.out",
      });
      openItemRef.current = title;
      setOpenItem(title);
    }
  };

  return { dropdownRefs, toggle };
}
