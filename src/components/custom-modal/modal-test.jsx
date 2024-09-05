import { useState } from "react";
import Modal from "./modal";

export default function ModalTest() {
  const [showModalPopup, setShowModalPopup] = useState(false);
  function handleModalOpen() {
    setShowModalPopup(!showModalPopup);
  }

  function onclose() {
    setShowModalPopup(false);
  }

  return (
    <div>
      <div className="container mx-auto">
        <button
          className="py-2 px-2 bg-slate-300 hover:bg-slate-400 my-4"
          onClick={handleModalOpen}
        >
          Open Modal
        </button>
        {showModalPopup && <Modal onclose={onclose} />}
      </div>
    </div>
  );
}
