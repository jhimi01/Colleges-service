import React from 'react';
import { Helmet } from 'react-helmet';
import SubBanner from '../../component/SubBanner/SubBanner';

const Admission = () => {
    return (
        <div>
             <Helmet>
            <title>admission | College</title>
        </Helmet>
        <SubBanner headerTitle={'Closer to your dream '}></SubBanner>
        </div>
    );
};

export default Admission;