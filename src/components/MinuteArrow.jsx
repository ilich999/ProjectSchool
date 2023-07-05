import React, { useState, useEffect } from "react";
import Minute from '../images/Minute.png';

const MinuteArrow = () => {
    const [rotation, setRotation] = useState(0);
    
    useEffect(() => {
        const interval = setInterval(() => {
            const currentDate = new Date();
            const minutes = currentDate.getMinutes();
            const newRotation = minutes * 6; 
            setRotation(newRotation);
        }, 10); 
        
        return () => {
            clearInterval(interval); 
        };
    }, []);

    return(
        <img src={Minute} style={{ transform: `rotate(${rotation}deg)` }}/> 
    )
}

export default MinuteArrow;