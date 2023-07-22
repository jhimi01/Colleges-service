import React from 'react';

const CardCollege = ({item}) => {
   const {college} = item;
   console.log(college)
    return (
        <div className='card'>
            <img className='object-cover' src={college?.image} alt="" />
            <div className="card-body p-2 bg-base-200">
            <h3 className='text-xl font-bold'>{college?.name}</h3>
            <p className='text-xl font-semibold'>Admission:</p>
            <div className='flex font-semibold'>
                <p>{college?.admission_dates?.fall}</p>
                <div className="custom-divider"></div>
                <p>{college?.admission_dates?.spring}</p>
            </div>
            <p className='text-xl font-semibold'>Events:</p>
            <div>
                {college?.events.map(event => <li key={event?.event_name}>{event?.event_name}</li>)}
            </div>
            <div className="card-actions justify-end">
     <button className="btn btn-secondary w-full rounded-none">Details</button>
    </div>
            </div>
        </div>

    );
};

export default CardCollege;