import React from 'react';

const Navigationbar = () => {
    const Navigation = ()=>{
          return(
            <>
                 <li><a>Item 1</a></li>
      <li tabIndex={0}>
        <details>
          <summary>Parent</summary>
          <ul className="p-2">
            <li><a>Submenu 1</a></li>
            <li><a>Submenu 2</a></li>
          </ul>
        </details>
      </li>
      <li><a>Item 3</a></li>
            </>
          )
    }
    return (
       <>
       <div className='navbar'>
        <div className="navbar-start uppercase">
           <p>english</p>
           <div className="divider divider-horizontal"></div>
           <p>bangla</p>
        </div>
{/* npm install react-icons --save */}
        <div className="navbar-center">
          <p></p>
          <p>
          {/* <AiFillPhone /> */}
           +880123456789</p>
          <p></p>
        </div>
        <div className="navbar-end">

        </div>
       </div>
         <div className="navbar bg-base-100">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
       <Navigation />
      </ul>
    </div>
    <a className="btn btn-ghost normal-case text-xl">daisyUI</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
     <Navigation />
    </ul>
  </div>
  <div className="navbar-end">
    <a className="btn">Button</a>
  </div>
</div>
       </>
    );
};

export default Navigationbar;