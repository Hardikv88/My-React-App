import { Avatar, Dropdown, Space } from "antd";

import Icon, {
  UserOutlined,
  LogoutOutlined,
  SettingOutlined,
  CaretDownOutlined,
} from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
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
  const navigate = useNavigate();

  const handleClick = ({ key }: { key: string }) => {
    if (key === "3") {
      logout();
      // logout logic here
    } else if (key === "1") {
      // profile logic here
      navigate("/profile");
    } else if (key === "2") {
      // settings logic here
      navigate("/settings");
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
        <Avatar icon={<UserOutlined />} src={user?.image} size={40} />
        <CaretDownOutlined />
      </Space>
    </Dropdown>
  );
}

export default UserMenu;
