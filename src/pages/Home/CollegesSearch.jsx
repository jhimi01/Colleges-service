import React, { useState } from 'react';
import { FcSearch } from 'react-icons/fc';

const CollegesSearch = () => {

    const [search, setSearch] = useState("");


    const handleSearch = (e) => {
        setSearch(e.target.value);
      };

    return (
        <div className='bg-slate-200 w-5/6 mx-auto pt-1 pb-4 lg:-mt-3 relative z-20'>
             <div className="relative z-20 w-full lg:w-1/2 mx-auto mt-4">
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
    );
};

export default CollegesSearch;