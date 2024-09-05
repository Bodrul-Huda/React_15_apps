import { useRef, useState } from "react";
import OutsideClick from ".";

export default function UseOnclickOutsideTest() {
  const [showContent, setShowContent] = useState(false);
  const ref = useRef();
  OutsideClick(ref, () => setShowContent(false));

  return (
    <div>
      {showContent ? (
        <div
          ref={ref}
          className="container mx-auto py-12 w-2/4 bg-red-200 h-2/4"
        >
          <h1>Random Content</h1>
          <p>Click outside to close the model</p>
        </div>
      ) : (
        <button
          onClick={() => setShowContent(true)}
          className="py-2 px-4 bg-slate-300 hover:bg-slate-400"
        >
          Show content
        </button>
      )}
    </div>
  );
}
