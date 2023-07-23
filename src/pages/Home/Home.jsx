import React from 'react';
import CollegesSearch from './CollegesSearch';
import Features from './Features';
import Gallery from './Gallery';
import ResearchPaper from './ResearchPaper';
import ReviewSection from './ReviewSection';
import { Helmet } from 'react-helmet';

const Home = () => {
    return (
       <>
         <div className='lg:flex gap-2 lg:w-11/12 mx-auto lg:h-[75vh]'>
         <Helmet>
            <title>College</title>
        </Helmet>
         <div className='lg:w-1/2 w-full h-full'>
            <img className='w-full h-[100%] object-cover' src="https://i.ibb.co/HDSBJtj/pexels-pixabay-256490.jpg" alt="" />
         </div>
         <div className='lg:w-1/2 w-full h-full'>
            <div className='bg-slate-800 text-slate-300 text-center py-3 lg:py-9 px-20 mb-2'>
                <h2 className='text-2xl lg:text-4xl '>International Accademise</h2>
                <p className='lg:my-4 my-2'>The study programs of the enroll campus Lorem ipsum dolor sit amet consectetur adipisicing.</p>
                <button className='bg-amber-600 py-2 px-4'>Learn More</button>
            </div>
            <div className='text-center bg-base-200 py-3 lg:py-9 px-20 mb-2'>
                <h2 className='text-2xl lg:text-4xl '>UA Degree programs </h2>
                <p className='lg:my-4 my-2'>The study programs of the enroll campus Lorem ipsum dolor sit amet consectetur adipisicing.</p>
                <button className='bg-amber-600 py-2 px-4 text-white'>Learn More</button>
            </div>
         </div>
        </div>

        <CollegesSearch></CollegesSearch>

        <Features></Features>

        <Gallery></Gallery>

        <ResearchPaper></ResearchPaper>

        <ReviewSection></ReviewSection>
       </>
    );
};

export default Home;