import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  selectResumeData,
  updatePersonalInfo,
} from '../actions/resumeSlice';

import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import {onlyLettersAndSpaces, emailValidation, mobileValidation} from '../common/regexValue';

export function PersonalInputs(props) {
  const resumeData = useSelector(selectResumeData);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [errMsgFirstName, setErrMsgFirstName] = useState("");
  const [errMsgLastName, setErrMsgLastName] = useState("");
  const [errMsgEmail, setErrMsgEmail] = useState("");
  const [errMsgPhone, setErrMsgPhone] = useState("");
  const dispatch = useDispatch();

  useEffect(()=>{
    setFirstName(resumeData?.personalInfo.firstName);
    setLastName(resumeData?.personalInfo.lastName);
    setEmail(resumeData?.personalInfo.email);
    setPhoneNumber(resumeData?.personalInfo.phoneNumber);
  },[resumeData])
 
  const handleInput =(e)=>{
    if(e.target.name == "firstName"){
      setErrMsgFirstName("")
    }
    if(e.target.name == "lastName"){
      setErrMsgLastName("")
    }
    if(e.target.name == "email"){
      setErrMsgEmail("")
    }
    if(e.target.name == "phoneNumber"){
      setErrMsgPhone("")
    }
    let newResumeData = {};
    newResumeData[e.target.name] = e.target.value;
    dispatch(updatePersonalInfo(newResumeData))
  }

  const goToNext = () =>{
    if(firstName == ""){
      setErrMsgFirstName("Enter first name")
      return false;
    }
    else if(!onlyLettersAndSpaces.test(firstName)){
      setErrMsgFirstName("Number is not allowed in name field")
      return false;
    }
    else if(lastName == ""){
      setErrMsgLastName("Enter last name")
      return false;
    }
    else if(!onlyLettersAndSpaces.test(lastName)){
      setErrMsgLastName("Number is not allowed in name field")
      return false;
    }
    else if(!emailValidation.test(email) ){
      setErrMsgEmail("Enter valid Email")
      return false;
    }
    else if(!mobileValidation.test(phoneNumber) ){
      setErrMsgPhone("Enter valid phone number")
      return false;
    }else{
      props.next(1);
    }
  }

  return (
   
      <Grid xs={6} md={6} item>

        <Box
          component="form"
          sx={{
            '& > :not(style)': { mb: 2, width: '100%' }, width: "70%", margin:"auto",
          }}
          validate
          autoComplete="off"
        >
          <TextField
              error = {errMsgFirstName ? true : false}
              fullWidth 
              required
              id="firstName"
              name="firstName"
              label="First Name"
              defaultValue={firstName}
              value={firstName}
              onChange={(e)=>{handleInput(e)}}
              helperText={errMsgFirstName}
          />

          <TextField
              error = {errMsgLastName ? true : false}
              fullWidth 
              required
              id="lastName"
              name="lastName"
              label="Last Name"
              onChange={(e)=>{handleInput(e)}}
              defaultValue={lastName}
              value={lastName}
              helperText={errMsgLastName}
          />
      
          <TextField
              error = {errMsgEmail ? true : false}
              fullWidth 
              required
              id="email"
              name="email"
              label="Email"
              onChange={(e)=>{handleInput(e)}}
              defaultValue={email}
              value={email}
              helperText={errMsgEmail}
          />

          <TextField
              error = {errMsgPhone ? true : false}
              fullWidth 
              required
              id="phoneNumber"
              name="phoneNumber"
              label="Phone Number"
              onChange={(e)=>{handleInput(e)}}
              defaultValue={phoneNumber}
              value={phoneNumber}
              helperText={errMsgPhone}
          />
      </Box>
      <Button variant="contained" onClick={goToNext}>Next</Button>
    </Grid>
    
  );
}
