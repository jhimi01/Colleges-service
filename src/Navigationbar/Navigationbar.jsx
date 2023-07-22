import React from 'react';
import { AiFillPhone, AiOutlineClockCircle, AiOutlineSearch } from 'react-icons/ai';
import { ImLocation } from 'react-icons/im';

const Navigationbar = () => {
    const Navigation = ()=>{
          return(
            <>
                 <li><a>Home</a></li>
                 <li><a>Colleges</a></li>
      <li tabIndex={0}>
        <details>
          <summary>Service</summary>
          <ul className="p-2">
            <li><a>Service 1</a></li>
            <li><a>Service 2</a></li>
          </ul>
        </details>
      </li>
      <li><a>My College</a></li>
      <li><a>Admission</a></li>
            </>
          )
    }
    return (
       <div className='bg-slate-800'>
       <div className='navbar   w-11/12 mx-auto text-slate-300'>
        <div className="navbar-start uppercase">
           <p>english</p>
           <div className="divider divider-horizontal"></div>
           <p>bangla</p>
        </div>
{/* npm install react-icons --save */}
        <div className="navbar-center">
          <h3 className='flex items-center'> <ImLocation /> 2925 SWICK HILL STREET, DHAKA, NC23256</h3>
          <h3 className='flex items-center'>
          <AiFillPhone />
           +880123456789</h3>
          <h3 className='flex items-center'> <AiOutlineClockCircle /> MON-FRI 7:00AM-4:68PM</h3>
        </div>
        <div className="navbar-end">
          <button>LOGIN</button> 
          <div className="divider divider-horizontal"></div>
          <button> CONTACT</button>
          <div className="divider divider-horizontal"></div>
          <p><AiOutlineSearch /></p>
        </div>
       </div>
       {/* ------------------------------- */}
         <div className="navbar bg-base-100  w-11/12 mx-auto">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
       <Navigation />
      </ul>
    </div>
    <a className="btn btn-ghost normal-case text-xl">College Service</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
     <Navigation />
    </ul>
  </div>
  <div className="navbar-end">
    <button className="btn">Get Started</button>
  </div>
</div>
       </div>
    );
};

export default Navigationbar;