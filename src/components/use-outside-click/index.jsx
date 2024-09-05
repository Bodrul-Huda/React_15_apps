import { useEffect } from "react";

export default function OutsideClick(ref, handler) {
  useEffect(() => {
    function listner(e) {
      if (!ref.current || ref.current.contains(e.target)) {
        return;
      }
      handler(e);
    }
    document.addEventListener("mousedown", listner);
    document.addEventListener("touchstart", listner);

    return () => {
      document.removeEventListener("mousedown", listner);
      document.removeEventListener("touchstart", listner);
    };
  }, [ref, handler]);
}
