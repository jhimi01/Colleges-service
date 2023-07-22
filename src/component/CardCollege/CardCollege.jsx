import React from 'react';

const CardCollege = ({item}) => {
   const {college} = item;
   console.log(college)
    return (
        <div>
            <img src={college?.image} alt="" />
            <h3>{college?.name}</h3>
        </div>
    );
};

export default CardCollege;