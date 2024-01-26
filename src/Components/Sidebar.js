import React from "react";
import './Sidebar.css';
//import {Logo} from '../Constants.js';
import Logo from "../image/logo.png";
import { SidebarData } from "../Data/data";
// import {UilEstate} from '@iconscout/react-unicons';

export const Sidebar = () => {
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
              <div className="menuItem">
                <item.icon/>
                <span>{item.heading}</span>
              </div>
            );
          })   
        }
      </div>
    </div>
  )
}
