import UserMenu from "./ImageDropdown";
import { useSelector } from "react-redux";
import { RootState } from "../features/store";
import { useAuth } from "../hooks/useAuth";
import { useTheme } from "../context/ThemeContext";
import { Moon, Sun } from "lucide-react";

type HeaderProps = {
  onMenuClick: () => void;
};

function Header({ onMenuClick }: HeaderProps) {
  const { user } = useAuth();
  const count = useSelector((state: RootState) => state.counter.value);
  const { theme, toggleTheme } = useTheme();
  return (
    <header className="display h-[55px] bg-white border-b border-gray-200 flex items-center justify-between px-4 shadow-sm dark:bg-[#273142] dark:border-gray-800 dark:shadow">
      {/* Left Section */}
      <div className="flex items-center gap-3">
        {/* Menu Button (Optional) */}
        {/* Uncomment if needed */}
        {/*
        <button
          onClick={onMenuClick}
          className="text-xl font-bold p-2 rounded-md hover:bg-gray-100 transition dark:hover:bg-gray-800 dark:text-white"
        >
          ☰
        </button>
        */}

        <h3 className="text-lg font-semibold text-gray-800 dark:text-white">
          Hi {user?.firstName} {user?.lastName}
        </h3>
      </div>

      {/* Right Section */}
      <div className="flex items-center gap-3">
        <h3 className="text-gray-800 dark:text-gray-200">Counter: {count}</h3>
        {/* Theme Toggle Button */}
        <button
          onClick={toggleTheme}
          aria-label="Toggle theme"
          className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700 transition-colors border border-gray-200 dark:border-gray-700 focus:outline-none"
        >
          {theme === "light" ? (
            <Moon size={20} className="text-gray-700" />
          ) : (
            <Sun size={20} className="text-yellow-400" />
          )}
        </button>
        <UserMenu />
      </div>
    </header>
  );
}

export default Header;
