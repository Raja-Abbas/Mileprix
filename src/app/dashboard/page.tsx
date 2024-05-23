'use client'

import Sidebar from "../components/sidebar";
import Main from "../components/main";
import { useRouter } from 'next/navigation';
import { useState } from "react";

const Layout: React.FC = () => {
  const [selectedMenu, setSelectedMenu] = useState("dashboard");
  const [activeMenu, setActiveMenu] = useState<string>("dashboard");
  const router = useRouter();

  const handleMenuClick = (menu: string) =>{
        setActiveMenu(menu);
    setSelectedMenu(menu);
  };


  return (
    <div className="flex bg-white overflow-hidden">
      <div className="w-[320px]">
        <Sidebar handleMenuClick={handleMenuClick}/>
      </div>
      <div className="relative flex justify-between flex-1 flex-col overflow-y-auto overflow-x-hidden">
        <div className="mx-auto bg-[#F9F9F9] h-screen w-[100%] p-4 md:p-6 2xl:p-10">
          <Main selectedMenu={selectedMenu}/>
        </div>
      </div>
    </div>
  );
};

export default Layout;
