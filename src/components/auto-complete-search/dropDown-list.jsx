export default function DropDownList({ list, handleSelect }) {
  return (
    <ul>
      {list && list.length
        ? list.map((user, index) => {
            return (
              <li onClick={handleSelect} className="py-1" key={index}>
                {user}
              </li>
            );
          })
        : null}
    </ul>
  );
}
