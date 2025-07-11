import React from 'react';

interface ButtonProps {
    text: string;
    buttonColor: string; 
    textColor: string; 
    onClick?: () => void;
    className?: string;
}

const Button: React.FC<ButtonProps> = ({ text, buttonColor, textColor, onClick, className = '' }) => {
    return (
        <button
            onClick={onClick}
            className={`${buttonColor} ${textColor} px-4 py-2 shadow-md hover:opacity-90 transition duration-200 ${className}`}
        >
            {text}
        </button>
    );
};

export default Button;
