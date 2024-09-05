import MenuItem from "./menu-item";

export default function MenuList({ menuList = [] }) {
  return (
    <div>
      {menuList && menuList.length
        ? menuList.map((item) => (
            <ul className="bg-slate-600 text-white w-1/3">
              <MenuItem item={item} />
            </ul>
          ))
        : null}
    </div>
  );
}
