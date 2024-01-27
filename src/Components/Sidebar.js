import React, { useState } from "react";
import './Sidebar.css';
//import {Logo} from '../Constants.js';
import Logo from "../image/logo.png";
import { SidebarData } from "../Data/data";
// import {UilEstate} from '@iconscout/react-unicons';
import {UilSignOutAlt} from '@iconscout/react-unicons';
export const Sidebar = () => {
  const [selected, setSelected] = useState(0);
  return (
    <div className="sidebar">
      <div className="logo">
        <img src={Logo} alt="logo" />
        <span>
          Sh<span>o</span>p
        </span>
      </div>
      <div className="menu">
        {
          SidebarData.map((item, index) => {
            return (
              <div 
                className={(selected === index)?"menuItem active" : "menuItem"}
                key={index}
                onClick={() => setSelected(index)}
              >
                <item.icon/>
                <span>{item.heading}</span>
              </div>
            );
          })   
        }
        <div className="menuItem">
          <UilSignOutAlt/>
        </div>
      </div>
    </div>
  )
}
