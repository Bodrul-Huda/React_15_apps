import { useState } from "react";
import QRCode from "react-qr-code";

export default function QrCodeGenerator() {
  const [qrCode, setQrCode] = useState("");
  const [input, setInput] = useState("");

  function handleQrGenerate() {
    setQrCode(input);
    setInput("");
  }
  return (
    <div className="container mx-auto py-12">
      <div className="space-x-2">
        <input
          onChange={(e) => setInput(e.target.value)}
          type="text"
          name="qr-code"
          value={input}
          placeholder="Enter value"
        />
        <button
          disabled={input && input.trim() !== "" ? false : true}
          onClick={() => handleQrGenerate()}
        >
          Generate
        </button>
      </div>
      <div className="flex items-center justify-center py-4">
        <QRCode id="qr-code-ie" value={qrCode} size={400} />
      </div>
    </div>
  );
}
