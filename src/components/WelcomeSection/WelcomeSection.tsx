// import React from 'react';
// import Button from '../Buttons/Buttons';
// import welcome from "../../assets/images/welcome.jpg";

// const WelcomeSection: React.FC = () => {
    

//     return (
//         <div className='max-w-[1220px] px-[10px] mx-auto flex'>
//             <div className='w-[60%] py-8'>
//                 <img src={welcome} alt="welcome image" />
//             </div>
//             <div className='w-[40%] my-auto'>
//                 <h3 className='text-[36px] leading-[40px] pb-2 max-w-[400px]'>TransMax Logistics Around <span className='text-[#ff7c45]'>the World</span></h3>
//                 <p className='max-w-[450px] pb-3'>Transmax is the world's driving worldwide coordinations supplier — we uphold industry and exchange the worldwide trade of merchandise through land transport.</p>
//                 <p className='text-gray-500 max-w-[450px] pb-3'>Our worth added administrations guarantee the progression of products proceeds consistently and supply chains stay lean and streamlined for progress.</p>
//                 <Button className='font-bold text-[14px]' text="MORE ABOUT US" buttonColor="bg-[#f2f5f5]" textColor="text-[#567477]" />
//             </div>
//         </div>
//     );
// };

// export default WelcomeSection;

import React from 'react';
import Button from '../Buttons/Buttons';
import welcome from "../../assets/images/welcome.jpg";

const WelcomeSection: React.FC = () => {
    return (
        <div className='max-w-[1220px] px-[10px] mx-auto flex flex-col lg:flex-row'>
            <div className='w-full lg:w-[60%] py-4 lg:py-8'>
                <img src={welcome} alt="welcome image" className='w-full lg:w-auto' />
            </div>
            <div className='w-full lg:w-[40%] my-auto pt-4 lg:pt-0 pb-8 lg:pb-0'>
                <h3 className='text-2xl sm:text-3xl lg:text-[36px] leading-tight lg:leading-[40px] pb-2 max-w-[400px]'>
                    TransMax Logistics Around <span className='text-[#ff7c45]'>the World</span>
                </h3>
                <p className='max-w-[450px] pb-3 text-sm sm:text-base'>
                    Transmax is the world's driving worldwide coordinations supplier — we uphold industry and exchange the worldwide trade of merchandise through land transport.
                </p>
                <p className='text-gray-500 max-w-[450px] pb-3 text-sm sm:text-base'>
                    Our worth added administrations guarantee the progression of products proceeds consistently and supply chains stay lean and streamlined for progress.
                </p>
                <Button
                    className='font-bold text-[14px]'
                    text="MORE ABOUT US"
                    buttonColor="bg-[#f2f5f5]"
                    textColor="text-[#567477]"
                />
            </div>
        </div>
    );
};

export default WelcomeSection;
