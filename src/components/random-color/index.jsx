import { useEffect, useState } from "react";

export default function RandomColor() {
  const [typeOfColor, setTypeOfColor] = useState("hex");
  const [color, setColor] = useState("#000000");

  function colorUtility(length) {
    return Math.floor(Math.random() * length);
  }

  function handleHexColor() {
    const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
    let hexColor = "#";

    for (let i = 0; i < 6; i++) {
      hexColor += hex[colorUtility(hex.length)];
    }

    setColor(hexColor);
  }

  function handleRgbColor() {
    const r = colorUtility(256);
    const g = colorUtility(256);
    const b = colorUtility(256);

    setColor(`rgb(${r}, ${g}, ${b})`);
  }

  useEffect(() => {
    if (typeOfColor === "rgb") handleRgbColor();
    else handleHexColor();
  }, [typeOfColor]);

  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        background: color,
      }}
    >
      <div className="container mx-auto">
        <button
          onClick={() => setTypeOfColor("hex")}
          className="bg-white py-1 px-2 hover:bg-slate-200"
        >
          Create HEX Color
        </button>
        <button
          onClick={() => setTypeOfColor("rgb")}
          className="bg-white py-1 px-2 hover:bg-slate-200"
        >
          Create RGB Color
        </button>
        <button
          onClick={typeOfColor === "hex" ? handleHexColor : handleRgbColor}
          className="bg-white py-1 px-2 hover:bg-slate-200"
        >
          Generate Random Color
        </button>
        <div className="flex items-center justify-center text-white text-center py-8 mx-auto">
          <h1 className="text-center font-bold text-2xl">
            {typeOfColor === "rgb" ? "RGB Color " : "HEX Color "}
          </h1>
          <h1 className="text-center font-bold text-2xl px-1"> {color}</h1>
        </div>
      </div>
    </div>
  );
}
