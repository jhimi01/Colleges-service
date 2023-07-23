import React, { useState } from 'react';
import useColleges from '../../hooks/useColleges';
import CardCollege from '../../component/CardCollege/CardCollege';
import SubBanner from '../../component/SubBanner/SubBanner';
import { FcSearch } from 'react-icons/fc';
import { Helmet } from 'react-helmet';

const Colleges = () => {
    const [search, setSearch] = useState("");
    const { colleges, isLoading } = useColleges();
    if (isLoading) {
        return <span>Loading...</span>
      }
      
    const handleSearch = (e) => {
        setSearch(e.target.value);
      };

      const filtercollege = colleges.filter((college)=> college?.college?.name.toLowerCase().includes(search.toLocaleLowerCase()))
    
    return (

       <>
        <Helmet>
            <title>all colleges | College</title>
        </Helmet>
       <SubBanner headerTitle={'Colleges'}></SubBanner>
   
             <div className="relative w-full lg:w-1/2 mx-auto my-5">
        <input
          onChange={handleSearch}
          type="text"
          placeholder="search by name of College"
          className="input input-bordered w-full"
        />
        <button className="absolute right-3 top-3">
          <FcSearch className="text-3xl" />
        </button>
      </div>
        
        {filtercollege.length > 0 ?  <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 md:w-11/12 mx-auto gap-5'>
            {
                filtercollege.map(college => <CardCollege item={college} ></CardCollege>)
            }
        </div> : <p className='text-2xl text-gray-600 text-center my-5 uppercase'>"no data found"</p>}

       
       </>
    );
};

export default Colleges;