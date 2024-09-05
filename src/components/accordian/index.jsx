import { useState } from "react";
import data from "./data";

export default function Accordian() {
  const [selected, setSelected] = useState(null);
  const [enableMultiSelection, setEnableMultiSelection] = useState(false);
  const [multiple, setMultiple] = useState([]);

  function handleSingleSelection(getCurrentId) {
    setSelected(getCurrentId === selected ? null : getCurrentId);
  }

  function handleMultiSelection(getCurrentId) {
    let copyMulti = [...multiple];
    const findIndexOfCurrentId = copyMulti.indexOf(getCurrentId);
    if (findIndexOfCurrentId === -1) copyMulti.push(getCurrentId);
    else copyMulti.splice(findIndexOfCurrentId, 1);

    setMultiple(copyMulti);
  }

  return (
    <div className="container mx-auto ">
      <div className="my-20 py-4 mx-56">
        <button
          onClick={() => setEnableMultiSelection(!enableMultiSelection)}
          className="bg-black py-2 px-4 rounded-md hover:bg-slate-600 text-white font-bold"
        >
          Enable Multiple options
        </button>
        <div className="my-2 py-2 mx-auto">
          {data && data.length > 0 ? (
            data.map((dataItem) => (
              <div className="bg-slate-300 my-2 py-2">
                <div
                  onClick={
                    enableMultiSelection
                      ? () => handleMultiSelection(dataItem.id)
                      : () => handleSingleSelection(dataItem.id)
                  }
                  className="py-2 flex items-center justify-center"
                >
                  <h3 className=" py-2 px-4">{dataItem.question}</h3>
                  <span>+</span>
                </div>
                {enableMultiSelection
                  ? multiple.indexOf(dataItem.id) !== -1 && (
                      <div className="py-2 px-2"> {dataItem.answer}</div>
                    )
                  : selected === dataItem.id && (
                      <div className="py-2 px-2"> {dataItem.answer}</div>
                    )}
              </div>
            ))
          ) : (
            <div>Data not found</div>
          )}
        </div>
      </div>
    </div>
  );
}
