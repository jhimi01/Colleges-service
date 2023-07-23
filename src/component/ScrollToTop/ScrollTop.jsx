import React from 'react';
import ScrollToTop from "react-scroll-to-top";
import { BsArrowUpCircleFill } from 'react-icons/bs';

const ScrollTop = () => {
    return (
        <div className='bg-gray-700'>
        <ScrollToTop
          smooth
          component={<BsArrowUpCircleFill className='text-6xl text-slate-800'/>}
          style={{ background: 'transparent' }}
        >
        </ScrollToTop>
      </div>
    );
};

export default ScrollTop;