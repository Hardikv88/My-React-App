import React, { useState } from "react";
import Sidebar from "./Sidebar";
import Header from "./Header";
import { Outlet } from "react-router-dom";
import { UserContextProvider } from "../context/UserContext";

function Layout() {
  const [page, setPage] = useState<string>("dashboard");
  const [open, setOpen] = useState<boolean>(true);

  let newValue: boolean = false;
  return (
    <UserContextProvider>
      <div style={styles.container}>
        {/* Drawer */}
        <Sidebar
          open={open}
          onClick={(value) => setPage(value.toLocaleLowerCase())}
        />

        <div className="flex flex-col flex-1">
          {/* Right Side */}
          <div>
            <Header onMenuClick={() => setOpen(!open)} />
          </div>

          {/* Fragment Area */}
          <main className="flex-1 overflow-auto bg-gray-100">
            <Outlet />
          </main>
        </div>
      </div>
    </UserContextProvider>
  );
}

export default Layout;

const styles: any = {
  container: {
    display: "flex",
    height: "auto",
  },

  main: {
    flex: 1,
    display: "flex",
    flexDirection: "flex-row",
  },
  content: {
    padding: 20,
    width: "100%",
    background: "#f3f4f6",
    flex: 1,
  },
};
