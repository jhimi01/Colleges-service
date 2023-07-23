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

      <div className="overflow-x-auto lg:w-11/12 bg-base-300 mx-auto my-10 px-2 lg:px-0 py-5">
  <h2 className='text-center font-semibold text-3xl py-5'>Admission List </h2>
  <table className="table-lg table-zebra mx-auto">
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
        <td>{admis?.subject}</td>
        <td>{admis?.candidatePhone}</td>
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