import React, { useState } from 'react';
import { FcSearch } from 'react-icons/fc';
import useColleges from '../../hooks/useColleges';
import CardCollege from '../../component/CardCollege/CardCollege';

const CollegesSearch = () => {

    const [search, setSearch] = useState("");

    const {colleges, isLoading} = useColleges();
    console.log(colleges)

    if (isLoading) {
        return <span>Loading...</span>
      }

    const handleSearch = (e) => {
        setSearch(e.target.value);
      };

      const filtercollege = colleges.filter((college)=> college?.college?.name.toLowerCase().includes(search.toLocaleLowerCase()))

    return (

     <div className='lg:w-11/12 mx-auto'>
           <div className='bg-slate-800 w-5/6 mx-auto pt-1 pb-4 lg:-mt-3 relative z-20'>
             <div className="relative w-full lg:w-1/2 mx-auto mt-4">
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
        </div>
        <div className='flex items-center justify-center gap-2  mt-7'> 
        {
            filtercollege.slice(0, 3).map(item => <CardCollege item={item} key={item._id}></CardCollege>)
        } </div>
     </div>
    );
};

export default CollegesSearch;