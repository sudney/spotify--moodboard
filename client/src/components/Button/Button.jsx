import React from "react";
import './button.css';

export const Button = ({
    className,
    children, 
    type, 
    onClick, 
}) => {

    return (
        <button
        className={`btn ${className}`}
         onClick={onClick} type={type}>
            {children}
        </button>
    );
};