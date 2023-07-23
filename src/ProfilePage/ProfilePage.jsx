import React, { useContext } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
import { Helmet } from 'react-helmet';

const ProfilePage = () => {

    const { user } = useContext(AuthContext)

    return (
        <div>
        <Helmet>
            <title>Profile | College</title>
        </Helmet>
            <img src={user?.photoURL} />
            <p className='text-3xl capitalize'>{user?.displayName}</p>
        </div>
    );
};

export default ProfilePage;