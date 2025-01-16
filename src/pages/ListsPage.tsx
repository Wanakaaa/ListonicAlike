import { NavLink, Outlet } from "react-router-dom";

export default function ListsPage() {
  const lists = [1, 2, 3, 4, 5];

  return (
    <div className="flex gap-2">
      <div className="flex flex-col gap-2">
        {lists.map((list) => (
          <NavLink key={list} to={`/lists/${list}`}
          className={({isActive}) => {
            return isActive ? 'text-blue-700' : ''
          }}>
            Liste {list}
          </NavLink>
        ))}
      </div>
      <Outlet />
    </div>
  );
}
