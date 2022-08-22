import React from "react";
import "./styles.css"
export const Input = ({value, onChange, type}) =>{
    return(
  <input 
  className="textInput"
   value={value}
   onChange={onChange}
   type="type"
   placeholder="type your search"
   />
    )
}