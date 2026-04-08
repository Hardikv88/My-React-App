import { NavLink } from "react-router-dom";

/* ================= Sidebar ================= */

type SidebarProps = {
  readonly open: boolean;
  readonly onClick?: (value: string) => void;
};

function Sidebar({ open, onClick }: SidebarProps) {
  // 👇 ONE selected state
  return (
    <aside
      className={`
        h-screen bg-white shadow-sm
        transition-all duration-300
        ${open ? "w-[220px]" : "w-[60px]"}
        p-2 flex flex-col
      `}
    >
      {/* Logo */}
      <h3 className="text-center font-bold text-lg mb-2">
        {open ? "Logo" : "A"}
      </h3>

      {/* Divider */}
      <div className="h-px bg-gray-300 my-2" />

      {/* Menu */}
      <div className="flex flex-col gap-1">
        <MenuItem label="Dashboard" path="/" />
        <MenuItem label="Users" path="/users" />
        <MenuItem label="PostFrom" path="/postform" />
        <MenuItem label="Hooks" path="/hooks" />
        <MenuItem label="RestApis" path="/apis" />
        <MenuItem label="CartView" path="/cartView" />
        <MenuItem label="Settings" path="/settings" />
      </div>
    </aside>
  );
}

export default Sidebar;

/* ================= Menu Item ================= */

type MenuItemProps = {
  readonly label: string;
  readonly path: string;
};

function MenuItem({ label, path }: MenuItemProps) {
  return (
    <NavLink
      to={path}
      state={{ abc: "12344", xyz: "sdsf" }}
      className={({ isActive }) =>
        `
        px-3 py-2 rounded-lg cursor-pointer
        transition text-sm font-medium block
        ${
          isActive
            ? "bg-blue-600 text-white"
            : "text-gray-700 hover:bg-gray-100"
        }
        `
      }
    >
      {label}
    </NavLink>
  );
}
