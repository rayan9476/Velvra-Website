import { useEffect, useRef } from "react";

export default function useClickOutside(
  ref,
  callback,
  excludeRef = null,
  excludeRef2 = null,
) {
  const callbackRef = useRef(callback);
  callbackRef.current = callback;

  useEffect(() => {
    function handleClickOutside(event) {
      if (
        ref.current &&
        !ref.current.contains(event.target) &&
        (!excludeRef?.current || !excludeRef.current.contains(event.target)) &&
        (!excludeRef2?.current || !excludeRef2.current.contains(event.target))
      ) {
        callbackRef.current();
      }
    }

    document.addEventListener("mousedown", handleClickOutside, true);
    document.addEventListener("pointerdown", handleClickOutside, true);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside, true);
      document.removeEventListener("pointerdown", handleClickOutside, true);
    };
  }, []);
}
