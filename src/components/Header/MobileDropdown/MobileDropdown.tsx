import { useState } from "react";
import { MdOutlineArrowDropDown } from "react-icons/md";

interface MobileDropdownProps {
    title: string;
    items: { name: string; path: string }[];
    isActive: boolean;
    onItemClick?: () => void;
}

export const MobileDropdown = ({ title, items, isActive, onItemClick }: MobileDropdownProps) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div>
            <button
                className={`w-full text-left py-2 px-4 rounded-md flex justify-between items-center ${isActive ? "bg-blue-50 text-blue-600" : "text-gray-600 hover:bg-gray-100"
                    }`}
                onClick={() => setIsOpen(!isOpen)}
            >
                <span>{title}</span>
                <MdOutlineArrowDropDown className="text-[25px] h-[19px]" />
            </button>
            {isOpen && (
                <div className="ml-4 mt-1 space-y-2">
                    {items.map((item) => (
                        <a
                            key={item.path}
                            href={item.path}
                            className="block py-2 px-4 rounded-md text-gray-600 hover:bg-gray-100"
                            onClick={() => {
                                setIsOpen(false);
                                onItemClick?.();
                            }}
                        >
                            {item.name}
                        </a>
                    ))}
                </div>
            )}
        </div>
    );
};