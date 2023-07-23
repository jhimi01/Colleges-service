import React, { useContext, useState } from 'react';
import { Helmet } from 'react-helmet';
import SubBanner from '../../component/SubBanner/SubBanner';
import { AuthContext } from '../../Provider/AuthProvider';
import useColleges from '../../hooks/useColleges';

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
      
            <div>
              <div className="flex mb-3 gap-3">
                <input
                  className="input-secondary uppercase  w-full input input-bordered"
                  value={user?.displayName}
                  type="text"
                  name="candidateName"
                  placeholder="Candidate Name"
                  required
                />
                <input
                  className="input-secondary  w-full input input-bordered"
                  type="text"
                  name="subject"
                  placeholder="Subject"
                  required
                />
              </div>

              {/* address */}
              <div className="flex mb-3 gap-3">
                <input
                  className="input-secondary  w-full input input-bordered"
                  type="tel"
                  name="candidatePhone"
                  placeholder="Candidate Phone Number"
                  required
                />
                <input
                  className="input-secondary  w-full input input-bordered"
                  type="email"
                  name="candidateEmail"
                  placeholder="Your Email"
                  required
                />
              </div>

              {/* date of birth */}
              <div className="flex mb-3 gap-3">
                <input
                  className="input-secondary  w-full input input-bordered"
                  type="date"
                  name="dateOfBirth"
                  placeholder="Date of Birth"
                  required
                />
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
