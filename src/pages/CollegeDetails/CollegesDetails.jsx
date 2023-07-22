import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';

const CollegesDetails = () => {
    // const { id } = useParams();
    const singleCollege = useLoaderData();
    console.log(singleCollege)

  if (!singleCollege) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>{singleCollege.name}</h2>
      {/* Display other college details */}
    </div>
  );
};

export default CollegesDetails;
