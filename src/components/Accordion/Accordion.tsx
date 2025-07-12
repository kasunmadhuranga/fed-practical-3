// import React, { useState } from 'react';
// import AccordionItem from '../AccordionItem/AccordionItem';

// interface AccordionItemData {
//     title: string;
//     content: string;
// }

// interface AccordionProps {
//     items: AccordionItemData[];
// }

// const Accordion: React.FC<AccordionProps> = ({ items }) => {
//     const [activeIndex, setActiveIndex] = useState<number | null>(null);

//     const handleItemClick = (index: number) => {
//         setActiveIndex(activeIndex === index ? null : index);
//     };

//     return (
//         <div className='space-y-2'>
//             {items.map((item, index) => (
//                 <AccordionItem
//                     key={index}
//                     title={item.title}
//                     content={item.content}
//                     isOpen={activeIndex === index}
//                     onClick={() => handleItemClick(index)}
//                 />
//             ))}
//         </div>
//     );
// };

// export default Accordion;


// Accordion.tsx
import React, { useState } from 'react';
import AccordionItem from '../AccordionItem/AccordionItem';

interface AccordionItemData {
    title: string;
    content: string;
}

interface AccordionProps {
    items: AccordionItemData[];
}

const Accordion: React.FC<AccordionProps> = ({ items }) => {
    const [activeIndex, setActiveIndex] = useState<number | null>(null);

    const handleItemClick = (index: number) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <div className='space-y-2'>
            {items.map((item, index) => (
                <AccordionItem
                    key={index}
                    title={item.title}
                    content={item.content}
                    isOpen={activeIndex === index}
                    onClick={() => handleItemClick(index)}
                />
            ))}
        </div>
    );
};

export default Accordion;