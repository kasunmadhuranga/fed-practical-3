import React from 'react';

interface AccordionItemProps {
    title: string;
    content: string;
    isOpen: boolean;
    onClick: () => void;
}

const AccordionItem: React.FC<AccordionItemProps> = ({ title, content, isOpen, onClick }) => {
    return (
        <div className='border-b border-gray-200 pb-2'>
            <button
                className='flex items-center justify-between w-full text-left py-3'
                onClick={onClick}
            >
                <div className='flex'>
                    <span className='font-medium'>{title}</span>
                </div>
                <span className='w-[26px] bg-black text-white text-center'>
                    {isOpen ? '−' : '+'}
                </span>
            </button>
            {isOpen && (
                <div className='pl-6 pb-3 text-gray-600 text-xs'>
                    {content}
                </div>
            )}
        </div>
    );
};

export default AccordionItem;