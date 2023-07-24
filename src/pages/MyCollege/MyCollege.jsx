import React, { useContext, useState } from "react";
import { Helmet } from "react-helmet";
import SubBanner from "../../component/SubBanner/SubBanner";
import useAdmission from "../../hooks/useAdmission";
import Review from "../../component/Review/Review";
import { AuthContext } from "../../Provider/AuthProvider";

const MyCollege = () => {
  const [feedback, setFeedback] = useState(false);
  const [activeFeedbackId, setActiveFeedbackId] = useState(null);
  const [feedbackText, setFeedbackText] = useState("");
  const { user } = useContext(AuthContext);

  const { admissions } = useAdmission();

  const handleFeedback = (id) => {
    setActiveFeedbackId(id);
    setFeedback(!feedback);
  };

  const handleSubmitFeedback = (id) => {
    setFeedback(false); // Close the feedback modal
    setActiveFeedbackId(null); // Reset the active feedback ID
    setFeedbackText(""); // Clear the feedback text
  };

  return (
    <div className="min-h-screen">
      <Helmet>
        <title>My College | College</title>
      </Helmet>
      <SubBanner headerTitle={"My College"} />
      <div className="overflow-x-auto lg:w-11/12 bg-base-300 mx-auto my-10 px-2 lg:px-0 py-5">
        <h2 className="text-center font-semibold text-3xl py-5">
          Admission List{" "}
        </h2>
        <table className="table-lg table-zebra mx-auto">
         
         
            {admissions.length > 0 ? (
              <>
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
                {admissions.map((admis, index) => (
                    <tbody>
                  <tr key={index}>
                    <th>{index + 1}</th>
                    <td>{admis?.college}</td>
                    <td>{admis?.subject}</td>
                    <td>{admis?.candidatePhone}</td>
                    <td>{admis?._id.slice(0, 10)}</td>
                    <th className="relative">
                      <button
                        className="btn btn-ghost btn-xs"
                        onClick={() => handleFeedback(admis._id)}
                      >
                        review
                      </button>
                      {feedback && activeFeedbackId === admis._id && (
                        <div className="absolute bg-white p-3 rounded-lg shadow-lg z-10">
                          <Review
                            img={user?.photoURL}
                            author={user?.displayName}
                            onClose={() => setFeedback(false)}
                            onSubmitFeedback={(rating, feedbackText) =>
                              handleSubmitFeedback(
                                admis._id,
                                rating,
                                feedbackText
                              )
                            }
                          />
                        </div>
                      )}
                    </th>
                  </tr>
                  </tbody>
                ))}
              </>
            ) : (
              <p className="text-2xl text-gray-600 text-center my-5 uppercase">
                No data found
              </p>
            )}
          
        </table>
      </div>
    </div>
  );
};

export default MyCollege;
