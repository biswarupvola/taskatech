import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import {
  updatecurrentForm
} from '../actions/resumeSlice';

import './Style.css';
import {Steper} from './Steper';
import {PersonalInputs} from './PersonalInputs';
import {ProfessionalInputs} from './ProfessionalInputs'
import Grid from '@mui/material/Grid';

export function FromInputs() {
  const [steps, setSteps] = useState(0);
  const dispatch = useDispatch();

  const next = (step) =>{
    setSteps(step);
    dispatch(updatecurrentForm(step))
  }
 
  return (
    <Grid
        container
        direction="column"
        justifyContent="center"
        alignItems="center"
    >
      <Steper/>
      {
        steps == 0 ?
          <PersonalInputs 
            next={(val)=>{next(val)}}
          />
          :
          <ProfessionalInputs
            next={(val)=>{next(val)}}
          />
      }      
    </Grid>
  );
}
