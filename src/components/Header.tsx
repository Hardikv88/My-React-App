import UserMenu from "./ImageDropdown";
import { useSelector } from "react-redux";
import { RootState } from "../features/store";
import { useAuth } from "../hooks/useAuth";
import { useTheme } from "../context/ThemeContext";
import { Moon, Sun, Hash } from "lucide-react";

type HeaderProps = {
  onMenuClick: () => void;
};

function Header({ onMenuClick }: HeaderProps) {
  const { user } = useAuth();
  const count = useSelector((state: RootState) => state.counter.value);
  const { theme, toggleTheme } = useTheme();

  const greeting = getGreeting();

  return (
    <header className="
      sticky top-0 z-50
      h-[55px] flex items-center justify-between px-5
      bg-white/80 dark:bg-[#1a2236]/90
      backdrop-blur-md
      border-b border-gray-200/80 dark:border-gray-700/50
      shadow-sm
    ">
      {/* ── Left: Greeting ── */}
      <div className="flex items-center gap-2 min-w-0">
        <div className="min-w-0">
          <p className="text-[13px] text-gray-400 dark:text-gray-500 leading-none mb-0.5">
            {greeting}
          </p>
          <h2 className="text-[15px] font-semibold text-gray-800 dark:text-white leading-none truncate">
            {user?.firstName} {user?.lastName}
          </h2>
        </div>
      </div>

      {/* ── Right: Actions ── */}
      <div className="flex items-center gap-2">
        {/* Counter Badge */}
        <div className="
          hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-full
          bg-gray-100 dark:bg-white/5
          border border-gray-200 dark:border-gray-700/50
          text-gray-600 dark:text-gray-300 text-sm font-medium
        ">
          <Hash size={13} className="text-indigo-400" />
          <span>{count}</span>
        </div>

        {/* Theme Toggle */}
        <button
          onClick={toggleTheme}
          aria-label="Toggle theme"
          className="
            relative p-2 rounded-lg cursor-pointer
            bg-gray-100 dark:bg-white/5
            border border-gray-200 dark:border-gray-700/50
            text-gray-600 dark:text-gray-300
            hover:bg-gray-200 dark:hover:bg-white/10
            hover:text-gray-900 dark:hover:text-white
            transition-all duration-200
            focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500
          "
        >
          {theme === "light" ? (
            <Moon size={16} className="transition-transform duration-300" />
          ) : (
            <Sun size={16} className="text-amber-400 transition-transform duration-300 rotate-12" />
          )}
        </button>

        {/* Divider */}
        <div className="w-px h-6 bg-gray-200 dark:bg-gray-700/50" />

        {/* User Avatar Dropdown */}
        <UserMenu />
      </div>
    </header>
  );
}

export default Header;

/* ── Helpers ── */

function getGreeting(): string {
  const hour = new Date().getHours();
  if (hour < 12) return "Good morning,";
  if (hour < 17) return "Good afternoon,";
  return "Good evening,";
}
