import React from "react";
import {Card} from './Card/Card.js';
import './Cards.css';
import {cardsData} from '../../Data/data.js';

export const Cards = () => {
  return (
    <>
      <div className="Cards">
          {
            cardsData.map((item) => {
              return (
                <div className="CardContainer">
                  <Card
                    Title = {item.title}
                    BarValue = {item.barValue}
                    Value = {item.value}
                    Color = {item.color}
                    Icon = {item.icon}
                  />
                </div>
              );
            })
          }
      </div>
    </>
  )
}