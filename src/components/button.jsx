import React from "react";
import '../styles/button.css'

const Button = ({innerText, onClick, id}) => {
    return (
        <button onClick={onClick}
            className="button" 
            id={id}
        >
        {innerText}
        </button>
    );
};

export default Button;