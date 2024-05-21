import React from "react";

interface HeaderProps {
  activeMenu: string;
}

const Header: React.FC<HeaderProps> = ({ activeMenu }) => {
  return (
    <div className="flex fixed justify-between items-center w-[100%] p-4 px-12 bg-white">
    <div className="flex justify-between">
      <h1 className="text-[30px] font-[800]">{activeMenu.charAt(0).toUpperCase() + activeMenu.slice(1)}</h1>
    </div>
    <div> 
      <input type="text" placeholder="enter something" />
      </div>
    </div>
  );
};

export default Header;
