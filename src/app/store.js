import { configureStore } from '@reduxjs/toolkit';
import resumeReducer from '../features/actions/resumeSlice';

export const store = configureStore({
  reducer: {
    resumeData: resumeReducer,
  },
});
