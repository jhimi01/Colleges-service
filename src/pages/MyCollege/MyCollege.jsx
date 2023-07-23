import React from 'react';
import { Helmet } from 'react-helmet';
import SubBanner from '../../component/SubBanner/SubBanner';

const MyCollege = () => {
    return (
        <div>
        <Helmet>
        <title>My College | College</title>
      </Helmet>
      <SubBanner headerTitle={'My College'}></SubBanner>
            this is my college
        </div>
    );
};

export default MyCollege;