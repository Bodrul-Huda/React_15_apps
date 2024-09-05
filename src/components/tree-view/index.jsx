import MenuList from "./menu-list";

export default function TreeView({ menus = [] }) {
  return (
    <div className="bg-slate-300">
      <div className="container mx-auto bg-slate-100">
        <div>
          <MenuList menuList={menus} />
        </div>
      </div>
    </div>
  );
}
