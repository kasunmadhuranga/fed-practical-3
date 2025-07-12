// import React from 'react';
// import StatsField from './StatsField/StatsField';

// const StatsSection: React.FC = () => {
//     const stats = [
//         { number: '890', label: 'Delivered packages' },
//         { number: '137', label: 'Country covered' },
//         { number: '740', label: 'Tons of Goods' },
//         { number: '600', label: 'Satisfied Clients' },
//       ];

//     return (
//         <div className='max-w-[1220px] px-[10px] mx-auto grid grid-cols-4'>
//             {stats.map((item, index) => (
//                 <div key={index} className="flex items-center justify-center">
//                     <StatsField largeNumber={item.number} label={item.label} />
//                 </div>
//             ))}
//         </div>
//     );
// };

// export default StatsSection;


// StatsSection.tsx
import React from 'react';
import StatsField from './StatsField/StatsField';

const StatsSection: React.FC = () => {
    const stats = [
        { number: '890', label: 'Delivered packages' },
        { number: '137', label: 'Country covered' },
        { number: '740', label: 'Tons of Goods' },
        { number: '600', label: 'Satisfied Clients' },
    ];

    return (
        <div className='max-w-[1220px] px-[10px] mx-auto grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-0'>
            {stats.map((item, index) => (
                <div key={index} className="flex items-center justify-center p-2 md:p-0">
                    <StatsField largeNumber={item.number} label={item.label} />
                </div>
            ))}
        </div>
    );
};

export default StatsSection;