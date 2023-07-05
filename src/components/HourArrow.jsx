import React, { useState, useEffect } from "react";
import Hour from '../images/Hour.png';

const HourArrow = () => {
    const [rotation, setRotation] = useState(0);
    
    useEffect(() => {
        const interval = setInterval(() => {
            const currentDate = new Date();
            const hours = currentDate.getHours();
            console.log(hours)
            const newRotation = hours * 30; 
            setRotation(newRotation);
        }, 1000); 
        
        return () => {
            clearInterval(interval); 
        };
    }, []);

    return(
        <img src={Hour} style={{ transform: `rotate(${rotation}deg)` }}/> 
    )
}

export default HourArrow;