// import React from 'react';

// interface StatsFieldProps {
//     largeNumber: string;
//     label: string;
// }

// const StatsField: React.FC<StatsFieldProps> = ({ largeNumber, label }) => {
//     return (
//         <div className="relative">
//             <span className="text-[175px] text-white text-shadow">{largeNumber}</span>
//             <div className="text-[#0b2153] flex absolute top-1/2 -translate-y-1/2">
//                 <div className="my-auto text-[60px] pr-[12px] font-bold">{largeNumber}</div>
//                 <div className="font-semibold text-[27px] max-w-[170px]">{label}</div>
//             </div>
//         </div>
//     );
// };

// export default StatsField;


// StatsField.tsx
import React from 'react';

interface StatsFieldProps {
    largeNumber: string;
    label: string;
}

const StatsField: React.FC<StatsFieldProps> = ({ largeNumber, label }) => {
    return (
        <div className="relative w-full h-[100px] md:h-[200px] lg:h-[250px]">
            {/* Background number - hidden on mobile to save space */}
            <span className="hidden md:block text-[100px] lg:text-[175px] text-white text-shadow opacity-70">
                {largeNumber}
            </span>

            {/* Foreground content */}
            <div className="text-[#0b2153] flex flex-col md:flex-row items-center justify-center md:absolute md:top-1/2 md:-translate-y-1/2 w-full">
                <div className="text-[32px] md:text-[40px] lg:text-[60px] font-bold md:pr-[12px]">
                    {largeNumber}
                </div>
                <div className="font-semibold text-[14px] md:text-[18px] lg:text-[27px] text-center md:text-left max-w-[120px] md:max-w-[170px]">
                    {label}
                </div>
            </div>
        </div>
    );
};

export default StatsField;