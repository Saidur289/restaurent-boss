import React from 'react';

const SectionTitle = ({heading, subHeading}) => {
    return (
        <div className='text-center mx-auto md:w-4/12 my-8'>
            <p className='text-yellow-600 mb-2'>---- {subHeading} ----</p>
            <h1 className='py-4 border-y-4 uppercase text-3xl'>{heading}</h1>
            
        </div>
    );
};

export default SectionTitle;