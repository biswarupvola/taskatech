import React, { useState,useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  selectResumeData,
} from '../actions/resumeSlice';
import Button from '@mui/material/Button';
import { WelcomeMessage } from './WelcomeMessage';
import { FromInputs } from '../fromInputs';
import './style.css';

export function ResumePage() {
  const resumeData = useSelector(selectResumeData);
  const [steps, setSteps] = useState(0);
  const [buttonText, setButtonText] = useState("Continue");

  const next = (step) =>{
    setSteps(step);
    setButtonText("Next")
  }

  return (
    <>
       
        {
            steps == 0 ?
            <>
              <WelcomeMessage/>
              <Button onClick={()=>next(1)}>{buttonText}</Button>
            </>
            :
            <FromInputs/>
        }
      
      
    </>
  );
}
