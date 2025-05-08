import React from "react";
import "../styles/FormStyles.css";

const Step1BasicDetails = ({ formData, setFormData, nextStep }) => {
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <div className="form-wrapper">
      <div className="form-container">
        <h2>Program Details</h2>

        <label htmlFor="level">Level</label>
        <select
          id="level"
          name="level"
          value={formData.level || ""}
          onChange={handleChange}
          required
        >
          <option value="">Select</option>
          <option value="UG">UG</option>
          <option value="PG">PG</option>
          <option value="PhD">PhD</option>
        </select>

        <label htmlFor="course">Course</label>
        <select
          id="course"
          name="course"
          value={formData.course || ""}
          onChange={handleChange}
          required
        >
          <option value="">Select</option>
          <option value="B.Tech">B.Tech</option>
          <option value="M.Tech">M.Tech</option>
          <option value="MBA">MBA</option>
        </select>

        <label htmlFor="specialization">Specialization</label>
        <select
          id="specialization"
          name="specialization"
          value={formData.specialization || ""}
          onChange={handleChange}
          required
        >
          <option value="">Select</option>
          <option value="AI">AI</option>
          <option value="Finance">Finance</option>
          <option value="HR">HR</option>
        </select>

        <div className="button-group">
          <button onClick={nextStep} className="next-btn">Next</button>
        </div>
      </div>
    </div>
  );
};

export default Step1BasicDetails;
