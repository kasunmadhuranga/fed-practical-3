// import React from 'react';

// interface AccordionItemProps {
//     title: string;
//     content: string;
//     isOpen: boolean;
//     onClick: () => void;
// }

// const AccordionItem: React.FC<AccordionItemProps> = ({ title, content, isOpen, onClick }) => {
//     return (
//         <div className='border-b border-gray-200 pb-2'>
//             <button
//                 className='flex items-center justify-between w-full text-left py-3'
//                 onClick={onClick}
//             >
//                 <div className='flex'>
//                     <span className='font-medium'>{title}</span>
//                 </div>
//                 <span className='w-[26px] bg-black text-white text-center'>
//                     {isOpen ? '−' : '+'}
//                 </span>
//             </button>
//             {isOpen && (
//                 <div className='pl-6 pb-3 text-gray-600 text-xs'>
//                     {content}
//                 </div>
//             )}
//         </div>
//     );
// };

// export default AccordionItem;


// AccordionItem.tsx
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
                className='flex items-center justify-between w-full text-left py-2 sm:py-3 focus:outline-none'
                onClick={onClick}
                aria-expanded={isOpen}
            >
                <div className='flex'>
                    <span className='font-medium text-sm sm:text-base'>{title}</span>
                </div>
                <span className='w-6 h-6 bg-black text-white text-center flex items-center justify-center text-sm sm:text-base'>
                    {isOpen ? '−' : '+'}
                </span>
            </button>
            {isOpen && (
                <div className='pl-4 sm:pl-6 pb-3 text-gray-600 text-xs sm:text-sm'>
                    {content}
                </div>
            )}
        </div>
    );
};

export default AccordionItem;