import { useState } from "react";
import { MdOutlineArrowDropDown } from "react-icons/md";

interface DropdownProps {
    title: string;
    items: { name: string; path: string }[];
    isActive: boolean;
    onItemClick?: () => void;
}

export const Dropdown = ({ title, items, isActive, onItemClick }: DropdownProps) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="relative">
            <button
                className={`text-sm font-medium transition-colors duration-200 flex items-center ${isActive
                        ? "border-l-4 border-[#f4c006] pl-1 text-gray-700"
                        : "border-l-4 border-[#ffff] pl-1 hover:text-gray-700"
                    }`}
                onClick={() => setIsOpen(!isOpen)}
            >
                {title}
                <MdOutlineArrowDropDown className="text-[25px] h-[19px]" />
            </button>
            {isOpen && (
                <div className="absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-10">
                    {items.map((item) => (
                        <a
                            key={item.path}
                            href={item.path}
                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
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