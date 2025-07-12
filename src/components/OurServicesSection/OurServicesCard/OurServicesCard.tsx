// import React from 'react';
// import { IoArrowForwardCircle } from "react-icons/io5";
// import { Link } from 'react-router-dom';

// interface OurServicesCardProps {
//     key: number;
//     image: string;
//     title: string;
//     readmore: string;
//     description: string;
// }

// const OurServicesCard: React.FC<OurServicesCardProps> = ({ key, image, title, readmore, description }) => {
//     return (
//         <div key={key} className='flex mx-4 my-4 rounded-[10px] overflow-hidden shadow-[0_2px_6px_rgba(19,19,19,0.12),_0_1px_2px_rgba(19,19,19,0.08)] hover:shadow-[0_8px_24px_rgba(19,19,19,0.1),_0_2px_8px_rgba(19,19,19,0.08)] transition-transform duration-300 ease-in-out bg-[#ffff]'>
//             <div
//                 className='bg-right-bottom bg-no-repeat bg-cover w-1/2 relative'
//                 style={{ backgroundImage: `url(${image})` }}
//             >
//             </div>
//             <div className='w-1/2  px-9 py-9'>
//                 <p className='font-bold'>{title}</p>
//                 <p className='py-3 text-[#606060]'>{description}</p>
//                 <div className='flex items-center'>
//                     <Link to={readmore} className='flex items-center'>
//                         <IoArrowForwardCircle className='mr-2 text-2xl' />
//                     Read More
//                     </Link>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default OurServicesCard;


// OurServicesCard.tsx
import React from 'react';
import { IoArrowForwardCircle } from "react-icons/io5";
import { Link } from 'react-router-dom';

interface OurServicesCardProps {
    key: number;
    image: string;
    title: string;
    readmore: string;
    description: string;
}

const OurServicesCard: React.FC<OurServicesCardProps> = ({ key, image, title, readmore, description }) => {
    return (
        <div key={key} className='flex flex-col sm:flex-row mx-2 sm:mx-4 my-2 sm:my-4 rounded-lg sm:rounded-[10px] overflow-hidden shadow-[0_2px_6px_rgba(19,19,19,0.12),_0_1px_2px_rgba(19,19,19,0.08)] hover:shadow-[0_8px_24px_rgba(19,19,19,0.1),_0_2px_8px_rgba(19,19,19,0.08)] transition-all duration-300 ease-in-out bg-white'>
            <div
                className='sm:w-1/2 h-48 sm:h-auto bg-cover bg-center'
                style={{ backgroundImage: `url(${image})` }}
            >
            </div>
            <div className='sm:w-1/2 p-4 sm:px-6 sm:py-6 lg:px-9 lg:py-9'>
                <p className='font-bold text-lg sm:text-xl'>{title}</p>
                <p className='py-2 sm:py-3 text-sm sm:text-base text-[#606060]'>{description}</p>
                <div className='flex items-center'>
                    <Link to={readmore} className='flex items-center text-sm sm:text-base text-[#8cba43] hover:text-[#6a9730]'>
                        <IoArrowForwardCircle className='mr-2 text-xl sm:text-2xl' />
                        Read More
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default OurServicesCard;