// import React, { useState } from 'react';
// import Slider from 'react-slick';
// import banner from "../../assets/images/banner.jpg";
// import banner2 from "../../assets/images/banner2.jpg";
// import banner3 from "../../assets/images/banner3.jpg";
// import { FaLongArrowAltLeft, FaLongArrowAltRight } from "react-icons/fa";
// import Button from '../Buttons/Buttons';

// interface ArrowProps {
//     onClick?: () => void;
//   }

// const images = [banner, banner2, banner3];

// const NextArrow: React.FC<ArrowProps> = ({ onClick }) => (
//     <button
//         onClick={onClick}
//         className="absolute text-white bottom-[4px] left-[100px] z-[9] text-[35px]"
//     >
//         <FaLongArrowAltRight />
//     </button>
// );

// const PrevArrow: React.FC<ArrowProps> = ({ onClick }) => (
//     <button
//         onClick={onClick}
//         className="absolute text-white bottom-[4px] left-[59px] z-[9] text-[35px]"
//     >
//         <FaLongArrowAltLeft />
//     </button>
// );
  
// const BannerSection: React.FC = () => {
//     const [currentSlide, setCurrentSlide] = useState(1);

//     const settings = {
//         dots: false,
//         infinite: true,
//         speed: 2000,
//         autoplaySpeed: 2500,
//         slidesToShow: 1,
//         autoplay: true,
//         slidesToScroll: 1,
//         // fade: true,
//         // cssEase: 'linear',
//         // cssEase: 'ease-in-out',
//         nextArrow: <NextArrow />,
//         prevArrow: <PrevArrow />,
//         afterChange: (index: number) => setCurrentSlide(index + 1),
//     };

//     return (
//         <div className='w-full flex relative'>
//             <div className='w-[30%] my-auto'>
//                 <div className="ml-[44px] z-[9] relative w-full bg-white px-4 py-12">
//                     <p className='relative pl-3 mb-4'>
//                         <span className="block bg-[#f4c006] w-[4px] h-full left-0 absolute"></span>
//                         LOGISTIC
//                     </p>
//                     <h1 className='text-[55px] leading-[50px] mb-4'>Best Shipping</h1>
//                     <h2 className='text-[55px] leading-[50px] font-bold text-[#f4c006] mb-2'>Partner</h2>
//                     <p className='py-8'>Amet, tempus egestas facilisis volutapat viverra molestie lobortis posuere maecenas. molestie lobortis posuere maecenas. Eget sapien, gravida nequi.</p>
//                     <Button text="DISCOVER MORE" buttonColor="bg-[#f4c006]" textColor="text-white" />
//                 </div>
//             </div>
//             <div style={{ width: 'calc(70% - 40px)' }} className="">
//                 <Slider {...settings} className='!static'>
//                     {images.map((img, index) => (
//                         <div key={index}>
//                             <img src={img} alt={`Slide ${index + 1}`} className="w-full h-[80vh] object-cover" />
//                         </div>
//                     ))}
//                 </Slider>
//                 <div className="absolute bottom-0 left-0 w-[150px] bg-[#f4c006] h-[44px] flex items-center pl-[10px] text-white">
//                     {currentSlide} / {images.length}
//                 </div>
//             </div>
//             <div className='w-[40px] flex items-center justify-center h-[80vh]'>
//                 <div className="-rotate-90 whitespace-nowrap transform origin-center font-semibold text-[14px]">
//                     #Cargoton logistic
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default BannerSection;


import React, { useState } from 'react';
import Slider from 'react-slick';
import banner from "../../assets/images/banner.jpg";
import banner2 from "../../assets/images/banner2.jpg";
import banner3 from "../../assets/images/banner3.jpg";
import { FaLongArrowAltLeft, FaLongArrowAltRight } from "react-icons/fa";
import Button from '../Buttons/Buttons';

interface ArrowProps {
    onClick?: () => void;
}

const images = [banner, banner2, banner3];

const NextArrow: React.FC<ArrowProps> = ({ onClick }) => (
    <button
        onClick={onClick}
        className="absolute text-white bottom-[4px] left-[100px] z-[9] text-[35px] md:block hidden"
    >
        <FaLongArrowAltRight />
    </button>
);

const PrevArrow: React.FC<ArrowProps> = ({ onClick }) => (
    <button
        onClick={onClick}
        className="absolute text-white bottom-[4px] left-[59px] z-[9] text-[35px] md:block hidden"
    >
        <FaLongArrowAltLeft />
    </button>
);

const BannerSection: React.FC = () => {
    const [currentSlide, setCurrentSlide] = useState(1);

    const settings = {
        dots: false,
        infinite: true,
        speed: 2000,
        autoplaySpeed: 2500,
        slidesToShow: 1,
        autoplay: true,
        slidesToScroll: 1,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
        afterChange: (index: number) => setCurrentSlide(index + 1),
    };

    return (
        <div className='w-full flex flex-col md:flex-row relative'>
            {/* Text Content */}
            <div className='w-full md:w-[30%] my-auto order-2 md:order-1'>
                <div className="ml-0 md:ml-[44px] z-[9] relative w-full bg-white px-4 py-6 md:py-12">
                    <p className='relative pl-3 mb-2 md:mb-4 text-sm md:text-base'>
                        <span className="block bg-[#f4c006] w-[4px] h-full left-0 absolute"></span>
                        LOGISTIC
                    </p>
                    <h1 className='text-[32px] md:text-[55px] leading-[30px] md:leading-[50px] mb-2 md:mb-4'>Best Shipping</h1>
                    <h2 className='text-[32px] md:text-[55px] leading-[30px] md:leading-[50px] font-bold text-[#f4c006] mb-1 md:mb-2'>Partner</h2>
                    <p className='py-4 md:py-8 text-sm md:text-base'>
                        Amet, tempus egestas facilisis volutapat viverra molestie lobortis posuere maecenas.
                        molestie lobortis posuere maecenas. Eget sapien, gravida nequi.
                    </p>
                    <Button text="DISCOVER MORE" buttonColor="bg-[#f4c006]" textColor="text-white" />
                </div>
            </div>

            {/* Slider */}
            <div className="w-full md:w-[calc(70%-40px)] order-1 md:order-2">
                <Slider {...settings} className='!static'>
                    {images.map((img, index) => (
                        <div key={index}>
                            <img
                                src={img}
                                alt={`Slide ${index + 1}`}
                                className="w-full h-[50vh] md:h-[80vh] object-cover"
                            />
                        </div>
                    ))}
                </Slider>
                <div className="absolute bottom-0 left-0 w-[100px] md:w-[150px] bg-[#f4c006] h-[36px] md:h-[44px] flex items-center pl-[10px] text-white text-sm md:text-base">
                    {currentSlide} / {images.length}
                </div>
            </div>

            {/* Side Label */}
            <div className='hidden md:flex items-center justify-center h-[80vh] w-[40px] absolute right-0 top-0'>
                <div className="-rotate-90 whitespace-nowrap transform origin-center font-semibold text-[14px]">
                    #Cargoton logistic
                </div>
            </div>
        </div>
    );
};

export default BannerSection;