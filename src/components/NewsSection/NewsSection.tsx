// import React from 'react';
// // import Button from '../Buttons/Buttons';
// // import { BiSolidMessageRoundedDots } from "react-icons/bi";
// import new1 from "../../assets/images/news/new1.jpg";
// import new2 from "../../assets/images/news/new2.jpg";
// import new3 from "../../assets/images/news/new3.jpg";
// import new4 from "../../assets/images/news/new4.jpg";
// import NewsCard from './NewsCard/NewsCard';

// const NewsSection: React.FC = () => {

//     return (
//         <div className='max-w-[1220px] px-[10px] mx-auto pt-5 pb-12'>
//             <div className='flex justify-center'>
//                 <div className='text-center pb-[40px]'>
//                     <h3 className='font-semibold text-[28px]'>LATEST NEWS</h3>
//                         <div className='flex justify-center items-center'>
//                         <span className='block w-[9px] h-[9px] bg-[#00c0e4] '></span>
//                         <p className='text-[12px] text-[#838282] pl-2'>INTEGER CONGUEELIT</p>
//                         </div>
//                 </div>
//             </div>
//             <div className='w-full grid grid-cols-2 gap-6 md:gap-8'>
//                 <NewsCard
//                     image={new1}
//                     date="26"
//                     month="May"
//                     title="CURABITUR LOREM UISM QUIS"
//                     author="Admin"
//                     comments={15}
//                     description="Pellentesque habitant morbi tristique sene ctus eft netus eft malesuada fames turpis egestas: Aenean non donec..."
//                 />
//                 <NewsCard
//                     image={new2}
//                     date="22"
//                     month="May"
//                     title="CURABITUR LOREM UISM QUIS"
//                     author="Admin"
//                     comments={15}
//                     description="Pellentesque habitant morbi tristique sene ctus eft netus eft malesuada fames turpis egestas: Aenean non donec..."
//                 />
//                 <NewsCard
//                     image={new3}
//                     date="20"
//                     month="May"
//                     title="CURABITUR LOREM UISM QUIS"
//                     author="Admin"
//                     comments={15}
//                     description="Pellentesque habitant morbi tristique sene ctus eft netus eft malesuada fames turpis egestas: Aenean non donec..."
//                 />
//                 <NewsCard
//                     image={new4}
//                     date="15"
//                     month="May"
//                     title="CURABITUR LOREM UISM QUIS"
//                     author="Admin"
//                     comments={15}
//                     description="Pellentesque habitant morbi tristique sene ctus eft netus eft malesuada fames turpis egestas: Aenean non donec..."
//                 />
//             </div>
//         </div>
//     );
// };

// export default NewsSection;


// NewsSection.tsx
import React from 'react';
import NewsCard from './NewsCard/NewsCard';
import new1 from "../../assets/images/news/new1.jpg";
import new2 from "../../assets/images/news/new2.jpg";
import new3 from "../../assets/images/news/new3.jpg";
import new4 from "../../assets/images/news/new4.jpg";

const NewsSection: React.FC = () => {
    return (
        <div className='max-w-[1220px] px-4 md:px-[10px] mx-auto pt-5 pb-8 md:pb-12'>
            <div className='flex justify-center'>
                <div className='text-center pb-6 md:pb-[40px]'>
                    <h3 className='font-semibold text-2xl md:text-[28px]'>LATEST NEWS</h3>
                    <div className='flex justify-center items-center'>
                        <span className='block w-[9px] h-[9px] bg-[#00c0e4]'></span>
                        <p className='text-xs md:text-[12px] text-[#838282] pl-2'>INTEGER CONGUEELIT</p>
                    </div>
                </div>
            </div>
            <div className='w-full grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6 lg:gap-8'>
                <NewsCard
                    image={new1}
                    date="26"
                    month="May"
                    title="CURABITUR LOREM UISM QUIS"
                    author="Admin"
                    comments={15}
                    description="Pellentesque habitant morbi tristique sene ctus eft netus eft malesuada fames turpis egestas: Aenean non donec..."
                />
                <NewsCard
                    image={new2}
                    date="22"
                    month="May"
                    title="CURABITUR LOREM UISM QUIS"
                    author="Admin"
                    comments={15}
                    description="Pellentesque habitant morbi tristique sene ctus eft netus eft malesuada fames turpis egestas: Aenean non donec..."
                />
                <NewsCard
                    image={new3}
                    date="20"
                    month="May"
                    title="CURABITUR LOREM UISM QUIS"
                    author="Admin"
                    comments={15}
                    description="Pellentesque habitant morbi tristique sene ctus eft netus eft malesuada fames turpis egestas: Aenean non donec..."
                />
                <NewsCard
                    image={new4}
                    date="15"
                    month="May"
                    title="CURABITUR LOREM UISM QUIS"
                    author="Admin"
                    comments={15}
                    description="Pellentesque habitant morbi tristique sene ctus eft netus eft malesuada fames turpis egestas: Aenean non donec..."
                />
            </div>
        </div>
    );
};

export default NewsSection;