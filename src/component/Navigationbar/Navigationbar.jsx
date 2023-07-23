import { AiFillPhone, AiOutlineClockCircle, AiOutlineSearch } from 'react-icons/ai';
import { ImLocation } from 'react-icons/im';
import './Naviagarionbar.css'
import { Link, NavLink, useLoaderData, useLocation } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../../Provider/AuthProvider';

const Navigationbar = () => {
  const location = useLocation()
  const { user, logout } = useContext(AuthContext)
  console.log(user)
    const Navigation = ()=>{
          return(
            <>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? "text-[#32589c] bg-base-200" : ""
              }
            >
              <li>
                <a>Home</a>
              </li>
            </NavLink>
              <li tabIndex={0}>
                <details>
                  <summary>Service</summary>
                  <ul className="p-2 flex flex-col">
                    <li>
                      <a>Service</a>
                    </li>
                    <li>
                      <a>Service details</a>
                    </li>
                    <li>
                      <a>FAQ's</a>
                    </li>
                  </ul>
                </details>
              </li>
            {/* </NavLink> */}
            <NavLink
              to="/colleges"
              className={({ isActive }) =>
                isActive ? "text-[#32589c] bg-base-200" : ""
              }
            >
              <li>
                <a>Colleges</a>
              </li>
            </NavLink>
            <NavLink
              to="/admission"
              className={({ isActive }) =>
                isActive ? "text-[#32589c] bg-base-200" : ""
              }
            >
              <li>
                <a>Admission</a>
              </li>
            </NavLink>
            <NavLink
              to="/mycollege"
              className={({ isActive }) =>
                isActive ? "text-[#32589c] bg-base-200" : ""
              }
            >
              <li>
                <a>My College</a>
              </li>
            </NavLink>
          </>
          )
    }


    const handleLogout =()=>{
      logout()
      .then(()=>{})
      .catch(err=>{
        console.log(err)
      })
    }


    return (
       <div className='bg-slate-800'>
      {location?.pathname === '/' && <div className='lg:navbar lg:w-11/12 mx-auto text-slate-300 p-2 lg:p-0'>
       {/* <div className='lg:navbar lg:pt-0 pt-2 w-11/12 mx-auto text-slate-300'> */}
        <div className="navbar-start uppercase">
           <p>english</p>
           <div className="custom-divider"></div>
           <p>bangla</p>
        </div>
        <hr className='my-2' />
{/* npm install react-icons --save */}
        <div className="navbar-center gap-3">
          <h3 className='flex items-center'> <ImLocation /> 2925 SWICK HILL STREET, DHAKA, NC23256</h3>
          <h3 className='flex items-center'>
          <AiFillPhone />
           +880123456789</h3>
          <h3 className='flex items-center'> <AiOutlineClockCircle /> MON-FRI 7:00AM-4:68PM</h3>
        </div>
        <hr className='my-2'/>
        <div className="navbar-end mb-3 lg:mb-0">
         {!user ?  <Link to='/login'><button>LOGIN</button></Link> : <div className="dropdown text-slate-900">
  <label tabIndex={0} className="btn m-1">{user?.displayName}</label>
  <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
    <Link to='/profile'><li><a>Profile</a></li></Link>
    <li onClick={handleLogout}><a>Log Out</a></li>
  </ul>
</div>}
          <div className="custom-divider"></div>
          <button> CONTACT</button>
          <div className="custom-divider"></div>
          <p><AiOutlineSearch /></p>
        </div>
       </div>}
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
    <Link to='/' className="btn btn-ghost normal-case text-xl">College Service</Link>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1  font-semibold">
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