import { useState } from "react";
import Sidebar from "./Sidebar";
import Header from "./Header";
import { Outlet } from "react-router-dom";
import { UserContextProvider } from "../context/UserContext";

function Layout() {
  const [open, setOpen] = useState<boolean>(true);

  return (
    <UserContextProvider>
      <div className="flex h-screen overflow-hidden bg-gray-50 dark:bg-[#111827]">
        {/* Sidebar */}
        <Sidebar open={open} onToggle={() => setOpen(!open)} />

        {/* Right side */}
        <div className="flex flex-col flex-1 min-w-0 overflow-hidden">
          <Header onMenuClick={() => setOpen(!open)} />

          {/* Page content */}
          <main className="flex-1 overflow-y-auto p-5 bg-gray-50 dark:bg-[#111827]">
            <Outlet />
          </main>
        </div>
      </div>
    </UserContextProvider>
  );
}

export default Layout;
