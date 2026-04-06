import { Avatar, Dropdown, Space } from "antd";
import reactLogo from "../assets/avatar.png";

import Icon, {
  UserOutlined,
  LogoutOutlined,
  SettingOutlined,
  MoreOutlined,
  DropboxOutlined,
  DownOutlined,
  CaretDownOutlined,
} from "@ant-design/icons";
import { Link } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";

const items = [
  {
    key: "1",
    label: "Profile",
    icon: <UserOutlined />,
  },
  {
    key: "2",
    label: "Settings",
    icon: <SettingOutlined />,
  },
  {
    key: "3",
    label: "Logout",
    icon: <LogoutOutlined />,
  },
];

function UserMenu() {
  const { logout, user } = useAuth();

  const handleClick = ({ key }: { key: string }) => {
    if (key === "3") {
      console.log("Logout clicked");
      logout();
      // logout logic here
    } else if (key === "1") {
      console.log("Profile clicked");
      // profile logic here
    } else if (key === "2") {
      console.log("Settings clicked");
      // settings logic here
    }
  };

  return (
    <Dropdown
      menu={{
        items,
        onClick: handleClick,
      }}
      trigger={["click"]}
    >
      <Space style={{ cursor: "pointer", alignContent: "right" }}>
        <Link to="/profile">
          <Avatar icon={<UserOutlined />} src={user?.image} size={40} />
        </Link>
        <CaretDownOutlined />
      </Space>
    </Dropdown>
  );
}

export default UserMenu;
