import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';

const CollegesDetails = () => {
    // const { id } = useParams();
    const singleCollege = useLoaderData();
    console.log(singleCollege?.college?.events_details)

  if (!singleCollege) {
    return <div>Loading...</div>;
  }

  return (
    <div className='lg:flex w-11/12 mx-auto'>
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
    <div>
      
    </div>

      {/* Display other college details */}
    </div>
  );
};

export default CollegesDetails;
