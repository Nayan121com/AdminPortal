import React from "react";
import { CircularProgressbar} from 'react-circular-progressbar';
import "react-circular-progressbar/dist/styles.css";
export const Card = ({props}) => {
  return(
    <>
      <CompactCard Param = {props}/>
    </>
  )
}

function CompactCard({Param}) {
  return(
    <>
      <div className="compactCard">
        <div className="circularBar">
          <CircularProgressbar
          value = '70'
          text = {`${Param.Title}%`}
          />
        </div>
        <div className="details">
            <Param.Icon/>
            <div>${Param.Value}</div>
            <div>Last 24 Hours</div>
        </div>
      </div>
    </>
  )
}