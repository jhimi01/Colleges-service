import React from 'react';

const CardCollege = ({item}) => {
   const {college} = item;
   console.log(college)
    return (
        <div className='card'>
            <img className='object-cover' src={college?.image} alt="" />
            <div className="card-body p-2 bg-base-200">
            <h3 className='text-xl font-semibold'>{college?.name}</h3>
            <div className='flex'>
                <p>{college?.admission_dates?.fall}</p>
                <p>{college?.admission_dates?.spring}</p>
            </div>
            <div>
                {college?.events.map(event => <p key={event?.event_name}>{event?.event_name}</p>)}
            </div>
            </div>
        </div>
//         <div className="card-side bg-base-100 shadow-xl">
//   <figure><img className='h-full w-full ' src={college?.image} alt="college"/></figure>
//   <div className="card-body">
//     <h2 className="card-title">{college?.name}</h2>
//     <div className='flex'>
//         <p>{college?.admission_dates?.fall}</p>
//         <p>{college?.admission_dates?.spring}</p>
//     </div>
//     <div>
//                  {college?.events.map(event => <p key={event?.event_name}>{event?.event_name}</p>)}
//              </div>
//     <div className="card-actions justify-end">
//       <button className="btn btn-primary">Details</button>
//     </div>
//   </div>
// </div>
    );
};

export default CardCollege;