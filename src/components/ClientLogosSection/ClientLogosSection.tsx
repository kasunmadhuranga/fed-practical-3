// import React from 'react';
// import logo1 from "../../assets/images/client-logo/logo1.jpg";
// import logo2 from "../../assets/images/client-logo/logo2.jpg";
// import logo3 from "../../assets/images/client-logo/logo3.jpg";
// import logo4 from "../../assets/images/client-logo/logo4.jpg";
// import logo5 from "../../assets/images/client-logo/logo5.jpg";

// const ClientLogosSection: React.FC = () => {
//     return (
//         <div className='max-w-[1220px] px-[10px] mx-auto py-10 grid grid-cols-5'>
//             <div className=''>
//                 <img src={logo1} alt="" />
//             </div>
//             <div className='flex justify-center'>
//                 <img src={logo2} alt="" />
//             </div>
//             <div className='flex justify-center'>
//                 <img src={logo3} alt="" />
//             </div>
//             <div className='flex justify-center'>
//                 <img src={logo4} alt="" />
//             </div>
//             <div className='flex justify-end'>
//                 <img src={logo5} alt="" />
//             </div>
//         </div>
//     );
// };

// export default ClientLogosSection;


import React from 'react';
import logo1 from "../../assets/images/client-logo/logo1.jpg";
import logo2 from "../../assets/images/client-logo/logo2.jpg";
import logo3 from "../../assets/images/client-logo/logo3.jpg";
import logo4 from "../../assets/images/client-logo/logo4.jpg";
import logo5 from "../../assets/images/client-logo/logo5.jpg";

const ClientLogosSection: React.FC = () => {
    return (
        <div className='max-w-[1220px] px-4 sm:px-[10px] mx-auto py-8 sm:py-10'>
            <div className='grid grid-cols-2 sm:grid-cols-5 gap-6 sm:gap-4'>
                {/* Logo 1 - Full width on mobile, first in row */}
                <div className='flex items-center justify-center sm:justify-start'>
                    <img
                        src={logo1}
                        alt="Client logo 1"
                        className='max-h-10 sm:max-h-12 w-auto object-contain'
                    />
                </div>

                {/* Logo 2 - Centered on all screens */}
                <div className='flex items-center justify-center'>
                    <img
                        src={logo2}
                        alt="Client logo 2"
                        className='max-h-10 sm:max-h-12 w-auto object-contain'
                    />
                </div>

                {/* Logo 3 - Centered on all screens */}
                <div className='flex items-center justify-center'>
                    <img
                        src={logo3}
                        alt="Client logo 3"
                        className='max-h-10 sm:max-h-12 w-auto object-contain'
                    />
                </div>

                {/* Logo 4 - Centered on all screens */}
                <div className='flex items-center justify-center'>
                    <img
                        src={logo4}
                        alt="Client logo 4"
                        className='max-h-10 sm:max-h-12 w-auto object-contain'
                    />
                </div>

                {/* Logo 5 - Full width on mobile, last in row */}
                <div className='flex items-center justify-center sm:justify-end'>
                    <img
                        src={logo5}
                        alt="Client logo 5"
                        className='max-h-10 sm:max-h-12 w-auto object-contain'
                    />
                </div>
            </div>
        </div>
    );
};

export default ClientLogosSection;