import { NavLink } from "react-router-dom";
import {
  LayoutDashboard,
  Users,
  FileText,
  Webhook,
  Globe,
  ShoppingCart,
  Settings,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

/* ================= Types ================= */

type SidebarProps = {
  readonly open: boolean;
  onToggle?: () => void;
};

/* ================= Nav Items Config ================= */

const NAV_ITEMS = [
  { label: "Dashboard", path: "/", icon: LayoutDashboard },
  { label: "Users", path: "/users", icon: Users },
  { label: "Post Form", path: "/postform", icon: FileText },
  { label: "Hooks", path: "/hooks", icon: Webhook },
  { label: "REST APIs", path: "/apis", icon: Globe },
  { label: "Cart View", path: "/cartView", icon: ShoppingCart },
  { label: "Settings", path: "/settings", icon: Settings },
];

/* ================= Sidebar ================= */

function Sidebar({ open, onToggle }: SidebarProps) {
  return (
    <aside
      className={`
        relative flex flex-col h-screen shrink-0
        bg-white dark:bg-[#1a2236]
        border-r border-gray-200 dark:border-gray-700/50
        shadow-sm dark:shadow-lg
        transition-all duration-300 ease-in-out
        ${open ? "w-[220px]" : "w-[68px]"}
      `}
    >
      {/* ── Brand ── */}
      <div
        className={`
          flex items-center h-[55px] px-3 shrink-0
          border-b border-gray-200 dark:border-gray-700/50
          ${open ? "gap-3" : "justify-center"}
        `}
      >
        <button
          onClick={onToggle}
          aria-label="Toggle sidebar"
          className="
            mr-1 p-1.5 rounded-lg text-gray-500 dark:text-gray-400
            hover:bg-gray-100 dark:hover:bg-white/5
            hover:text-gray-700 dark:hover:text-gray-200
            transition-colors duration-150 cursor-pointer
          "
        >
          <svg
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          >
            <line x1="4" y1="6" x2="20" y2="6" />
            <line x1="4" y1="12" x2="20" y2="12" />
            <line x1="4" y1="18" x2="20" y2="18" />
          </svg>
        </button>
        {open && (
          <span className="text-gray-900 dark:text-white font-semibold text-[15px] tracking-tight truncate">
            MyApp
          </span>
        )}
      </div>

      {/* ── Nav Links ── */}
      <nav className="flex-1 overflow-y-auto py-3 px-2 flex flex-col gap-0.5">
        {NAV_ITEMS.map((item) => (
          <MenuItem key={item.path} {...item} open={open} />
        ))}
      </nav>

      {/* ── Collapse Toggle Button ── */}
      {onToggle && (
        <div className="shrink-0 px-2 py-3 border-t border-gray-200 dark:border-gray-700/50">
          <button
            onClick={onToggle}
            className={`
              w-full flex items-center gap-2.5 px-2.5 py-2 rounded-lg text-sm
              text-gray-500 dark:text-gray-400
              hover:bg-gray-100 dark:hover:bg-white/5
              transition-colors duration-150 cursor-pointer
              ${open ? "" : "justify-center"}
            `}
            aria-label={open ? "Collapse sidebar" : "Expand sidebar"}
          >
            {open ? (
              <>
                <ChevronLeft size={16} className="shrink-0" />
                <span className="font-medium">Collapse</span>
              </>
            ) : (
              <ChevronRight size={16} className="shrink-0" />
            )}
          </button>
        </div>
      )}
    </aside>
  );
}



export default Sidebar;

/* ================= Menu Item ================= */

type MenuItemProps = {
  readonly label: string;
  readonly path: string;
  readonly icon: React.ElementType;
  readonly open: boolean;
};

function MenuItem({ label, path, icon: Icon, open }: MenuItemProps) {
  return (
    <NavLink
      to={path}
      state={{ abc: "12344", xyz: "sdsf" }}
      title={!open ? label : undefined}
      className={({ isActive }) =>
        `
        group relative flex items-center gap-3 px-2.5 py-2 rounded-lg
        text-sm font-medium cursor-pointer
        transition-all duration-150
        ${
          isActive
            ? "bg-indigo-50 dark:bg-indigo-500/10 text-indigo-600 dark:text-indigo-400"
            : "text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-white/5 hover:text-gray-900 dark:hover:text-white"
        }
        ${!open ? "justify-center" : ""}
        `
      }
    >
      {({ isActive }) => (
        <>
          {/* Active left accent bar */}
          {isActive && (
            <span className="absolute left-0 top-1/2 -translate-y-1/2 w-0.5 h-5 bg-indigo-500 rounded-r-full" />
          )}

          <Icon
            size={18}
            className={`shrink-0 transition-colors ${
              isActive
                ? "text-indigo-500 dark:text-indigo-400"
                : "text-gray-400 dark:text-gray-500 group-hover:text-gray-600 dark:group-hover:text-gray-300"
            }`}
          />

          {open && <span className="truncate leading-none">{label}</span>}
        </>
      )}
    </NavLink>
  );
}


