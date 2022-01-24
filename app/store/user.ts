import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import {userLogin, userRegister} from '../services/authService';
import {Credential, initialUser, RegisterData, UserData} from '../types/user';

export const login = createAsyncThunk(
  'user/login',
  async (credentials: Credential) => {
    try {
      const response = await userLogin(credentials);
      return response as UserData;
    } catch (error) {
      throw error;
    }
  },
);

export const logout = createAsyncThunk('user/logout', async () => {
  try {
    // remove token from async storage
    return;
  } catch (error) {
    throw error;
  }
});

export const register = createAsyncThunk(
  'user/register',
  async (data: RegisterData) => {
    try {
      const response = await userRegister(data);
      return response as UserData;
    } catch (error) {
      throw error;
    }
  },
);

const userSlice = createSlice({
  name: 'user',
  initialState: initialUser,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(login.pending, state => {
      state.loading = 'pending';
    });
    builder.addCase(login.fulfilled, (state, action) => {
      console.log('payload', action.payload);
      state.loading = 'succeeded';
      state.data = action.payload;
      state.authenticated = true;
    });
    builder.addCase(login.rejected, state => {
      state.loading = 'failed';
    });
    builder.addCase(logout.pending, state => {
      state.loading = 'pending';
    });
    builder.addCase(logout.fulfilled, state => {
      state.loading = 'idle';
      state.authenticated = false;
      state.data = {};
    });
    builder.addCase(logout.rejected, state => {
      state.loading = 'failed';
    });
    builder.addCase(register.pending, state => {
      state.loading = 'pending';
    });
    builder.addCase(register.fulfilled, (state, action) => {
      console.log('register payload', action.payload);
      state.loading = 'succeeded';
      state.data = action.payload;
      state.authenticated = true;
    });
    builder.addCase(register.rejected, state => {
      state.loading = 'failed';
    });
  },
});

export default userSlice.reducer;
