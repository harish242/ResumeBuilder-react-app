import React, { useState } from 'react';

const ExperienceForm = () => {
  const [company, setCompany] = useState('');
  const [position, setPosition] = useState('');
  const [duration, setDuration] = useState('');
  const [companyError, setCompanyError] = useState('');
  const [positionError, setPositionError] = useState('');
  const [durationError, setDurationError] = useState('');
  const [success, setSuccess] = useState('');
  const [additionalFields, setAdditionalFields] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate form fields
    let hasError = false;

    if (company.trim() === '') {
      setCompanyError('Company is required');
      hasError = true;
    } else {
      setCompanyError('');
    }

    if (position.trim() === '') {
      setPositionError('Position is required');
      hasError = true;
    } else {
      setPositionError('');
    }

    if (duration.trim() === '') {
      setDurationError('Duration is required');
      hasError = true;
    } else {
      setDurationError('');
    }

    if (!hasError) {
      setSuccess('Successfully Saved');
    }
  };

  const handleAddField = () => {
    setAdditionalFields((prevFields) => [...prevFields, { company: '', position: '', duration: '' }]);
  };

  const handleAdditionalFieldChange = (index, field, value) => {
    const fields = [...additionalFields];
    fields[index][field] = value;
    setAdditionalFields(fields);
  };

  return (
    <div className="container">
      <h3 id="personal">Experience Information</h3>
      <form onSubmit={handleSubmit} className="resume-builder">
        <label htmlFor="company">Company</label>
        <input
          type="text"
          id="company"
          value={company}
          onChange={(e) => setCompany(e.target.value)}
        />
        {companyError && <p>{companyError}</p>}

        <label htmlFor="position">Position</label>
        <input
          type="text"
          id="position"
          value={position}
          onChange={(e) => setPosition(e.target.value)}
        />
        {positionError && <p>{positionError}</p>}

        <label htmlFor="duration">Duration</label>
        <input
          type="text"
          id="duration"
          value={duration}
          onChange={(e) => setDuration(e.target.value)}
        />
        {durationError && <p>{durationError}</p>}

        {additionalFields.map((field, index) => (
          <div key={index}>
            <label htmlFor={`additionalFieldCompany${index}`}>Field {index + 1} - Company</label>
            <input
              type="text"
              id={`additionalFieldCompany${index}`}
              value={field.company}
              onChange={(e) => handleAdditionalFieldChange(index, 'company', e.target.value)}
            /><br/>

            <label htmlFor={`additionalFieldPosition${index}`}>Field {index + 1} - Position</label>
            <input
              type="text"
              id={`additionalFieldPosition${index}`}
              value={field.position}
              onChange={(e) => handleAdditionalFieldChange(index, 'position', e.target.value)}
            /><br/>

            <label htmlFor={`additionalFieldDuration${index}`}>Field {index + 1} - Duration</label>
            <input
              type="text"
              id={`additionalFieldDuration${index}`}
              value={field.duration}
              onChange={(e) => handleAdditionalFieldChange(index, 'duration', e.target.value)}
            />
          </div>
        ))}

        <button type="button" onClick={handleAddField}>Add Field</button>

        <button type="submit">Save</button>
      </form>
      {success && <p>{success}</p>}
    </div>
  );
};

export default ExperienceForm;
