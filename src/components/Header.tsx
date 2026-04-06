import UserMenu from "./ImageDropdown";

import { useSelector } from "react-redux";
import { RootState } from "../features/store";
import { useAuth } from "../hooks/useAuth";
import { use } from "react";

type HeaderProps = {
  onMenuClick: () => void;
};

function Header({ onMenuClick }: HeaderProps) {
  //const user = useContext(UserContext);
  const { user } = useAuth();
  const count = useSelector((state: RootState) => state.counter.value);
  return (
    <header className="display h-[55px] bg-white border-b border-gray-200 flex items-center justify-between px-4 shadow-sm">
      {/* Left Section */}
      <div className="flex items-center gap-3">
        {/* Menu Button (Optional) */}
        {/* Uncomment if needed */}
        {/*
        <button
          onClick={onMenuClick}
          className="text-xl font-bold p-2 rounded-md hover:bg-gray-100 transition"
        >
          ☰
        </button>
        */}

        <h3 className="text-lg font-semibold text-gray-800">
          Hi {user?.firstName} {user?.lastName}
        </h3>
      </div>

      {/* Right Section */}
      <div className="flex items-center gap-3">
        <h3>Counter: {count}</h3>
        <UserMenu />
      </div>
    </header>
  );
}

export default Header;
