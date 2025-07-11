import React from 'react';

interface StatsFieldProps {
    largeNumber: string;
    label: string;
}

const StatsField: React.FC<StatsFieldProps> = ({ largeNumber, label }) => {
    return (
        <div className="relative">
            <span className="text-[175px] text-white text-shadow">{largeNumber}</span>
            <div className="text-[#0b2153] flex absolute top-1/2 -translate-y-1/2">
                <div className="my-auto text-[60px] pr-[12px] font-bold">{largeNumber}</div>
                <div className="font-semibold text-[27px] max-w-[170px]">{label}</div>
            </div>
        </div>
    );
};

export default StatsField;
