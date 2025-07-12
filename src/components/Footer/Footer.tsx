import React from 'react';
import { FaPhoneAlt, FaMapMarkerAlt, FaChevronUp, FaFacebookF, FaTwitter, FaVimeoV, FaBehance, FaGooglePlusG } from 'react-icons/fa';
import { FaRegHandPointRight } from "react-icons/fa";
import { IoIosArrowForward } from "react-icons/io";
import new1 from "../../assets/images/news/new1.jpg";
import new2 from "../../assets/images/news/new2.jpg";
import new3 from "../../assets/images/news/new3.jpg";
import new4 from "../../assets/images/news/new4.jpg";
import new5 from "../../assets/images/banner2.jpg";
import new6 from "../../assets/images/banner3.jpg";

const images = [new1, new2, new3, new4, new5, new6];

const Footer: React.FC = () => {
    return (
        <footer className="bg-[#5d6c83] text-white text-[14px] pt-10 pb-4 px-4 md:px-20 relative">
            <div className="flex flex-col md:flex-row justify-between items-center mb-10">
                <div>
                    <h2 className="text-2xl font-semibold">Weekly Newsletter</h2>
                    <p className="text-sm text-gray-300 mt-1">There are many variations of passages of lorem ipsum available.</p>
                </div>
                <div className="mt-4 md:mt-0 flex w-full md:w-auto">
                    <input
                        type="text"
                        placeholder="Enter Your Mail"
                        className="px-4 py-2 rounded-l-md outline-none w-full md:w-72 text-black"
                    />
                    <button className="bg-gradient-to-r bg-[#f39919] px-6 py-2 rounded-r-md text-white font-medium">SUBSCRIBE</button>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-10 text-white">
                <div >
                    <h4 className="text-lg font-semibold mb-6 border-dashed border-b border-[#f39919] w-fit pb-1">About Us</h4>
                    <p className="mb-3 text-gray-400">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    <p className="flex text-gray-400 items-center gap-2"><FaPhoneAlt /> (+94) 11 434 7575</p>
                    <p className="flex text-gray-400 items-center gap-2 mt-2"><FaMapMarkerAlt /> 42 Lily Ave, Colombo 00600</p>
                </div>

                <div>
                    <h4 className="text-lg font-semibold mb-6 border-dashed border-b border-[#f39919] w-fit pb-1">Latest News</h4>
                    
                    <ul>
                        <li className="mb-2 text-gray-400"><IoIosArrowForward className='inline mr-2 text-[#f39919]' /> 
                        Sed ut perspiciatis unde omnis iste
                        <br />
                        <span className="block text-xs text-gray-400 pl-[22px]">5 Minutes Ago</span></li>
                        <li className='text-gray-400'><IoIosArrowForward className='inline mr-2  text-[#f39919]' />Sed ut perspiciatis unde omnis iste<br /><span className="text-xs pl-[22px]">5 Minutes Ago</span></li>
                    </ul>
                </div>

                <div>
                    <h4 className="text-lg font-semibold mb-6 border-dashed border-b  border-[#f39919] w-fit pb-1">Customer Service</h4>
                    <ul className="space-y-2 text-gray-400">
                        <li className='cursor-pointer'><FaRegHandPointRight className='inline mr-2' /> Support Forums</li>
                        <li className='cursor-pointer'><FaRegHandPointRight className='inline mr-2' />  Communication</li>
                        <li className='cursor-pointer'><FaRegHandPointRight className='inline mr-2' /> FAQs</li>
                        <li className='cursor-pointer'><FaRegHandPointRight className='inline mr-2' /> Privacy Policy</li>
                        <li className='cursor-pointer'><FaRegHandPointRight className='inline mr-2' /> Rules & Condition</li>
                        <li className='cursor-pointer'><FaRegHandPointRight className='inline mr-2' />  Contact Us</li>
                    </ul>
                </div>

                <div>
                    <h4 className="text-lg font-semibold mb-6 border-dashed border-b border-[#f39919] w-fit pb-1">Customer Service</h4>
                    <div className="grid grid-cols-3 gap-2">
                        {images.map((img, index) => (
                            <div key={index} className="w-full h-16 bg-white/10 rounded-md overflow-hidden" >
                                <div className='bg-center bg-no-repeat bg-cover transition-transform duration-300 hover:scale-125 h-full' style={{ backgroundImage: `url(${img})` }}></div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <div className="flex flex-col md:flex-row justify-between items-center pt-4 text-gray-300 text-xs">
                {/* <p>Copyright © 2021 All Rights Reserved. Site By Xiteb<sup>®</sup></p> */}
                <p>
                    Copyright © 2021 All Rights Reserved. Site By Xiteb<sup>® </sup>
                    developed by <a href="https://www.linkedin.com/in/kazun/" className='text-[#f39919]' target="_blank" rel="noopener noreferrer">Kasun Madhuranga</a>
                </p>
                <div className="flex space-x-2 mt-2 md:mt-0">
                    <FaFacebookF className='cursor-pointer bg-[#6b788d] text-white w-5 h-5 rounded-full p-1 text-[11px]'/>
                    <FaTwitter className='cursor-pointer bg-[#6b788d] text-white w-5 h-5 rounded-full p-1 text-[11px]'/>
                    <FaVimeoV className='cursor-pointer bg-[#6b788d] text-white w-5 h-5 rounded-full p-1 text-[11px]'/>
                    <FaBehance className='cursor-pointer bg-[#6b788d] text-white w-5 h-5 rounded-full p-1 text-[11px]'/>
                    <FaGooglePlusG className='cursor-pointer bg-[#6b788d] text-white w-5 h-5 rounded-full p-1 text-[11px]'/>
                </div>
            </div>

            <button
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                className="bg-[#f39919] text-white w-8 h-8 flex items-center justify-center rounded absolute right-4 bottom-4"
            >
                <FaChevronUp />
            </button>
        </footer>
    );
};

export default Footer;
