import { NavLink as RouterNavLink } from "react-router-dom";

interface NavLinkProps {
    to: string;
    children: React.ReactNode;
    end?: boolean;
    className?: string;
    activeClassName?: string;
    inactiveClassName?: string;
    onClick?: () => void; 
}

export const NavLink = ({
    to,
    children,
    end = false,
    className = "",
    activeClassName = "",
    inactiveClassName = "",
    onClick, 
}: NavLinkProps) => {
    return (
        <RouterNavLink
            to={to}
            end={end}
            className={({ isActive }) =>
                `${className} ${isActive ? activeClassName : inactiveClassName}`
            }
            onClick={onClick} 
        >
            {children}
        </RouterNavLink>
    );
};