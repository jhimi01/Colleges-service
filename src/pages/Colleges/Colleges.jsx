import React from 'react';
import useColleges from '../../hooks/useColleges';
import CardCollege from '../../component/CardCollege/CardCollege';
import SubBanner from '../../component/SubBanner/SubBanner';

const Colleges = () => {
     
    const { colleges } = useColleges();
    
    return (

       <>
       <SubBanner headerTitle={'Colleges'}></SubBanner>
         <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 md:w-11/12 mx-auto gap-5'>
            {
                colleges.map(college => <CardCollege item={college} ></CardCollege>)
            }
        </div>
       </>
    );
};

export default Colleges;