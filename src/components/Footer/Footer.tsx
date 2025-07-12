// import React from 'react';
// import { FaPhoneAlt, FaMapMarkerAlt, FaChevronUp, FaFacebookF, FaTwitter, FaVimeoV, FaBehance, FaGooglePlusG } from 'react-icons/fa';
// import { FaRegHandPointRight } from "react-icons/fa";
// import { IoIosArrowForward } from "react-icons/io";
// import new1 from "../../assets/images/news/new1.jpg";
// import new2 from "../../assets/images/news/new2.jpg";
// import new3 from "../../assets/images/news/new3.jpg";
// import new4 from "../../assets/images/news/new4.jpg";
// import new5 from "../../assets/images/banner2.jpg";
// import new6 from "../../assets/images/banner3.jpg";

// const images = [new1, new2, new3, new4, new5, new6];

// const Footer: React.FC = () => {
//     return (
//         <footer className="bg-[#5d6c83] text-white text-[14px] pt-10 pb-4 px-4 md:px-20 relative">
//             <div className="flex flex-col md:flex-row justify-between items-center mb-10">
//                 <div>
//                     <h2 className="text-2xl font-semibold">Weekly Newsletter</h2>
//                     <p className="text-sm text-gray-300 mt-1">There are many variations of passages of lorem ipsum available.</p>
//                 </div>
//                 <div className="mt-4 md:mt-0 flex w-full md:w-auto">
//                     <input
//                         type="text"
//                         placeholder="Enter Your Mail"
//                         className="px-4 py-2 rounded-l-md outline-none w-full md:w-72 text-black"
//                     />
//                     <button className="bg-gradient-to-r bg-[#f39919] px-6 py-2 rounded-r-md text-white font-medium">SUBSCRIBE</button>
//                 </div>
//             </div>

//             <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-10 text-white">
//                 <div >
//                     <h4 className="text-lg font-semibold mb-6 border-dashed border-b border-[#f39919] w-fit pb-1">About Us</h4>
//                     <p className="mb-3 text-gray-400">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
//                     <p className="flex text-gray-400 items-center gap-2"><FaPhoneAlt /> (+94) 76 798 6456</p>
//                     <p className="flex text-gray-400 items-center gap-2 mt-2"><FaMapMarkerAlt />Colombo 00600</p>
//                 </div>

//                 <div>
//                     <h4 className="text-lg font-semibold mb-6 border-dashed border-b border-[#f39919] w-fit pb-1">Latest News</h4>
                    
//                     <ul>
//                         <li className="mb-2 text-gray-400"><IoIosArrowForward className='inline mr-2 text-[#f39919]' /> 
//                         Sed ut perspiciatis unde omnis iste
//                         <br />
//                         <span className="block text-xs text-gray-400 pl-[22px]">5 Minutes Ago</span></li>
//                         <li className='text-gray-400'><IoIosArrowForward className='inline mr-2  text-[#f39919]' />Sed ut perspiciatis unde omnis iste<br /><span className="text-xs pl-[22px]">5 Minutes Ago</span></li>
//                     </ul>
//                 </div>

//                 <div>
//                     <h4 className="text-lg font-semibold mb-6 border-dashed border-b  border-[#f39919] w-fit pb-1">Customer Service</h4>
//                     <ul className="space-y-2 text-gray-400">
//                         <li className='cursor-pointer'><FaRegHandPointRight className='inline mr-2' /> Support Forums</li>
//                         <li className='cursor-pointer'><FaRegHandPointRight className='inline mr-2' />  Communication</li>
//                         <li className='cursor-pointer'><FaRegHandPointRight className='inline mr-2' /> FAQs</li>
//                         <li className='cursor-pointer'><FaRegHandPointRight className='inline mr-2' /> Privacy Policy</li>
//                         <li className='cursor-pointer'><FaRegHandPointRight className='inline mr-2' /> Rules & Condition</li>
//                         <li className='cursor-pointer'><FaRegHandPointRight className='inline mr-2' />  Contact Us</li>
//                     </ul>
//                 </div>

