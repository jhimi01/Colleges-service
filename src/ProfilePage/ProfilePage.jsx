import React, { useContext } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
import { Helmet } from 'react-helmet';

const ProfilePage = () => {

    const { user } = useContext(AuthContext)

    return (
        <div className='h-screen'>
        <Helmet>
            <title>Profile | College</title>
        </Helmet>
        <div>
        <div className='flex items-center justify-center h-[150px] bg-base-300 relative -z-10'> 
        {/* <h2 className='text-3xl mb-10 font-semibold'>Profile Page</h2> */}
        </div>
           <div className=' text-center flex flex-col justify-center items-center '>
           <img className='w-52 h-52 object-cover -mt-24 rounded-full' src={user?.photoURL} />
            <p className='text-3xl text-center capitalize'>Name : {user?.displayName}</p>
            <p className='text-2xl text-center capitalize'>Email : {user?.email}</p>
           </div>
        </div>
        </div>
    );
};

export default ProfilePage;