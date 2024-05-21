import React, { useState } from "react";
import Image from "next/image";
import SiderbarImage from "/public/MileprixImage.png";
import DashboardIcon from "/public/dashboard.svg";
import DashboardIconActive from "/public/dashboard-active.svg";
import OrdersIcon from "/public/orders.svg";
import OrdersIconActive from "/public/orders-active.svg";
import CompanyIcon from "/public/company.svg";
import CompanyIconActive from "/public/company-active.svg";
import DriversIcon from "/public/drivers.svg";
import DriversIconActive from "/public/drivers-active.svg";
import DevicesIcon from "/public/devices.svg";
import DevicesIconActive from "/public/devices-active.svg";
import AccountIcon from "/public/account.svg";
import AccountIconActive from "/public/account-active.svg";
import SettingsIcon from "/public/settings.svg";
import SettingsIconActive from "/public/settings-active.svg";

interface SidebarProps {
  handleMenuClick: (menu: string) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ handleMenuClick }) => {
  const [activeMenu, setActiveMenu] = useState<string>("dashboard");

  const handleButtonClick = (menu: string) => {
    setActiveMenu(menu);
    handleMenuClick(menu);
  };

  const buttonClasses = (menu: string) =>
    activeMenu === menu
      ? "bg-[#191C52] rounded-[8px] text-white"
      : "bg-transparent text-black";

  const getIcon = (menu: string) => {
    switch (menu) {
      case "dashboard":
        return activeMenu === "dashboard" ? DashboardIconActive : DashboardIcon;
      case "orders":
        return activeMenu === "orders" ? OrdersIconActive : OrdersIcon;
      case "company":
        return activeMenu === "company" ? CompanyIconActive : CompanyIcon;
      case "drivers":
        return activeMenu === "drivers" ? DriversIconActive : DriversIcon;
      case "devices":
        return activeMenu === "devices" ? DevicesIconActive : DevicesIcon;
      case "account":
        return activeMenu === "account" ? AccountIconActive : AccountIcon;
      case "settings":
        return activeMenu === "settings" ? SettingsIconActive : SettingsIcon;
      default:
        return DashboardIcon;
    }
  };

  return (
    <div className="flex gap-8 font-inter font-[500] text-[16px] leading-[30px] flex-col items-start pt-[40px] px-[30px]">
      <Image
        src={SiderbarImage}
        alt="BgImage"
        className=""
      />
      <button
        className={`w-[100%] px-4 py-2 flex items-center gap-6 ${buttonClasses("dashboard")}`}
        onClick={() => handleButtonClick("dashboard")}
      >
        <Image src={getIcon("dashboard")} alt="Dashboard" width={20} height={20} />
        <p>Dashboard</p>
      </button>
      <button
        className={`w-[100%] px-4 py-2 flex items-center gap-6 ${buttonClasses("orders")}`}
        onClick={() => handleButtonClick("orders")}
      >
        <Image src={getIcon("orders")} alt="Orders" width={20} height={20} />
        <p>Orders</p>
      </button>
      <button
        className={`w-[100%] px-4 py-2 flex items-center gap-6 ${buttonClasses("company")}`}
        onClick={() => handleButtonClick("company")}
      >
        <Image src={getIcon("company")} alt="Company" width={20} height={20} />
        <p>Company</p>
      </button>
      <button
        className={`w-[100%] px-4 py-2 flex items-center gap-6 ${buttonClasses("drivers")}`}
        onClick={() => handleButtonClick("drivers")}
      >
        <Image src={getIcon("drivers")} alt="Drivers" width={20} height={20} />
        <p>Drivers</p>
      </button>
      <button
        className={`w-[100%] px-4 py-2 flex items-center gap-6 ${buttonClasses("devices")}`}
        onClick={() => handleButtonClick("devices")}
      >
        <Image src={getIcon("devices")} alt="Devices" width={20} height={20} />
        <p>Devices</p>
      </button>
      <button
        className={`w-[100%] px-4 py-2 flex items-center gap-6 ${buttonClasses("account")}`}
        onClick={() => handleButtonClick("account")}
      >
        <Image src={getIcon("account")} alt="Accounts/Transaction" width={20} height={20} />
        <p>Accounts/Transaction</p>
      </button>
      <button
        className={`w-[100%] px-4 py-2 flex items-center gap-6 ${buttonClasses("settings")}`}
        onClick={() => handleButtonClick("settings")}
      >
        <Image src={getIcon("settings")} alt="Settings" width={20} height={20} />
        <p>Settings</p>
      </button>
    </div>
  );
};

export default Sidebar;
