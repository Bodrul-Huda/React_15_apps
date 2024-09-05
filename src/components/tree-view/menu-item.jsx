import { useState } from "react";
import MenuList from "./menu-list";
import { FaPlus, FaMinus } from "react-icons/fa";

export default function MenuItem({ item }) {
  const [displayChildrenItem, setDisplayChildrenItem] = useState({});

  function handleToggle(getItemLabel) {
    setDisplayChildrenItem({
      ...displayChildrenItem,
      [getItemLabel]: !displayChildrenItem[getItemLabel],
    });
  }

  return (
    <li className=" py-2">
      <div className="flex px-2 space-x-1">
        <p>{item.label}</p>
        {item && item.children && item.children.length ? (
          <span onClick={() => handleToggle(item.label)}>
            {displayChildrenItem[item.label] ? <FaMinus /> : <FaPlus />}
          </span>
        ) : null}
      </div>
      {item &&
      item.children &&
      item.children.length > 0 &&
      displayChildrenItem[item.label] ? (
        <MenuList menuList={item.children} />
      ) : null}
    </li>
  );
}
