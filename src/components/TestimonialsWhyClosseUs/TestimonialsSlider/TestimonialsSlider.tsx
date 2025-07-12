
// import React from 'react';
// import Slider from 'react-slick';
// import Testimonial from '../Testimonial/Testimonial';
// // import { FaLongArrowAltLeft, FaLongArrowAltRight } from "react-icons/fa";
// import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
// // import {  } from "react-icons/io";

// interface ArrowProps {
//     onClick?: () => void;
//   }

// const testimonials = [
//     {
//         id: 1,
//         name: "John Deo",
//         designation: "Managing Director",
//         text: "Integer congue elit non semper laoreet sed lectus orci posuer nisl tempor se felis ac mauris. Pellentesque inyd urna. Integer vitae felis vel magna posu du vestibulum. Nam rutrum congue diam. Aliquam malesuada maurs etug met Curabitur laoreet convallis nisal pellentesque bibendum."
//     },
//     {
//         id: 2,
//         name: "John Deo",
//         designation: "Marketing Director",
//         text: "Integer congue elit non semper laoreet sed lectus orci posuer nisl tempor se felis ac mauris. Pellentesque inyd urna. Integer vitae felis vel magna posu du vestibulum. Nam rutrum congue diam. Aliquam malesuada maurs etug met Curabitur laoreet convallis nisal pellentesque bibendum."
//     }
// ];

// const NextArrow: React.FC<ArrowProps> = ({ onClick }) => (
//     <button
//         onClick={onClick}
//         className="absolute bg-white w-[36px] h-[36px] flex justify-center items-center border text-black bottom-[4px] left-[46px] z-[9]"
//     >
//         <IoIosArrowForward className="text-[24px]" />
//     </button>
// );

// const PrevArrow: React.FC<ArrowProps> = ({ onClick }) => (
//     <button
//         onClick={onClick}
//         className="absolute bg-white w-[36px] h-[36px] flex justify-center items-center border text-black bottom-[4px] left-[10px] z-[9]"
//     >
//         <IoIosArrowBack className="text-[24px]" />
//     </button>
//   );

// const TestimonialsSlider: React.FC = () => {
//     const settings = {
//         dots: false,
//         infinite: true,
//         autoplay: true,
//         speed: 2000,
//         autoplaySpeed: 2500,
//         slidesToShow: 1,
//         slidesToScroll: 1,
//         nextArrow: <NextArrow />,
//         prevArrow: <PrevArrow />,
//     };

//     return (
//         <div className="mx-auto relative">
//             <Slider {...settings}>
//                 {testimonials.map((testimonial) => (
//                     <Testimonial
//                         key={testimonial.id}
//                         name={testimonial.name}
//                         designation={testimonial.designation}
//                         text={testimonial.text}
//                     />
//                 ))}
//             </Slider>
//         </div>
//     );
// };

// export default TestimonialsSlider;

// TestimonialsSlider.tsx
import React from 'react';
import Slider from 'react-slick';
import Testimonial from '../Testimonial/Testimonial';
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

interface ArrowProps {
    onClick?: () => void;
}

const testimonials = [
    {
        id: 1,
        name: "John Deo",
        designation: "Managing Director",
        text: "Integer congue elit non semper laoreet sed lectus orci posuer nisl tempor se felis ac mauris. Pellentesque inyd urna. Integer vitae felis vel magna posu du vestibulum. Nam rutrum congue diam. Aliquam malesuada maurs etug met Curabitur laoreet convallis nisal pellentesque bibendum."
    },
    {
        id: 2,
        name: "John Deo",
        designation: "Marketing Director",
        text: "Integer congue elit non semper laoreet sed lectus orci posuer nisl tempor se felis ac mauris. Pellentesque inyd urna. Integer vitae felis vel magna posu du vestibulum. Nam rutrum congue diam. Aliquam malesuada maurs etug met Curabitur laoreet convallis nisal pellentesque bibendum."
    }
];

const NextArrow: React.FC<ArrowProps> = ({ onClick }) => (
    <button
        onClick={onClick}
        className="absolute bg-white w-8 h-8 sm:w-[36px] sm:h-[36px] flex justify-center items-center border text-black bottom-0 sm:bottom-[4px] left-10 sm:left-[46px] z-[9]"
        aria-label="Next testimonial"
    >
        <IoIosArrowForward className="text-lg sm:text-[24px]" />
    </button>
);

const PrevArrow: React.FC<ArrowProps> = ({ onClick }) => (
    <button
        onClick={onClick}
        className="absolute bg-white w-8 h-8 sm:w-[36px] sm:h-[36px] flex justify-center items-center border text-black bottom-0 sm:bottom-[4px] left-2 sm:left-[10px] z-[9]"
        aria-label="Previous testimonial"
    >
        <IoIosArrowBack className="text-lg sm:text-[24px]" />
    </button>
);

const TestimonialsSlider: React.FC = () => {
    const settings = {
        dots: false,
        infinite: true,
        autoplay: true,
        speed: 1000,
        autoplaySpeed: 5000,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
    };

    return (
        <div className="mx-auto relative">
            <Slider {...settings}>
                {testimonials.map((testimonial) => (
                    <Testimonial
                        key={testimonial.id}
                        name={testimonial.name}
                        designation={testimonial.designation}
                        text={testimonial.text}
                    />
                ))}
            </Slider>
        </div>
    );
};

export default TestimonialsSlider;
