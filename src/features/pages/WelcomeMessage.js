import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Grid from '@mui/material/Grid';
export function WelcomeMessage() {
  const [incrementAmount, setIncrementAmount] = useState('2');

  return (
    <Grid
        container
        direction="column"
        justifyContent="center"
        alignItems="center"
        style={{height:"60vh"}}
    >
      <h1 className='font header'>Welcome to resume builder by <br/><span className='span'>Biswarup Chakraborty</span></h1>
    </Grid>
      
  );
}