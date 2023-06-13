import React, { useState } from 'react';

const EducationForm = () => {
  const [school, setSchool] = useState('');
  const [degree, setDegree] = useState('');
  const [year, setYear] = useState('');
  const [schoolError, setSchoolError] = useState('');
  const [degreeError, setDegreeError] = useState('');
  const [yearError, setYearError] = useState('');
  const [success, setSuccess] = useState('');
  const [additionalFields, setAdditionalFields] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate form fields
    let hasError = false;

    if (school.trim() === '') {
      setSchoolError('School is required');
      hasError = true;
    } else {
      setSchoolError('');
    }

    if (degree.trim() === '') {
      setDegreeError('Degree is required');
      hasError = true;
    } else {
      setDegreeError('');
    }

    if (year.trim() === '') {
      setYearError('Year is required');
      hasError = true;
    } else {
      setYearError('');
    }

    if (!hasError) {
      setSuccess('Successfully Saved');
    }
  };

  const handleAddField = () => {
    setAdditionalFields((prevFields) => [...prevFields, { school: '', degree: '', year: '' }]);
  };

  const handleAdditionalFieldChange = (index, field, value) => {
    const fields = [...additionalFields];
    fields[index][field] = value;
    setAdditionalFields(fields);
  };

  return (
    <div className="container">
      <h3 id="personal">Education Information</h3>
      <form onSubmit={handleSubmit} className="resume-builder">
        <label htmlFor="school">School</label>
        <input
          type="text"
          id="school"
          value={school}
          onChange={(e) => setSchool(e.target.value)}
        />
        {schoolError && <p>{schoolError}</p>}

        <label htmlFor="degree">Degree</label>
        <input
          type="text"
          id="degree"
          value={degree}
          onChange={(e) => setDegree(e.target.value)}
        />
        {degreeError && <p>{degreeError}</p>}

        <label htmlFor="year">Year</label>
        <input
          type="text"
          id="year"
          value={year}
          onChange={(e) => setYear(e.target.value)}
        />
        {yearError && <p>{yearError}</p>}

        {additionalFields.map((field, index) => (
          <div key={index}>
            <label htmlFor={`additionalFieldSchool${index}`}>Field {index + 1} - School</label>
            <input
              type="text"
              id={`additionalFieldSchool${index}`}
              value={field.school}
              onChange={(e) => handleAdditionalFieldChange(index, 'school', e.target.value)}
            /><br/>

            <label htmlFor={`additionalFieldDegree${index}`}>Field {index + 1} - Degree</label>
            <input
              type="text"
              id={`additionalFieldDegree${index}`}
              value={field.degree}
              onChange={(e) => handleAdditionalFieldChange(index, 'degree', e.target.value)}
            /><br/>

            <label htmlFor={`additionalFieldYear${index}`}>Field {index + 1} - Year</label>
            <input
              type="text"
              id={`additionalFieldYear${index}`}
              value={field.year}
              onChange={(e) => handleAdditionalFieldChange(index, 'year', e.target.value)}
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

export default EducationForm;
