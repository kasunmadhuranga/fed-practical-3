// import React from 'react';

// interface ButtonProps {
//     text: string;
//     buttonColor: string; 
//     textColor: string; 
//     onClick?: () => void;
//     className?: string;
// }

// const Button: React.FC<ButtonProps> = ({ text, buttonColor, textColor, onClick, className = '' }) => {
//     return (
//         <button
//             onClick={onClick}
//             className={`${buttonColor} ${textColor} px-4 py-2 shadow-md hover:opacity-90 transition duration-200 ${className}`}
//         >
//             {text}
//         </button>
//     );
// };

// export default Button;


import React from 'react';

interface ButtonProps {
    text: string;
    buttonColor: string;
    textColor: string;
    hoverColor?: string; // Optional hover color
    onClick?: () => void;
    className?: string;
    disabled?: boolean;
    size?: 'sm' | 'md' | 'lg'; // Size variants
    fullWidth?: boolean;
    type?: 'button' | 'submit' | 'reset';
    icon?: React.ReactNode; // Optional icon
    iconPosition?: 'left' | 'right';
}

const Button: React.FC<ButtonProps> = ({
    text,
    buttonColor,
    textColor,
    hoverColor,
    onClick,
    className = '',
    disabled = false,
    size = 'md',
    fullWidth = false,
    type = 'button',
    icon,
    iconPosition = 'left'
}) => {
    const sizeClasses = {
        sm: 'px-3 py-1.5 text-sm',
        md: 'px-4 py-2 text-base',
        lg: 'px-6 py-3 text-lg'
    };

    return (
        <button
            type={type}
            onClick={onClick}
            disabled={disabled}
            className={`
                ${buttonColor} 
                ${textColor} 
                ${sizeClasses[size]}
                ${fullWidth ? 'w-full' : 'w-auto'}
                ${hoverColor ? `hover:${hoverColor}` : 'hover:opacity-90'} 
                shadow-md 
                transition 
                duration-200 
                rounded 
                font-medium
                flex items-center justify-center
                gap-2
                ${disabled ? 'opacity-60 cursor-not-allowed' : 'cursor-pointer'}
                ${className}
            `}
            aria-disabled={disabled}
        >
            {icon && iconPosition === 'left' && (
                <span className="inline-flex">{icon}</span>
            )}
            {text}
            {icon && iconPosition === 'right' && (
                <span className="inline-flex">{icon}</span>
            )}
        </button>
    );
};

export default Button;