import React, { useState } from "react";
import "../styles/FormStyles.css";

const Step3ParentsDetails = ({ formData, setFormData, prevStep, nextStep }) => {
  const [errors, setErrors] = useState({
    fatherName: '',
    motherName: '',
    fatherEmail: '',
    motherEmail: '',
    fatherPhone: '',
    motherPhone: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    // Reset error on change
    setErrors({ ...errors, [name]: '' });

    setFormData({
      ...formData,
      parentsDetails: {
        ...formData.parentsDetails,
        [name]: value,
      },
    });
  };

  const validateInputs = () => {
    let tempErrors = {};

    if (!/^[A-Za-z\s]+$/.test(formData.parentsDetails?.fatherName)) {
      tempErrors.fatherName = 'Father\'s Name must contain only alphabets';
    }

    if (!/^[A-Za-z\s]+$/.test(formData.parentsDetails?.motherName)) {
      tempErrors.motherName = 'Mother\'s Name must contain only alphabets';
    }

    if (!/^[a-zA-Z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/.test(formData.parentsDetails?.fatherEmail)) {
      tempErrors.fatherEmail = 'Invalid Father\'s Email format';
    }

    if (!/^[a-zA-Z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/.test(formData.parentsDetails?.motherEmail)) {
      tempErrors.motherEmail = 'Invalid Mother\'s Email format';
    }

    if (!/^\d{10}$/.test(formData.parentsDetails?.fatherPhone)) {
      tempErrors.fatherPhone = 'Father\'s Phone number must be 10 digits';
    }

    if (!/^\d{10}$/.test(formData.parentsDetails?.motherPhone)) {
      tempErrors.motherPhone = 'Mother\'s Phone number must be 10 digits';
    }

    setErrors(tempErrors);

    // Return true if no errors, false if there are errors
    return Object.keys(tempErrors).length === 0;
  };

  const handleNext = () => {
    if (validateInputs()) {
      nextStep();
    }
  };

  return (
    <div className="form-wrapper">
      <div className="form-container">
        <div className="form-step">
          <label>Father's Name</label>
          <input
            type="text"
            name="fatherName"
            value={formData.parentsDetails?.fatherName || ""}
            onChange={handleInputChange}
            required
          />
          {errors.fatherName && <span className="error">{errors.fatherName}</span>}

          <label>Mother's Name</label>
          <input
            type="text"
            name="motherName"
            value={formData.parentsDetails?.motherName || ""}
            onChange={handleInputChange}
            required
          />
          {errors.motherName && <span className="error">{errors.motherName}</span>}

          <label>Father's Email</label>
          <input
            type="email"
            name="fatherEmail"
            value={formData.parentsDetails?.fatherEmail || ""}
            onChange={handleInputChange}
            required
          />
          {errors.fatherEmail && <span className="error">{errors.fatherEmail}</span>}

          <label>Mother's Email</label>
          <input
            type="email"
            name="motherEmail"
            value={formData.parentsDetails?.motherEmail || ""}
            onChange={handleInputChange}
            required
          />
          {errors.motherEmail && <span className="error">{errors.motherEmail}</span>}

          <label>Father's Phone</label>
          <input
            type="text"
            name="fatherPhone"
            value={formData.parentsDetails?.fatherPhone || ""}
            onChange={handleInputChange}
            required
          />
          {errors.fatherPhone && <span className="error">{errors.fatherPhone}</span>}

          <label>Mother's Phone</label>
          <input
            type="text"
            name="motherPhone"
            value={formData.parentsDetails?.motherPhone || ""}
            onChange={handleInputChange}
            required
          />
          {errors.motherPhone && <span className="error">{errors.motherPhone}</span>}

          {/* Back and Next buttons */}
          <button type="button" className="back-btn" onClick={prevStep}>Back</button>
          <button type="button" className="next-btn" onClick={handleNext}>Next</button>
        </div>
      </div>
    </div>
  );
};

export default Step3ParentsDetails;
