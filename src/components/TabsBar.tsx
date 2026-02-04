
import React from "react";
import { AndroidOutlined, AppleOutlined } from '@ant-design/icons';
import { Tabs } from 'antd';


function TabsBar() {
  return (
    <>
    <div className="TabsBar">
      <h1>Tabs Bar Component</h1>
    </div>

    <Tabs
    defaultActiveKey="2"
    items={[AppleOutlined, AndroidOutlined].map((Icon, i) => {
      const id = String(i + 1);
      return {
        key: id,
        label: `Tab ${id}`,
        children: `Tab ${id}`,
        icon: <Icon />,
      };
    })}
  />
    </>
  
  );
}

export default TabsBar;