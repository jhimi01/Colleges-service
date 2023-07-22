import React from 'react';

const Home = () => {
    return (
        <div className='md:flex gap-2 md:w-11/12 mx-auto md:h-[75vh]'>
         <div className='md:w-1/2 w-full h-full'>
            <img className='w-full h-[100%] object-cover' src="https://i.ibb.co/HDSBJtj/pexels-pixabay-256490.jpg" alt="" />
         </div>
         <div className='md:w-1/2 w-full h-full'>
            <div className='bg-slate-800 text-slate-300 text-center py-3 md:py-9 px-20 mb-2'>
                <h2 className='text-2xl md:text-4xl '>International Programs</h2>
                <p className='md:my-4 my-2'>The study programs of the enroll campus Lorem ipsum dolor sit amet consectetur adipisicing.</p>
                <button className='bg-amber-600 py-2 px-4'>Learn More</button>
            </div>
            <div className='text-center py-3 md:py-9 px-20 mb-2'>
                <h2 className='text-2xl md:text-4xl '>UA Degree programs </h2>
                <p className='md:my-4 my-2'>The study programs of the enroll campus Lorem ipsum dolor sit amet consectetur adipisicing.</p>
                <button className='bg-amber-600 py-2 px-4 text-white'>Learn More</button>
            </div>
         </div>
        </div>
    );
};

export default Home;