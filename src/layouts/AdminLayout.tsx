import React, { useState } from 'react';
import { Layout, Button } from 'antd';
import { MenuFoldOutlined, MenuUnfoldOutlined } from '@ant-design/icons';
import './AdminLayout.css';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';

const { Sider, Header: AntHeader, Content } = Layout;

interface AdminLayoutProps {
  children: React.ReactNode;
}

function AdminLayout({ children }: AdminLayoutProps) {
  const [collapsed, setCollapsed] = useState(false);
  const [open, setOpen] = useState(true);
  const [page, setPage] = useState<string>("dashboard");
  const toggleSidebar = () => {
    setCollapsed(!collapsed);
  };

  return (
    <Layout style={{ minHeight: '100vh' }}>

       <Sidebar open={open} onClick={(value) => setPage(value.toLocaleLowerCase())} />
      <Layout style={{ marginLeft: collapsed ? 80 : 200 }}>
        <AntHeader
          style={{
            background: '#fff',
            padding: '0 24px',
            boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            position: 'sticky',
            top: 0,
            zIndex: 999,
          }}
        >
          <Button
            type="text"
            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            onClick={toggleSidebar}
            style={{ fontSize: '16px' }}
          />
        <Header onMenuClick={() => setOpen(!open)} />
        </AntHeader>
        <Content
          style={{
            margin: '24px 16px',
            padding: '24px',
            background: '#fff',
            borderRadius: '8px',
            minHeight: 'calc(100vh - 64px - 48px)',
          }}
        >
          {children}
          <Application page={page} /> 
              
          </Content>
        </Content>
      </Layout>
    </Layout>
  );
}

export default AdminLayout;