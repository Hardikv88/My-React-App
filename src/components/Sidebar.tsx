import { useState } from "react";



/* ================= Sidebar ================= */

type SidebarProps = {
  readonly open: boolean;
  readonly onClick?: (value: string) => void;
};

function Sidebar({ open, onClick }: SidebarProps) {
  // 👇 ONE selected state
  const [active, setActive] = useState<string>("dashboard");

  const handleClick = (label: string) => {
    const value = label.toLowerCase();

    setActive(value);        // set active
    onClick?.(label);        // keep old logic
  };

  return (
    <aside
      className={`
        h-screen bg-white border-r shadow-sm
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
        <MenuItem
          label="Dashboard"
          active={active}
          onClick={handleClick}
        />

        <MenuItem
          label="Users"
          active={active}
          onClick={handleClick}
        />

        <MenuItem
          label="Settings"
          active={active}
          onClick={handleClick}
        />
        <MenuItem
          label="PostFrom"
          active={active}
          onClick={handleClick}
        />
      </div>
    </aside>
  );
}

export default Sidebar;

/* ================= Menu Item ================= */

type MenuItemProps = {
  readonly label: string;
  readonly active: string;
  readonly onClick?: (value: string) => void;
};

function MenuItem({ label, active, onClick }: MenuItemProps) {
  const value = label.toLowerCase();

  const isActive = active === value;

  return (
    <div
      onClick={() => onClick?.(label)}
      className={`
        px-3 py-2 rounded-lg cursor-pointer
        transition text-sm font-medium
        ${
          isActive
            ? "bg-blue-600 text-white"
            : "text-gray-700 hover:bg-gray-100"
        }
      `}
    >
      {label}
    </div>
  );
}