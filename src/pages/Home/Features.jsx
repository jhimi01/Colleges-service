import React from 'react';
import { AiFillPhone, AiFillProfile, AiOutlineClockCircle, AiOutlineFileProtect, AiOutlineSearch } from 'react-icons/ai';
import { BiSolidSchool } from 'react-icons/bi';
import { FaAward } from 'react-icons/fa';
import { MdOutlineFestival } from 'react-icons/md';

const Features = () => {
    return (
        <div className='lg:h-[500px] bg-base-200 my-20'>
            <div className='lg:flex'>
           <div className="lg:w-1/2 h-[500px]">
            <img className='w-full h-full object-cover' src="https://i.ibb.co/RvV2gMv/priscilla-du-preez-Xk-KCui44i-M0-unsplash.jpg" alt="" />
           </div>


           <div className="lg:w-1/2 ">
           <div className=' mx-auto p-2 lg:p-0'>
<h1 className='text-3xl font-semibold ml-10 mt-10'>Our Best Feature</h1>
<p className='ml-10 my-6'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloribus asperiores quas eaque? Omnis repudiandae nihil magnam accusantium dolor rem adipisci?</p>
        <div className="uppercase text-2xl ml-10">
           <p className='flex gap-3 items-center'><BiSolidSchool className='text-4xl'/> Best Campuse</p>
           <div className="custom-divider"></div>
           <p className='flex gap-3 items-center'><AiFillProfile className='text-4xl' />Detaild Process</p>
           <div className="custom-divider"></div>
           <p className='flex gap-3 items-center'><AiOutlineFileProtect className='text-4xl' />Efficient & Flexible</p>
           <div className="custom-divider"></div>
           <p className='flex gap-3 items-center'><FaAward className='text-4xl' />Awards Festival</p>
           <div className="custom-divider"></div>
           <p className='flex gap-3 items-center'><MdOutlineFestival className='text-4xl' />Events</p>
        </div>
     
       </div>
           </div>
            </div>
        </div>
    );
};

export default Features;