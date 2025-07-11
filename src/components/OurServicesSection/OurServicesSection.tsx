import React from 'react';
import Slider from 'react-slick';
import service1 from "../../assets/images/our-service/service1.jpg";
import service2 from "../../assets/images/our-service/service2.jpg";
import OurServicesCard from './OurServicesCard/OurServicesCard';
import { FaArrowCircleRight } from "react-icons/fa";

const services = [
    {
        name: "Air Freight Serices",
        description: "At out Auto Service garage, we are fully appreciate how difficult occur it is for people to find",
        image: service1,
        readmore: "service/service1",
    },
    {
        name: "Drone Serices",
        description: "These are unique and often the differ from one industy to the other. Our logistics expertise",
        image: service2,
        readmore: "service/service1",
    },
    {
        name: "Air Freight Serices",
        description: "At out Auto Service garage, we are fully appreciate how difficult occur it is for people to find",
        image: service1,
        readmore: "service/service1",
    },
    {
        name: "Drone Serices",
        description: "These are unique and often the differ from one industy to the other. Our logistics expertise",
        image: service2,
        readmore: "service/service1",
    }
];


const OurServicesSection: React.FC = () => {

    const settings = {
        dots: true,
        arrows: false,
        autoplay: true,
        infinite: true,
        speed: 2000,
        autoplaySpeed: 2500,
        slidesToShow: 2,
        slidesToScroll: 1,
    };

    return (
        <div className='max-w-[1252px] px-[10px] mx-auto flex relative py-4'>

            <div className="w-full pt-3">
                <div className=' text-center'>
                    <p className='font-bold text-[14px] text-[#8cba43]'>Real Solution, Real Fast !</p>
                    <h3 className='font-bold text-[24px] pb-[20px]'>Best Global Logistics Solutions.</h3>
                </div>
                <Slider {...settings} className='!static pb-5'>
                    {services.map((service, index) => (
                        <OurServicesCard
                            key={index} image={service.image} title={service.name} description={service.description} readmore={service.readmore}
                        />
                    ))}
                </Slider>
                <div className='flex items-center pl-3 '>
                    <p className='text-[#606060]'>Logistic & Transport Solutions Saves Your Time. </p>
                    <span className='px-1 font-semibold'>Finds Your Solution</span>
                    <FaArrowCircleRight />
                </div>
            </div>
        </div>
    );
};

export default OurServicesSection;
