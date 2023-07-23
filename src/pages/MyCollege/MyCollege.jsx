import React from 'react';
import { Helmet } from 'react-helmet';
import SubBanner from '../../component/SubBanner/SubBanner';
import useAdmission from '../../hooks/useAdmission';

const MyCollege = () => {

    const { admissions } = useAdmission();
    console.log(admissions)

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