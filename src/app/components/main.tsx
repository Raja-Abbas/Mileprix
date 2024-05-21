import React from "react";
import Dashboard from "./dashboard";
import Orders from "./orders";
import Company from "./company";
import Drivers from "./drivers";
import Devices from "./devices";
import Account from "./account";
import Settings from "./settings";

interface MainProps {
  selectedMenu: string;
}

const Main: React.FC<MainProps> = ({ selectedMenu }) => {
  const renderComponent = () => {
    switch (selectedMenu) {
      case "dashboard":
        return <Dashboard />;
      case "orders":
        return <Orders />;
      case "company":
        return <Company />;
      case "drivers":
        return <Drivers />;
      case "devices":
        return <Devices />;
      case "account":
        return <Account />;
      case "settings":
        return <Settings />;
      default:
        return <Dashboard />; // Default component if none matches
    }
  };

  return (
    <div className="main pt-10">
      {renderComponent()}
    </div>
  );
};

export default Main;
