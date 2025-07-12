
// import React from 'react';
// import Accordion from '../Accordion/Accordion';
// import TestimonialsSlider from './TestimonialsSlider/TestimonialsSlider';

// const TestimonialsWhyChooseUs: React.FC = () => {
//     const accordionItems = [
//         {
//             title: "Dul ac hendrerit elementum quam ipsum auctor lorem",
//             content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in dui mauris. Vivamus hendrerit arcu sed erat molestie vehicula."
//         },
//         {
//             title: "Mauris vel magna a est lobortis volutpat",
//             content: "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae."
//         },
//         {
//             title: "Sed bibendum ornare lorem mauris feugiat suspendisse neque",
//             content: "Aenean ultricies mi vitae est. Mauris placerat eleifend leo. Quisque sit amet est et sapien ullamcorper pharetra."
//         },
//         {
//             title: "Nulla scelerisque dul hendrerit elementum quam",
//             content: "Fusce vel dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero."
//         }
//     ];

//     return (
//         <div className='max-w-[1220px] px-[10px] mx-auto flex flex-col md:flex-row bg-white p-8'>
//             {/* Trusted Clients */}
//             <div className='w-full md:w-1/2 md:pr-6'>
//                 <div className='mb-8'>
//                     <h2 className='text-2xl font-bold mb-1'>TRUSTED CLIENTS</h2>
//                     <h3 className='text-[14px] text-gray-600 uppercase mb-6'>LOREM IPSUM DOLOR SIT AMET CONSECTETUR</h3>
//                     <TestimonialsSlider />
//                 </div>
//             </div>

//             <div className='w-full md:w-1/2 md:pl-6'>
//                 <div className='mb-8'>
//                     <h2 className='text-2xl font-bold mb-1'>WHY CHOOSE US</h2>
//                     <h3 className='text-[14px] text-gray-600 uppercase pb-6 border-b'>LOREM IPSUM DOLOR SIT AMET CONSECTETUR</h3>
//                     <Accordion items={accordionItems} />
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default TestimonialsWhyChooseUs;


// TestimonialsWhyChooseUs.tsx
import React from 'react';
import Accordion from '../Accordion/Accordion';
import TestimonialsSlider from './TestimonialsSlider/TestimonialsSlider';

const TestimonialsWhyChooseUs: React.FC = () => {
    const accordionItems = [
        {
            title: "Dul ac hendrerit elementum quam ipsum auctor lorem",
            content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in dui mauris. Vivamus hendrerit arcu sed erat molestie vehicula."
        },
        {
            title: "Mauris vel magna a est lobortis volutpat",
            content: "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae."
        },
        {
            title: "Sed bibendum ornare lorem mauris feugiat suspendisse neque",
            content: "Aenean ultricies mi vitae est. Mauris placerat eleifend leo. Quisque sit amet est et sapien ullamcorper pharetra."
        },
        {
            title: "Nulla scelerisque dul hendrerit elementum quam",
            content: "Fusce vel dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero."
        }
    ];

    return (
        <div className='max-w-[1220px] px-4 sm:px-[10px] mx-auto flex flex-col lg:flex-row bg-white py-6 sm:py-8 gap-8 sm:gap-0'>
            {/* Trusted Clients */}
            <div className='w-full lg:w-1/2 lg:pr-6'>
                <div className='mb-6 sm:mb-8'>
                    <h2 className='text-xl sm:text-2xl font-bold mb-1'>TRUSTED CLIENTS</h2>
                    <h3 className='text-xs sm:text-[14px] text-gray-600 uppercase mb-4 sm:mb-6'>LOREM IPSUM DOLOR SIT AMET CONSECTETUR</h3>
                    <TestimonialsSlider />
                </div>
            </div>

            {/* Why Choose Us */}
            <div className='w-full lg:w-1/2 lg:pl-6'>
                <div className='mb-6 sm:mb-8'>
                    <h2 className='text-xl sm:text-2xl font-bold mb-1'>WHY CHOOSE US</h2>
                    <h3 className='text-xs sm:text-[14px] text-gray-600 uppercase pb-4 sm:pb-6 border-b'>LOREM IPSUM DOLOR SIT AMET CONSECTETUR</h3>
                    <Accordion items={accordionItems} />
                </div>
            </div>
        </div>
    );
};

export default TestimonialsWhyChooseUs;