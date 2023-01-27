import React, { useState, useEffect } from 'react';
import Grid from '@mui/material/Grid';
import { useSelector } from 'react-redux';
import {
  selectResumeData,
} from '../actions/resumeSlice';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';

export function Steper() {
  const resumeData = useSelector(selectResumeData);
  const [isCompletePersonal, setIsCompletePersonal] = useState(false);
  const [isCompleteProfessional, setIsCompleteProfessional] = useState(false);

  useEffect(()=>{
    if(resumeData.personalInfo.firstName != "" &&
      resumeData.personalInfo.lastName != "" &&
      resumeData.personalInfo.email != "" &&
      resumeData.personalInfo.phoneNumber != ""){
      setIsCompletePersonal(true)
    }else{
      setIsCompletePersonal(false)
    }

    if(resumeData.ProfessionalInfo.coverLink != "" &&
      resumeData.ProfessionalInfo.gitLink != "" &&
      resumeData.ProfessionalInfo.liveInUS != "" &&
      resumeData.ProfessionalInfo.resumeLink != ""){
        setIsCompleteProfessional(true)
    }else{
      setIsCompleteProfessional(false)
    }
  },[resumeData]);

  return (
    <Grid xs={6} md={6} item className="steperContainer">
      <p className={`steperBox ${resumeData.currentForm == 0 ? "active" : ""}`}>Personal Information
        {isCompletePersonal ? <CheckCircleOutlineIcon className="icon"/> : null }
      </p>
      <p className={`steperBox ${resumeData.currentForm == 1 ? "active" : ""}`}>Professional Information
      {isCompleteProfessional ? <CheckCircleOutlineIcon className="icon"/> : null }
      </p>
    </Grid>
  );
}
