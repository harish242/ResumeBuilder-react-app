import React from 'react';
import PersonalInfoForm from './PersonalInfoForm';
import EducationForm from './EducationForm';
import ExperienceForm from './ExperienceForm';
import SkillForm from './SkillForm';
import './style.css'

const ResumeBuilder = () => {
  return (
    <div className="resume-builder mass">
      <h2>Resume Builder</h2>
      <PersonalInfoForm />
      <EducationForm />
      <ExperienceForm />
      <SkillForm />
    </div>
  );
};

export default ResumeBuilder;
