import { cardClasses, colors } from "@mui/material";
import dropdown from './../../../public/dropdown.svg';
import React from "react";

const OrdersContent: React.FC = () => {
  const cardData = [
    {
      id: "#ORDERID12892193",
      name: "Peter Parker",
      status: "PROCESSING",
      colors: "#FF5701",
      source:"Lagos",
      destination:"Moscow",
      l: "300 M",
      w:"200 M",
      h:"300 M",
      driver: "Philip Smith",
      etea : "18 mins"
    },
    {
      id: "#ORDERID44756210",
      name: "John Doe",
      status: "COMPLETED",
      colors: "#23BA27",
      source:"Lagos",
      destination:"Moscow",
      l: "300 M",
      w:"200 M",
      h:"300 M",
      driver: "Peter Parker",
      etea : "18 mins"
    },
    {
      id: "#ORDERID78452695",
      name: "Ruth Jones",
      status: "PROCESSING",
      colors: "#FF5701",
      source:"Lagos",
      destination:"Moscow",
      l: "300 M",
      w:"200 M",
      h:"300 M",
      driver: "Philip Smith",
      etea : "18 mins"
    },
    {
      id: "#ORDERID12892193",
      name: "Johnny Davis",
      status: "CANCELLED",
      colors: "#DF3030",
      source:"Lagos",
      destination:"Moscow",
      l: "300 M",
      w:"200 M",
      h:"300 M",
      driver: "Rick Smith",
      etea : "18 mins"
    },
    {
      id: "#ORDERID12892193",
      name: "Charlie Doe",
      status: "PROCESSING",
      colors: "#FF5701",
      source:"Lagos",
      destination:"Moscow",
      l: "300 M",
      w:"200 M",
      h:"300 M",
      driver: "Antonio Williams",
      etea : "18 mins"
    }
  ];

  return (
    <div className="max-w-[1400px] mx-auto">
    <div className="grid grid-cols-3 gap-x-8 ml-9">
      {cardData.map((card, index) => (
        // parent container
        <div key={index}>
          {/* card */}
          <div className="space-y-5 mt-[30px] w-[260px] bx-shadow">
            {/* id + drop down */}
            <div className="flex justify-between items-center">
              {/* left */}
              <div className="font-[700] text-[16px] text-[#212121]">{card.id}</div>
              {/* right */}
              <div className="pl-14 cursor-pointer"><img src={dropdown.src} alt="dropdown" /></div>
            </div>
            {/* name and status */}
            <div className="flex justify-between items-center">
              {/* left */}
              <div>
                <div className="font-[400] text-[14px] text-[#212121]">Receiver Name</div>
                <div className="font-[500] font-Rubik text-[16px] text-black">{card.name}</div>
              </div>
              {/* right */}
              <div>
                <div className="font-[400] text-[14px] text-[#212121]">Order Status</div>
                <div className="font-[500] text-[16px]" style={{ color: card.colors }}>{card.status}</div>
              </div>
            </div>
           {/* source and destination */}
           <div className="flex justify-between items-center">
              {/* left */}
              <div>
                <div className="font-[400] text-[14px] text-[#212121]">Source</div>
                <div className="font-[500] font-Rubik text-[16px] text-black">{card.source}</div>
              </div>
              {/* right */}
              <div>
                <div className="font-[400] text-[14px] text-[#212121]">Destination</div>
                <div className="font-[500] font-Rubik text-[16px]">{card.destination}</div>
              </div>
            </div>
            {/* dimension h l w */}
            <div>
            <div>Dimension</div>
            <div className="flex space-x-3">
              {/* L */}
              <div>L: <span className="font-[500] text-[16px] text-black">{card.l}</span></div>
              {/* W */}
              <div>W: <span className="font-[500] text-[16px] text-black">{card.w}</span></div>
              {/* H */}
              <div><span className="font-[500] text-[16px] text-black">{card.h}</span></div>
            </div>
          </div>
          {/* driver etea */}
          <div className="flex justify-between items-center">
              {/* left */}
              <div>
                <div className="font-[400] text-[14px] text-[#212121]">Driver</div>
                <div className="font-Rubik font-[500] text-[16px] text-black">{card.driver}</div>
              </div>
              {/* right */}
              <div>
                <div className="font-[400] text-[14px] text-[#212121]">ETEA</div>
                <div className="font-Rubik font-[500] text-[16px]">{card.etea}</div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
    </div>
  );
}
export default OrdersContent;
