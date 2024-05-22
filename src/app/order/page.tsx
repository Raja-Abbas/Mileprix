'use client';
import React, { useState } from "react";
import Sidebar from "../components/sidebar";
import Header from "../components/header";
import Main from "../components/main";
import { useRouter } from 'next/navigation';

const Layout: React.FC = () => {
  const [selectedMenu, setSelectedMenu] = useState("orders");
  const [activeMenu, setActiveMenu] = useState<string>("orders");
  const router = useRouter();

  const handleMenuClick = (menu: string) => {
    setSelectedMenu(menu);
  };
  

  return (
    <div className="flex bg-white h-screen">
      <Sidebar handleMenuClick={handleMenuClick}/>
      <div className="relative flex flex-1 flex-col">
       <Header activeMenu={activeMenu}/>
        <div className="mx-auto bg-[#F9F9F9] h-screen w-[100%] p-4 md:p-6 2xl:p-10">
        <Main selectedMenu={selectedMenu}/>
        </div>
      </div>
    </div>
  );
};

export default Layout;
