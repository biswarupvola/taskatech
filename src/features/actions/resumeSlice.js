import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  personalInfo:{
    firstName: "",
    lastName: "",
    email:"",
    phoneNumber:"",
  },
  ProfessionalInfo:{
    gitLink:"",
    liveInUS:false,
    resumeLink:"",
    coverLink:"",
    aboutYou:""
  },
  currentForm:0
};

export const resumeSlice = createSlice({
  name: 'resumeData',
  initialState,
  reducers: {
    updatePersonalInfo: (state, action) => {
      for (const [key, value] of Object.entries(action.payload)) {
        state.personalInfo[key] = value;
      }
    },
    updateProfessionalInfo: (state, action) => {
      for (const [key, value] of Object.entries(action.payload)) {
        state.ProfessionalInfo[key] = value;
      }
    },
    updatecurrentForm: (state, action) => {
      state.currentForm = action.payload
    },
    updateResumeData: (state, action) => {
      for (const [key, value] of Object.entries(action.payload)) {
        state.value[key] += value;
      }
    },
  },
 
});

export const { updateResumeData,updatePersonalInfo,updateProfessionalInfo,updatecurrentForm } = resumeSlice.actions;

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state: RootState) => state.value)`
export const selectResumeData = (state) => state?.resumeData;


export default resumeSlice.reducer;
