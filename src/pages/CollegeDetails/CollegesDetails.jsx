import React, { useEffect } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';

const CollegesDetails = () => {
    const singleCollege = useLoaderData();

    useEffect(()=>{
      window.scroll(0, 0)
    },[])

  if (!singleCollege) {
    return <div>Loading...</div>;
  }

  return (
    <div className='w-11/12 mx-auto'>
    <div className='lg:flex'>
    <div className='lg:w-1/2'>
    <img className='w-full h-[300px] lg:h-full object-cover'  src={singleCollege.college.image} alt="" />
    </div>
    <div className='lg:w-1/2 p-3'>
      <h2 className='text-center text-3xl my-4 font-bold'>{singleCollege.college.name}</h2>
      <div>
      <hr />
      <h2 className='text-2xl font-semibold'>Admission: </h2>
      <p>Fall: {singleCollege?.college?.admission_dates?.fall}</p>
      <p>Spring: {singleCollege?.college?.admission_dates?.spring}</p>
      <h4>Procces: <span>{singleCollege?.college?.admission_process}</span></h4>
      </div>
      <hr className='my-3'/>
      <div>
      <h2 className='text-2xl font-semibold'>Events: </h2>
      <h3 className='text-xl font-semibold'>Annual Science Fair</h3>
      <p>location: {singleCollege?.college?.events_details?.AnnualScienceFair?.location}</p>
      <p>time: {singleCollege?.college?.events_details?.AnnualScienceFair?.time}</p>
      <h3 className='text-xl font-semibold'>Cultural Fest</h3>
      <p>location: {singleCollege?.college?.events_details?.CulturalFest?.location}</p>
      <p>time: {singleCollege?.college?.events_details?.CulturalFest?.time}</p>
      <h3 className='text-xl font-semibold'>Orientation Day</h3>
      <p>location: {singleCollege?.college?.events_details?.OrientationDay?.location}</p>
      <p>time: {singleCollege?.college?.events_details?.OrientationDay?.time}</p>


      <p>Cultural Fest: {singleCollege?.college?.events_details?.CulturalFest?.time}</p>
      <p>Orientation Day: {singleCollege?.college?.events_details?.OrientationDay?.time}</p>
      </div>
    </div>
    </div>
      {/* research works */}
    <div className='md:flex mt-5'>
    <div>
    <h4 className='text-xl font-semibold'>Research: </h4>
    <p className='font-medium text-xl text-gray-600'>{singleCollege?.college?.research_history}</p>
    <div>
      {singleCollege?.college?.research_works.map(work => <div key={work.authors}>
        <h2 className='text-lg font-semibold'>Research work:</h2>
        <p className='font-medium text-gray-500'>{work?.title}</p>
        <h2 className='text-lg font-semibold'>authore: </h2>
        <p className='font-medium text-gray-500'>{work?.authors}</p>
        <p className='font-medium text-gray-500'>{work?.description}</p>
        <h2 className='text-lg font-semibold'>publication date:</h2>
        <p className='font-medium text-gray-500'>{work?.publication_date}</p>
      </div>)}
    </div>
    </div> 
    <div className="divider divider-horizontal mx-4"></div>
    <div className="divider divider-vertical mx-4"></div>
    <div>
      {/* research works */}
    <h4 className='text-xl font-semibold'>Sports: </h4>
    <p className='font-medium text-gray-600'>{singleCollege.college?.sports?.
description}</p>
    <div>
      {singleCollege.college?.sports?.sports_categories.map((sport,index) => <p key={index} className='font-medium text-gray-500'>
       {sport}
      </p>)}
    </div>
    </div>
    </div>
   
    </div>
  );
};

export default CollegesDetails;
