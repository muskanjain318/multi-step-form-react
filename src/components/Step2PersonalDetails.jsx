import React, { useState } from "react";
import "../styles/FormStyles.css";

const Step2PersonalDetails = ({ formData, setFormData, prevStep, nextStep }) => {
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;

    // Basic validations
    let errorMsg = "";

    if (name === "email") {
      const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/;
      if (!emailPattern.test(value)) {
        errorMsg = "Invalid email format";
      }
    }

    if (name === "phone") {
      const phonePattern = /^[0-9]{10}$/;
      if (!phonePattern.test(value)) {
        errorMsg = "Phone number must be 10 digits";
      }
    }

    setErrors((prev) => ({ ...prev, [name]: errorMsg }));

    // Update form data
    setFormData({ ...formData, [name]: value });
  };

  return (
    <div className="form-wrapper">
      <div className="form-container">
    <div className="form-step">
      <label>Applicant Title</label>
      <input
        type="text"
        name="title"
        value={formData.title || ""}
        onChange={handleChange}
        required
      />

      <label>First Name</label>
      <input
        type="text"
        name="firstName"
        value={formData.firstName || ""}
        onChange={handleChange}
        required
      />

      <label>Last Name</label>
      <input
        type="text"
        name="lastName"
        value={formData.lastName || ""}
        onChange={handleChange}
        required
      />

      <label>Gender</label>
      <select
        name="gender"
        value={formData.gender || ""}
        onChange={handleChange}
        required
      >
        <option value="">Select Gender</option>
        <option value="Male">Male</option>
        <option value="Female">Female</option>
        <option value="Other">Other</option>
      </select>

      <label>Email ID</label>
      <input
        type="email"
        name="email"
        value={formData.email || ""}
        onChange={handleChange}
        required
      />
      {errors.email && <span className="error">{errors.email}</span>}

      <label>Phone Number</label>
      <input
        type="text"
        name="phone"
        value={formData.phone || ""}
        onChange={handleChange}
        required
      />
      {errors.phone && <span className="error">{errors.phone}</span>}

      {/* Back and Next buttons */}
      <button type="button" className="back-btn" onClick={prevStep}>Back</button>
      <button type="button" className="next-btn" onClick={nextStep}>Next</button>
    </div>
    </div>
    </div>
  );
};

export default Step2PersonalDetails;
