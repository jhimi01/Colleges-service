import React, { useContext, useState } from 'react';
import { Helmet } from 'react-helmet';
import SubBanner from '../../component/SubBanner/SubBanner';
import { AuthContext } from '../../Provider/AuthProvider';
import useColleges from '../../hooks/useColleges';
import Swal from 'sweetalert2';
import axios from 'axios'

const Admission = () => {
  const [selectedCollege, setSelectedCollege] = useState("");
  const { user } = useContext(AuthContext);
  const { colleges } = useColleges();

  const handleAddCandidate = (e) => {
    e.preventDefault();
    const form = e.target;
    const candidateName = form.candidateName.value;
    const subject = form.subject.value;
    const candidateEmail = form.candidateEmail.value;
    const candidatePhone = form.candidatePhone.value;
    const dateOfBirth = form.dateOfBirth.value;

    const candidateData = {
      college: selectedCollege,
      candidateName,
      subject,
      candidateEmail,
      candidatePhone,
      dateOfBirth,
    };
    console.log(candidateData);

    axios.post('http://localhost:3000/admissions', candidateData )
    .then((res)=>{
        console.log('post', res.data)
        
        Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Your work has been saved',
            showConfirmButton: false,
            timer: 1500
          })
          form.reset();
    }) .catch((error) => {
        console.error('Post request failed:', error);
        // Handle error if the post request fails
      });
  };

  return (
    <div>
      <Helmet>
        <title>Admission | College</title>
      </Helmet>
      <SubBanner headerTitle={'admission'}></SubBanner>
      <div>
      <h1 className='text-2xl font-bold capitalize text-center my-10'>Fill the Form to go to your dream</h1>
        <form onSubmit={handleAddCandidate} className="w-full md:w-3/4 mx-auto text-gray-900 font-semibold my-10">
          <div className="flex mb-3 gap-3">
          <div className="w-full">
          <span className="label-text">Select your College</span>
            <select
              className="input-secondary text-gray-900 font-semibold w-full input input-bordered"
              name="college"
              value={selectedCollege}
              onChange={(e) => setSelectedCollege(e.target.value)}
              required
            >
              <option value="">Select a college</option>
              {colleges.map((college, index) => (
                <option key={index} className="text-gray-800" value={college?.college?.name}>
                  {college?.college?.name}
                </option>
              ))}
            </select>
          </div>
          </div>
      
            <div>
              <div className="flex mb-3 gap-3">
             <div className='w-full'>
             <span className="label-text">Candidate Name</span>
                <input
                  className="input-secondary uppercase  w-full input input-bordered"
                  value={user?.displayName}
                  type="text"
                  name="candidateName"
                  placeholder="Candidate Name"
                  required
                />
             </div>
            <div className='w-full'>
            <span className="label-text">Subject</span>
                <input
                  className="input-secondary  w-full input input-bordered"
                  type="text"
                  name="subject"
                  placeholder="Subject"
                  required
                />
            </div>
              </div>

              {/* address */}
              <div className="flex mb-3 gap-3">
              <div className='w-full'>
              <span className="label-text">Candidate Phone number</span>
                <input
                  className="input-secondary  w-full input input-bordered"
                  type="tel"
                  name="candidatePhone"
                  placeholder="Candidate Phone Number"
                  required
                />
              </div>
               <div className='w-full'>
               <span className="label-text">Email</span>
                <input
                  className="input-secondary  w-full input input-bordered"
                  value={user?.email}
                  type="email"
                  name="candidateEmail"
                  placeholder="Your Email"
                  required
                />
               </div>
              </div>

              {/* date of birth */}
              <div className="flex mb-3 gap-3">
             <div className='w-full'>
             <span className="label-text">Date of birth</span>
                <input
                  className="input-secondary w-full input input-bordered"
                  type="date"
                  name="dateOfBirth"
                  placeholder="Date of Birth"
                  required
                />
             </div>
              </div>
              <div className="text-center">
                <input type="submit" className="btn px-5 mt-2 btn-secondary" />
              </div>
            </div>
         
        </form>
      </div>
    </div>
  );
};

export default Admission;
