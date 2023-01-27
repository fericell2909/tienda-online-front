import React from 'react';
import { Outlet } from 'react-router-dom';
import AdminMenu from '../molecules/Header/AdminMenu';
import MainHeader from '../organisms/MainHeader';

const Admin = () => {
  return (
    <div>
      <MainHeader>
        <AdminMenu></AdminMenu>
      </MainHeader>
      <div className="pt-16 max-w-200 m-auto">
        <Outlet />
      </div>
    </div>
  );
};

export default Admin;
