
import React, { JSX, useState } from "react";
import Sidebar from "./Sidebar";
import Users from "../pages/Users";
import Settings from "../pages/Settings";
import Dashboard from "../pages/Dashboard";
import Header from "./Header";
import { Row } from "antd";
import { TypeIcon } from "antd/es/message/PurePanel";
import PostFrom from "../pages/PostFrom";


function Layout() {
  const [page, setPage] = useState<string>("dashboard");
  const [open, setOpen] = useState<boolean>(true);

  let newValue: boolean = false;
  return (
    <div style={styles.container}>
      {/* Drawer */}
      <Sidebar open={open} onClick={(value) => setPage(value.toLocaleLowerCase())} />

      <div className="flex flex-col flex-1">
      {/* Right Side */}
      <div >
        <Header onMenuClick={() => setOpen(!open)} />
      </div>
        
      {/* Fragment Area */}
      <main className="flex-1 overflow-auto bg-gray-100">
        {pages[page]}
      </main>
    </div>
    </div>
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

const _userData = {
  name: "Hardik Patel",
  email: "patel@yopmail.com",
  phone: "56789098765",
  gender: "male",
  country: "India",
  state: "Gujarat",
  city: "Ahmedabad",
  address: "this user information",
};

const pages: Record<string, JSX.Element> = {
  dashboard: <Dashboard />,
  users: <Users />,
  settings: <Settings />,
  postfrom: <PostFrom data={_userData} />,
};

