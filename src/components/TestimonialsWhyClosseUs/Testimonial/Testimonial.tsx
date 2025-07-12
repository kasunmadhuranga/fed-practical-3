// import React from 'react';
// import { FaQuoteLeft } from 'react-icons/fa';

// interface TestimonialProps {
//     key: number;
//     name: string;
//     designation: string;
//     text: string;
// }

// const Testimonial: React.FC<TestimonialProps> = ({ key, name, designation, text }) => {
//     return (
//         <div key={key} className="">
//             <div className="relative bg-gray-100 p-10 pl-16 pr-10 text-gray-700 rounded-md ml-[11px]">
//                 <div
//                     className="absolute left-[-10px] top-1/2 -translate-y-1/2 bg-red-700 w-[60px] h-12 flex items-center pl-4"
//                     style={{ clipPath: 'polygon(0px 0px, 100% 0px, 75% 0%, 100% 100%, 0px 100%)' }}
//                 >
//                     <FaQuoteLeft className="text-white text-[14px]" />
//                 </div>

//                 <p className="text-sm md:text-base leading-relaxed">{text}</p>

//                 <div
//                     className="absolute bottom-[-20px] right-10  bg-gray-100 w-5 h-5 flex items-center justify-center"
//                     style={{ clipPath: 'polygon(0px 0px, 100% 0px, 100% 0%, 0% 100%, 0px 100%)' }}
//                 ></div>
//             </div>
//             <div className='flex justify-end text-right pt-6 pr-[30px]'>
//                 <div>
//                     <p className='text-[18px] font-semibold'>{name}</p>
//                     <p className='text-gray-700 text-[14px]'>{designation}</p>
//                 </div>
//            </div>
//         </div>
//     );
// };

// export default Testimonial;


// Testimonial.tsx
import React from 'react';
import { FaQuoteLeft } from 'react-icons/fa';

interface TestimonialProps {
    key: number;
    name: string;
    designation: string;
    text: string;
}

const Testimonial: React.FC<TestimonialProps> = ({ key, name, designation, text }) => {
    return (
        <div key={key} className="">
            <div className="relative bg-gray-100 p-6 sm:p-8 md:p-10 pl-12 sm:pl-16 pr-6 sm:pr-10 text-gray-700 rounded-md ml-[11px]">
                <div
                    className="absolute left-[-10px] top-1/2 -translate-y-1/2 bg-red-700 w-12 sm:w-[60px] h-10 sm:h-12 flex items-center pl-3 sm:pl-4"
                    style={{ clipPath: 'polygon(0px 0px, 100% 0px, 75% 0%, 100% 100%, 0px 100%)' }}
                >
                    <FaQuoteLeft className="text-white text-xs sm:text-[14px]" />
                </div>

                <p className="text-xs sm:text-sm md:text-base leading-relaxed">{text}</p>

                <div
                    className="absolute bottom-[-20px] right-6 sm:right-10 bg-gray-100 w-4 h-4 sm:w-5 sm:h-5 flex items-center justify-center"
                    style={{ clipPath: 'polygon(0px 0px, 100% 0px, 100% 0%, 0% 100%, 0px 100%)' }}
                ></div>
            </div>
            <div className='flex justify-end text-right pt-4 sm:pt-6 pr-4 sm:pr-[30px]'>
                <div>
                    <p className='text-base sm:text-[18px] font-semibold'>{name}</p>
                    <p className='text-gray-700 text-xs sm:text-[14px]'>{designation}</p>
                </div>
            </div>
        </div>
    );
};

export default Testimonial;