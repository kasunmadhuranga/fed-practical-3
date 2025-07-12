// import React from 'react';
// import { BiSolidMessageRoundedDots } from "react-icons/bi";

// interface NewsCardProps {
//     image: string;
//     date: string;
//     month: string;
//     title: string;
//     author: string;
//     comments: number;
//     description: string;
// }

// const NewsCard: React.FC<NewsCardProps> = ({ image, date, month, title, author, comments, description }) => {
//     return (
//         <div className='flex transition-colors duration-500 group cursor-pointer shadow-lg'>
//             <div
//                 className='bg-center bg-no-repeat bg-cover w-1/2 relative'
//                 style={{ backgroundImage: `url(${image})` }}
//             >
//                 <div className='absolute top-0 left-0 bg-[#3d4e5d]  group-hover:bg-[#00c0e4] text-white w-[50px] h-[50px] text-center flex items-center justify-center'>
//                     <div>
//                         <p className='font-bold text-[28px] leading-[26px]'>{date}</p>
//                         <p className='text-[12px] leading-[12px]'>{month}</p>
//                     </div>
//                 </div>
//             </div>
//             <div className='w-1/2 bg-[#f5f5f5]  duration-500 transition-colors group-hover:bg-[#00c0e4] text-white px-9 py-9'>
//                 <p className='font-bold text-black group-hover:text-white'>{title}</p>
//                 <div className='flex items-center py-3 text-black group-hover:text-white'>
//                     <p className='font-medium'>{author}</p>
//                     <BiSolidMessageRoundedDots className='ml-3 mr-3 text-[#00c0e4] group-hover:text-white' />
//                     <p className='font-medium'>{comments}</p>
//                 </div>
//                 <p className='text-gray-600 group-hover:text-white'>{description}</p>
//             </div>
//         </div>
//     );
// };

// export default NewsCard;




// NewsCard.tsx
import React from 'react';
import { BiSolidMessageRoundedDots } from "react-icons/bi";

interface NewsCardProps {
    image: string;
    date: string;
    month: string;
    title: string;
    author: string;
    comments: number;
    description: string;
}

const NewsCard: React.FC<NewsCardProps> = ({ image, date, month, title, author, comments, description }) => {
    return (
        <div className='flex flex-col sm:flex-row transition-colors duration-500 group cursor-pointer shadow-lg hover:shadow-xl'>
            <div
                className='sm:w-1/2 h-48 sm:h-auto bg-center bg-no-repeat bg-cover relative'
                style={{ backgroundImage: `url(${image})` }}
            >
                <div className='absolute top-0 left-0 bg-[#3d4e5d] group-hover:bg-[#00c0e4] text-white w-12 h-12 sm:w-[50px] sm:h-[50px] text-center flex items-center justify-center'>
                    <div>
                        <p className='font-bold text-xl sm:text-[28px] leading-5 sm:leading-[26px]'>{date}</p>
                        <p className='text-xs leading-3 sm:leading-[12px]'>{month}</p>
                    </div>
                </div>
            </div>
            <div className='sm:w-1/2 bg-[#f5f5f5] duration-500 transition-colors group-hover:bg-[#00c0e4] text-white p-4 sm:px-6 sm:py-6 lg:px-9 lg:py-9'>
                <p className='font-bold text-sm sm:text-base text-black group-hover:text-white line-clamp-2'>
                    {title}
                </p>
                <div className='flex items-center py-2 sm:py-3 text-black group-hover:text-white'>
                    <p className='font-medium text-xs sm:text-sm'>{author}</p>
                    <BiSolidMessageRoundedDots className='ml-2 mr-2 sm:ml-3 sm:mr-3 text-[#00c0e4] group-hover:text-white text-sm' />
                    <p className='font-medium text-xs sm:text-sm'>{comments}</p>
                </div>
                <p className='text-xs sm:text-sm text-gray-600 group-hover:text-white line-clamp-3'>
                    {description}
                </p>
            </div>
        </div>
    );
};

export default NewsCard;
