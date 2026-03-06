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
  const handleClick = ({ key }: { key: string }) => {
    if (key === "3") {
      console.log("Logout clicked");
      // logout logic here
    }else if (key === "1") {
      console.log("Profile clicked");
      // profile logic here
    }else if (key === "2") {
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
        <Avatar icon={<UserOutlined />} src={reactLogo} size={40} />
        <CaretDownOutlined />
      </Space>
    </Dropdown>
  );
}

export default UserMenu;