import { useState } from "react";

export default function Tabs({ tabsContent, onChange }) {
  const [currentTabIndex, setCurrentTabIndex] = useState(0);

  function handleOnClick(getCurrentIndex) {
    setCurrentTabIndex(getCurrentIndex);
    onChange(getCurrentIndex);
  }

  return (
    <div>
      <div className="container mx-auto py-8">
        <div className="flex items-center justify-center space-x-4">
          {tabsContent.map((item, index) => (
            <div
              className={`bg-yellow-200 py-2 px-3 cursor-pointer hover:bg-yellow-400 ${
                currentTabIndex === index ? "bg-yellow-400" : ""
              }`}
              onClick={() => handleOnClick(index)}
              key={item.label}
            >
              {item.label}
            </div>
          ))}
        </div>
        <div className="text-center font-semibold py-4">
          {tabsContent[currentTabIndex] && tabsContent[currentTabIndex].content}
        </div>
      </div>
    </div>
  );
}
