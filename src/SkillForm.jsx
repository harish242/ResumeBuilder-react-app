import React, { useState } from 'react';

const SkillForm = () => {
  const [skills, setSkills] = useState([]);
  const [currentSkill, setCurrentSkill] = useState('');

  const handleSkillAddition = (skill) => {
    setSkills([...skills, skill]);
    setCurrentSkill('');
  };

  const handleSkillDelete = (i) => {
    const updatedSkills = [...skills];
    updatedSkills.splice(i, 1);
    setSkills(updatedSkills);
  };

  return (
    <div className='container'>
       <form className="resume-builder">
      <label htmlFor="skills" id='personal'>Skills</label>
      <input
        type="text"
        id="skills"
        value={currentSkill}
        onChange={(e) => setCurrentSkill(e.target.value)}
      />
      <button type="button" onClick={() => handleSkillAddition(currentSkill)}>
        Add Skill
      </button>
      <ul>
        {skills.map((skill, index) => (
          <li key={index}>
            {skill}{' '}
            <button type="button" onClick={() => handleSkillDelete(index)}>
              Remove
            </button>
          </li>
        ))}
      </ul>
    </form>
    </div>
   
  );
};

export default SkillForm;
