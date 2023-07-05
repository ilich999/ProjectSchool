import React, { useState, useEffect } from "react";
import Second from '../images/Second.png';

const SecondArrow = () => {
    const [rotation, setRotation] = useState(0);
    
    useEffect(() => {
        const interval = setInterval(() => {
            const currentDate = new Date();
            const seconds = currentDate.getSeconds();
            const newRotation = seconds * 6; 
            setRotation(newRotation);
        }, 1000); 
        
        return () => {
            clearInterval(interval); 
        };
    }, []);

    return(
        <img src={Second} style={{ transform: `rotate(${rotation}deg)` }}/> 
    )
}

export default SecondArrow;