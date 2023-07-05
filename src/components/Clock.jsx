import React from "react";

import Center from '../images/Center.png';
import NumPalet from '../images/NumPalet.png';

import SecondArrow from './SecondArrow';
import MinuteArrow from './MinuteArrow';
import HourArrow from './HourArrow';

const Clock = () => {
    return(
        <div className="clock">
        <img src={NumPalet}></img>
        <SecondArrow/>
        <MinuteArrow/>
        <HourArrow/>
        <img src={Center}></img> 
      </div>
    )
}

export default Clock