import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AddCommentFormSchema } from '../types/addCommentForm';

const initialState: AddCommentFormSchema = {
  text: '',
  isLoading: false,
  error: '',
};

export const addCommentFormSlice = createSlice({
  name: 'addCommentForm',
  initialState,
  reducers: {
    setCommentsFormText: (state, action: PayloadAction<string>) => {
      state.text = action.payload;
    },
  },
});

export const { setCommentsFormText } = addCommentFormSlice.actions;
export const { reducer: addCommentFormReducer } = addCommentFormSlice;
