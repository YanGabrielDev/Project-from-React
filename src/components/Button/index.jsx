import React from "react";
import './styles.css'
export const Button = ({text, onClick, disabled}) => {
    return(
        <button 
        disabled={disabled}
        onClick={onClick} className='button'>{text}</button>
    )
}
