import React from "react";
import './index.scss';
import { useNavigate } from "react-router-dom";

function Button({ children, onClick, className, type='button', to }) {
    const navigate = useNavigate();

    const handleClick = () => {
        if (onClick) onClick();
        if (to) navigate(to);
      };

    return (
        <button className={`btn ${className}`} onClick={handleClick} type={type}>
            {children}
        </button>
    );
}

export default Button;