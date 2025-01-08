import { IoIosSwitch } from "react-icons/io";
import { PiUserSwitchDuotone } from "react-icons/pi";
import "./ToggleSwitch.css";
import { useState } from "react";

export const ToggleSwitch = () => {

const[isOn,setIsOn] = useState(false);
const handleToggleSwitch = () => {
    setIsOn(!isOn);
}

const checkIsOn = isOn ? "on" : "off";
const bgColor = {backgroundColor :  isOn ? "#4caf50" : "#f44336"};
    return (
        <>
        <h1 style={{color: "#000",textAlign: "center"}} >
            Toggle Switch <IoIosSwitch style={{color: "red",textAlign: "center"}}
             /> 
             
            </h1>
            <h1><PiUserSwitchDuotone /></h1>
        <div className="toggle-switch" onClick={handleToggleSwitch} style={bgColor}>
            <div className={`switch ${checkIsOn}`}>
                <span className="switch-state">{checkIsOn}</span>
            </div>
        </div>
        </>
    );
};