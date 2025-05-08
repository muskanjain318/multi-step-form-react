import React, { useState } from "react";

const Step4UploadDetails = ({ formData, setFormData, prevStep }) => {
  const [showPopup, setShowPopup] = useState(false);
  const [files, setFiles] = useState({
    passportPhoto: null,
    marksheet: null,
    signature: null,
    aadhaarCard: null,
  });

  // Handle file selection
  const handleFileChange = (e) => {
    const { name, files: selectedFiles } = e.target;
    setFiles({
      ...files,
      [name]: selectedFiles[0], // Save only the first selected file
    });
  };

  // Handle form submission
  const handleSubmit = () => {
    // Logic for submitting form (e.g., send form data and files to an API)
    console.log("Submitted files: ", files);

    // Show the success popup after submission
    setShowPopup(true);
  };

  // Close the success popup
  const handleClosePopup = () => {
    setShowPopup(false);
  };

  return (
    <div className="form-wrapper">
      <div className="form-container">
        <div className="form-step">
          {/* Passport Size Photo Upload */}
          <label>Applicant Passport Size Photo</label>
          <input
            type="file"
            name="passportPhoto"
            accept="image/*"
            onChange={handleFileChange}
          />

          {/* 10th Marksheet Upload */}
          <label>10th Marksheet</label>
          <input
            type="file"
            name="marksheet"
            accept="application/pdf,image/*"
            onChange={handleFileChange}
          />

          {/* Signature Upload */}
          <label>Signature</label>
          <input
            type="file"
            name="signature"
            accept="image/*"
            onChange={handleFileChange}
          />

          {/* Aadhaar Card Upload */}
          <label>Aadhaar Card</label>
          <input
            type="file"
            name="aadhaarCard"
            accept="application/pdf,image/*"
            onChange={handleFileChange}
          />

          {/* Submit and Back Buttons */}
          <div>
            <button type="button" className="back-btn" onClick={prevStep}>
              Back
            </button>
            <button type="button" className="submit-btn" onClick={handleSubmit}>
              Submit
            </button>
          </div>

          {/* Success Popup */}
          {showPopup && (
            <div className="popup-overlay">
              <div className="popup-box">
                <h3>Details have been submitted successfully!</h3>
                <p>You can refresh the page now.</p>
                <button onClick={handleClosePopup} className="close-btn">
                  Close
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Step4UploadDetails;
