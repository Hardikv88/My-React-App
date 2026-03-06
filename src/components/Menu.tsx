import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Icon, {
  AppstoreOutlined,
  CalendarOutlined,
  LinkOutlined,
  MailOutlined,
  SettingOutlined,
} from '@ant-design/icons';
import { Divider, Menu, Switch } from 'antd';
import type { GetProp, MenuProps } from 'antd';

type MenuTheme = GetProp<MenuProps, 'theme'>;

type MenuItem = GetProp<MenuProps, 'items'>[number];

const items: MenuItem[] = [
  {
    key: '1',
    icon: <MailOutlined />,
    label: 'Navigation One',
  },
  {
    key: '2',
    icon: <CalendarOutlined />,
    label: 'Navigation Two',
  },
  {
    key: 'sub1',
    label: 'Navigation Two',
    icon: <AppstoreOutlined />,
    children: [
      { key: '3', label: 'Option 3' },
      { key: '4', label: 'Option 4' },
      {
        key: 'sub1-2',
        label: 'Submenu',
        children: [
          { key: '5', label: 'Option 5' },
          { key: '6', label: 'Option 6' },
        ],
      },
    ],
  },
  {
    key: 'sub2',
    label: 'Navigation Three',
    icon: <SettingOutlined />,
    children: [
      {key: '7', label: 'Option 7'},
      {key: '8', label: 'Option 8'},
      {key: '9', label: 'Option 9'},
      {key: '10', label: 'Option 10'},
    ],
  },
  {
    key: 'link',
    icon: <LinkOutlined />,
    label: (
      <a href="https://ant.design" target="_blank" rel="noopener noreferrer">
        Ant Design
      </a>
    ),
  },
];

function MenuItemList(){
  const navigate = useNavigate();

  const handleMenuClick = (e: any) => {
    const routeMap: { [key: string]: string } = {
      '1': '/page1',
      '2': '/page2',
      '3': '/page3',
      '4': '/page4',
      '5': '/page5',
      '6': '/page6',
      '7': '/page7',
      '8': '/page8',
      '9': '/page9',
      '10': '/page10',
    };

    const path = routeMap[e.key];
    if (path) {
      navigate(path);
      console.log(`Navigating to ${path}`);
    }
  };

  return (
      <Menu
        style={{ width: 200 ,border: "none"}}
        defaultSelectedKeys={['1']}
        onClick={handleMenuClick}
        defaultOpenKeys={['sub1']}
        mode={'inline'}
        theme={'light'}
        items={items}
      />
    
  );
};

export default MenuItemList;