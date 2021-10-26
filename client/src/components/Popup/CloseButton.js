import React from "react";
import './popup.css';


export const CloseButton = ({
    children, 
    type, 
    onClick, 
}) => {

    return (       
        <button
        className="close"
         onClick={onClick} type={type}>
            {children}
        </button>
    );
};
export default CloseButton