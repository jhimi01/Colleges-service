import React from 'react';

const SubBanner = ({headerTitle}) => {
    return (
        <div className='h-[200px] bg-slate-800 flex items-center justify-center'>
            <h1 className='text-center text-slate-300 text-4xl font-bold uppercase'>{headerTitle}</h1>
        </div>
    );
};

export default SubBanner;