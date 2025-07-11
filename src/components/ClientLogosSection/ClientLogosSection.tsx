import React from 'react';
import logo1 from "../../assets/images/client-logo/logo1.jpg";
import logo2 from "../../assets/images/client-logo/logo2.jpg";
import logo3 from "../../assets/images/client-logo/logo3.jpg";
import logo4 from "../../assets/images/client-logo/logo4.jpg";
import logo5 from "../../assets/images/client-logo/logo5.jpg";

const ClientLogosSection: React.FC = () => {
    return (
        <div className='max-w-[1220px] px-[10px] mx-auto py-10 grid grid-cols-5'>
            <div className=''>
                <img src={logo1} alt="" />
            </div>
            <div className='flex justify-center'>
                <img src={logo2} alt="" />
            </div>
            <div className='flex justify-center'>
                <img src={logo3} alt="" />
            </div>
            <div className='flex justify-center'>
                <img src={logo4} alt="" />
            </div>
            <div className='flex justify-end'>
                <img src={logo5} alt="" />
            </div>
        </div>
    );
};

export default ClientLogosSection;
