import {createSlice, PayloadAction} from '@reduxjs/toolkit';

const testSlice = createSlice({
  name: 'test',
  initialState: {
    message: 'Test Message',
  },
  reducers: {
    setTestMessage(state, action: PayloadAction<string>) {
      state.message = action.payload;
    },
  },
});

export const {setTestMessage} = testSlice.actions;

export default testSlice.reducer;
