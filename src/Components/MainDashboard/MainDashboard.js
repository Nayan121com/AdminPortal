import React from "react";
import './MainDashboard.css';
import {Cards} from './Cards.js';

export const MainDashboard = () => {
  return(
    <>
    <div className="mainDashboard">
      <h1>DashBoard</h1>
      <Cards/>
    </div>
    </>
  )
}