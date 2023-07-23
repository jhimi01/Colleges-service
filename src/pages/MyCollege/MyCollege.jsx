import React from 'react';
import { Helmet } from 'react-helmet';
import SubBanner from '../../component/SubBanner/SubBanner';
import useAdmission from '../../hooks/useAdmission';

const MyCollege = () => {

    const { admissions } = useAdmission();
    console.log(admissions)

    return (
        <div className='min-h-screen'>
        <Helmet>
        <title>My College | College</title>
      </Helmet>
      <SubBanner headerTitle={'My College'}></SubBanner>   

      <div className="overflow-x-auto lg:w-11/12 mx-auto my-10 p-2 lg:p-0">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th></th>
        <th>College Name</th>
        <th>Subject</th>
        <th>My Number</th>
        <th>Student Id</th>
        <th>Provide Review</th>
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}
      
      {admissions.length > 0 ? <>
        {admissions.map((admis, index)=> <tr key={index}>
        <th>{index + 1}</th>
        <td>{admis?.college}</td>
        <td>{admis?.candidatePhone}</td>
        <td>{admis?.subject}</td>
        <td>{admis?._id.slice(0, 10)}</td>
        <th>
          <button className="btn btn-ghost btn-xs">review</button>
        </th>
      </tr> )}
      </> : <p className='text-2xl text-gray-600 text-center my-5 uppercase'>"no data found"</p>}
    </tbody>
  </table>
</div>











        </div>
    );
};

export default MyCollege;