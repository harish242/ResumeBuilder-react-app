import React, { useState, useEffect } from 'react';
import './style.css';

const PersonalInfoForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');
  const [phone, setPhone] = useState('');
  const [error, setError] = useState({ errName: '', errPhone: '' });
  const [success, setSuccess] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [additionalFields, setAdditionalFields] = useState([]); // State for additional fields

  useEffect(() => {
    if (submitted && error.errName === '' && error.errPhone === '') {
      setSuccess('Successfully Saved');
    } else {
      setSuccess('');
    }
  }, [submitted, error]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true); // Form has been submitted

    // Handle form submission
    if (name === '') {
      setError((prevError) => ({ ...prevError, errName: 'Name is mandatory' }));
    } else {
      setError((prevError) => ({ ...prevError, errName: '' }));
    }

    if (phone.length !== 10) {
      setError((prevError) => ({
        ...prevError,
        errPhone: 'Phone number must contain exactly 10 digits',
      }));
    } else {
      setError((prevError) => ({ ...prevError, errPhone: '' }));
    }
  };

  const handlePhoneChange = (e) => {
    const value = e.target.value;
    const numericValue = value.replace(/\D/g, ''); // Remove non-digit characters

    setPhone(numericValue);

    if (numericValue.length !== 10) {
      setError((prevError) => ({
        ...prevError,
        errPhone: 'Phone number must contain exactly 10 digits',
      }));
    } else {
      setError((prevError) => ({ ...prevError, errPhone: '' }));
    }
  };

  const handleAddField = () => {
    setAdditionalFields((prevFields) => [...prevFields, '']); // Add an empty field to the additional fields array
  };

  const handleAdditionalFieldChange = (index, value) => {
    const fields = [...additionalFields];
    fields[index] = value;
    setAdditionalFields(fields);
  };

  return (
    <div className="container">
      <h3 id="personal">Personal Information</h3>
      <form onSubmit={handleSubmit} className="resume-builder">
        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => {
            setName(e.target.value);
            setError((prevError) => ({ ...prevError, errName: '' }));
          }}
        />
        {error.errName && <h3>{error.errName}</h3>}

        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <label htmlFor="address">Address</label>
        <input
          type="text"
          id="address"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
        />

        <label htmlFor="phone">Phone</label>
        <input
          type="tel"
          id="phone"
          value={phone}
          onChange={handlePhoneChange}
        />
        {error.errPhone && <h3>{error.errPhone}</h3>}

        {additionalFields.map((field, index) => (
          <div key={index}>
            <label htmlFor={`additionalField${index}`}>Additional Field {index + 1}</label>
            <input
              type="text"
              id={`additionalField${index}`}
              value={field}
              onChange={(e) => handleAdditionalFieldChange(index, e.target.value)}
            />
          </div>
        ))}

        <button type="button" onClick={handleAddField}>Add Field</button>

        <button type="submit">Save</button>
      </form>
      {success && submitted && error.errName === '' && error.errPhone === '' && name !== '' && phone.length === 10 && (
        <h3 id='success'>{success}</h3>
      )}
    </div>
  );
};

export default PersonalInfoForm;
