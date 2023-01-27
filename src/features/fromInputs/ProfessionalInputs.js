import React, { useState,useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  selectResumeData,
  updateProfessionalInfo
} from '../actions/resumeSlice';

import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import {urlCheck} from '../common/regexValue';
import { FileUploader } from '../common/FileUploader';
import Button from '@mui/material/Button';

import {submitResume} from '../services/service'

export function ProfessionalInputs(props) {
  const resumeData = useSelector(selectResumeData);
  const [liveUs, setLiveUs] = useState(false);
  const [gitLink, setGitLink] = useState("");
  const [resumeLink, setResumeLink] = useState("");
  const [coverLetterLink, setCoverLetterLink] = useState("");
  const [aboutYou, setAboutYou] = useState("");

  const [errMsgGitLink, setErrMsgGitLink] = useState("");
  const [errorResume, setErrorResume] = useState("");
  const [errorCover, setErrorCover] = useState("");
  const [errorLiveIn, setErrorLiveIn] = useState("");

  const dispatch = useDispatch();

  useEffect(()=>{
    setGitLink(resumeData?.ProfessionalInfo.gitLink);
    setLiveUs(resumeData?.ProfessionalInfo.liveInUS);
    setResumeLink(resumeData?.ProfessionalInfo.resumeLink);
    setCoverLetterLink(resumeData?.ProfessionalInfo.coverLink);
    setAboutYou(resumeData?.ProfessionalInfo.aboutYou);
  },[resumeData])

  const handleInput =(e)=>{
    if(e.target.name == "gitLink"){
      setErrMsgGitLink("")
    }
    if(e.target.name == "liveInUS"){
      setErrorLiveIn("")
    }
    let newResumeData = {};
    newResumeData[e.target.name] = e.target.value;
    dispatch(updateProfessionalInfo(newResumeData))
  }

  const handleFile =(type,value)=>{
    if(type == "resumeLink"){
      setErrorResume("")
    }
    if(type == "coverLink"){
      setErrorCover("")
    }
    let newResumeData = {};
    newResumeData[type] = value;
    dispatch(updateProfessionalInfo(newResumeData))
  }

  const SubmitResume = () =>{
    if(liveUs == ""){
      setErrorLiveIn("errorLiveIn")
      return false;
    }
    else if(!urlCheck.test(gitLink)){
      setErrMsgGitLink("Enter valid git link")
      return false;
    }
    else if(resumeLink == ""){
      setErrorResume("errorResume")
      return false;
    }
    else if(coverLetterLink == "" ){
      setErrorCover("errorResume")
      return false;
    }
    else{
      submitResumrToDB(JSON.stringify(resumeData));

    }
  }

  const submitResumrToDB = (data) => {
    let submitResumePromt = prompt("Data which \ngoing to server is:", data);
    if (submitResumePromt == null || submitResumePromt == "") {
      submitResume(data)
    } else {
      submitResume(data)
    }
    
  }
 
  return (
   
      <Grid xs={8} md={6} item style={{textAlign:"left"}}>
        <FormControl className="mrgn">
            <FormLabel id="liveInUs" className = {errorLiveIn}>Do you live in the US?</FormLabel>
            <RadioGroup
              row
              error
              aria-labelledby="liveInUs"
              name="liveInUS"
              value={liveUs}
            >
              <FormControlLabel value="yes" 
                onChange={(e)=>{handleInput(e)}} 
                control={<Radio />} label="Yes" 
              />
              <FormControlLabel value="no" 
                onChange={(e)=>{handleInput(e)}} 
                control={<Radio />} label="No" 
              />
              
            </RadioGroup>
            {
              errorLiveIn ? 
              <p className='errMsgText'>Are you US cityzen ? </p>
              :
              <p className='noSpacing'></p>
            }
            
        </FormControl>
        <TextField
              error = {errMsgGitLink ? true : false}
              fullWidth 
              required
              id="gitLink"
              name="gitLink"
              label="Git Profile"
              defaultValue = {gitLink}
              value = {gitLink}
              onChange={(e)=>{handleInput(e)}}
              className="mrgn"
              helperText={errMsgGitLink}
          />
        <Grid
            container
            direction="row"
            justifyContent="space-between"
            alignItems="center"
            className="mrgn"
        >
            <FileUploader 
              text={"Resume"} 
              handleFile={(type,val)=>{handleFile(type,val)}}
              file={resumeLink}
              type={"resumeLink"}
              className = {errorResume}
            />
            <FileUploader 
              text={"Cover letter"} 
              file={coverLetterLink}
              handleFile={(type,val)=>{handleFile(type,val)}} 
              type={"coverLink"}
              className = {errorCover}
            />
        </Grid>

       <TextField
              fullWidth 
              id="aboutYou"
              name="aboutYou"
              label="About You"
              multiline
              rows={2}
              defaultValue={aboutYou}
              value={aboutYou}
              className="mrgn"
              onChange={(e)=>{handleInput(e)}}
          />
        <Grid
          container
          direction="row"
          justifyContent="space-between"
          alignItems="center"
          className="mrgn"
        >
          <Button  variant="contained" onClick={()=>props.next(0)}>Previous</Button>
          <Button  variant="contained" onClick={SubmitResume}>Submit</Button>
        </Grid>
    </Grid>
    
  );
}