//                 <div>
//                     <h4 className="text-lg font-semibold mb-6 border-dashed border-b border-[#f39919] w-fit pb-1">Customer Service</h4>
//                     <div className="grid grid-cols-3 gap-2">
//                         {images.map((img, index) => (
//                             <div key={index} className="w-full h-16 bg-white/10 rounded-md overflow-hidden" >
//                                 <div className='bg-center bg-no-repeat bg-cover transition-transform duration-300 hover:scale-125 h-full' style={{ backgroundImage: `url(${img})` }}></div>
//                             </div>
//                         ))}
//                     </div>
//                 </div>
//             </div>

//             <div className="flex flex-col md:flex-row justify-between items-center pt-4 text-gray-300 text-xs">
//                 {/* <p>Copyright © 2021 All Rights Reserved. Site By Xiteb<sup>®</sup></p> */}
//                 <p>
//                     Copyright © 2021 All Rights Reserved. Site By Xiteb<sup>® </sup>
//                     developed by <a href="https://www.linkedin.com/in/kazun/" className='text-[#f39919]' target="_blank" rel="noopener noreferrer">Kasun Madhuranga</a>
//                 </p>
//                 <div className="flex space-x-2 mt-2 md:mt-0">
//                     <FaFacebookF className='cursor-pointer bg-[#6b788d] text-white w-5 h-5 rounded-full p-1 text-[11px]'/>
//                     <FaTwitter className='cursor-pointer bg-[#6b788d] text-white w-5 h-5 rounded-full p-1 text-[11px]'/>
//                     <FaVimeoV className='cursor-pointer bg-[#6b788d] text-white w-5 h-5 rounded-full p-1 text-[11px]'/>
//                     <FaBehance className='cursor-pointer bg-[#6b788d] text-white w-5 h-5 rounded-full p-1 text-[11px]'/>
//                     <FaGooglePlusG className='cursor-pointer bg-[#6b788d] text-white w-5 h-5 rounded-full p-1 text-[11px]'/>
//                 </div>
//             </div>

//             <button
//                 onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
//                 className="bg-[#f39919] text-white w-8 h-8 flex items-center justify-center rounded absolute right-4 bottom-4"
//             >
//                 <FaChevronUp />
//             </button>
//         </footer>
//     );
// };

// export default Footer;


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
            {/* Newsletter Section */}
            <div className="flex flex-col md:flex-row justify-between items-center mb-6 md:mb-10">
                <div className="text-center md:text-left mb-4 md:mb-0">
                    <h2 className="text-xl md:text-2xl font-semibold">Weekly Newsletter</h2>
                    <p className="text-xs md:text-sm text-gray-300 mt-1">There are many variations of passages of lorem ipsum available.</p>
                </div>
                <div className="w-full md:w-auto flex">
                    <input
                        type="text"
                        placeholder="Enter Your Mail"
                        className="px-3 md:px-4 py-2 rounded-l-md outline-none w-full md:w-60 lg:w-72 text-black text-xs md:text-sm"
                    />
                    <button className="bg-[#f39919] px-4 md:px-6 py-2 rounded-r-md text-white font-medium text-xs md:text-sm">
                        SUBSCRIBE
                    </button>
                </div>
            </div>

            {/* Main Footer Content */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 mb-8 md:mb-10">
                {/* About Us */}
                <div className="text-center md:text-left">
                    <h4 className="text-base md:text-lg font-semibold mb-4 md:mb-6 border-dashed border-b border-[#f39919] w-fit mx-auto md:mx-0 pb-1">
                        About Us
                    </h4>
                    <p className="mb-3 text-gray-400 text-xs md:text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    <div className="space-y-1 md:space-y-2">
                        <p className="flex items-center justify-center md:justify-start gap-2 text-gray-400 text-xs md:text-sm">
                            <FaPhoneAlt /> (+94) 76 798 6456
                        </p>
                        <p className="flex items-center justify-center md:justify-start gap-2 text-gray-400 text-xs md:text-sm">
                            <FaMapMarkerAlt /> Colombo 00600
                        </p>
                    </div>
                </div>

                {/* Latest News */}
                <div className="text-center md:text-left">
                    <h4 className="text-base md:text-lg font-semibold mb-4 md:mb-6 border-dashed border-b border-[#f39919] w-fit mx-auto md:mx-0 pb-1">
                        Latest News
                    </h4>
                    <div className='flex justify-center md:block'>
                        <ul className="space-y-3">
                            {[1, 2].map((item) => (
                                <li key={item} className="text-gray-400 text-xs md:text-sm text-left">
                                    <div className="flex">
                                        <IoIosArrowForward className='mt-0.5 mr-1 md:mr-2 text-[#f39919] flex-shrink-0' />
                                        <div>
                                            <p>Sed ut perspiciatis unde omnis iste</p>
                                            <span className="text-xs text-gray-400">5 Minutes Ago</span>
                                        </div>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>
                    
                </div>

                {/* Customer Service */}
                <div className="text-center md:text-left">
                    <h4 className="text-base md:text-lg font-semibold mb-4 md:mb-6 border-dashed border-b border-[#f39919] w-fit mx-auto md:mx-0 pb-1">
                        Customer Service
                    </h4>
                    <ul className="space-y-1 md:space-y-2 text-gray-400 text-xs md:text-sm">
                        {[
                            "Support Forums",
                            "Communication",
                            "FAQs",
                            "Privacy Policy",
                            "Rules & Condition",
                            "Contact Us"
                        ].map((item) => (
                            <li key={item} className="cursor-pointer hover:text-white">
                                <FaRegHandPointRight className='inline mr-1 md:mr-2' />
                                {item}
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Gallery */}
                <div>
                    <h4 className="text-base md:text-lg font-semibold mb-4 md:mb-6 border-dashed border-b border-[#f39919] w-fit mx-auto md:mx-0 pb-1">
                        Our Gallery
                    </h4>
                    <div className="grid grid-cols-3 gap-1 md:gap-2">
                        {images.map((img, index) => (
                            <div key={index} className="w-full h-16 bg-white/10 rounded-md overflow-hidden">
                                <div
                                    className='bg-center bg-no-repeat bg-cover h-full hover:scale-125 transition-transform duration-300'
                                    style={{ backgroundImage: `url(${img})` }}
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Copyright Section */}
            <div className="flex flex-col md:flex-row justify-between items-center pt-4 text-gray-300 text-xs">
                <p className="mb-2 md:mb-0 text-center md:text-left">
                    Copyright © 2021 All Rights Reserved. Site By Xiteb<sup>® </sup>
                    developed by <a href="https://www.linkedin.com/in/kazun/" className='text-[#f39919]' target="_blank" rel="noopener noreferrer">Kasun Madhuranga</a>
                </p>
                <div className="flex space-x-2">
                    {[FaFacebookF, FaTwitter, FaVimeoV, FaBehance, FaGooglePlusG].map((Icon, index) => (
                        <Icon
                            key={index}
                            className='cursor-pointer bg-[#6b788d] text-white w-4 h-4 md:w-5 md:h-5 rounded-full p-0.5 md:p-1 text-[8px] md:text-[11px]'
                        />
                    ))}
                </div>
            </div>

            {/* Back to Top Button */}
            <button
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                className="bg-[#f39919] text-white w-7 h-7 md:w-8 md:h-8 flex items-center justify-center rounded absolute right-4 bottom-4"
            >
                <FaChevronUp className="text-xs md:text-sm" />
            </button>
        </footer>
    );
};

export default Footer;