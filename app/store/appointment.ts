import {
  createAsyncThunk,
  createEntityAdapter,
  createSlice,
} from '@reduxjs/toolkit';
import {RootState} from '.';
import {getAppointments, sendAppointment} from '../services/appointmentService';
import {
  AddAppointment,
  AppointmentData,
  initialAppointment,
} from '../types/appointments';

export const fetchAppointments = createAsyncThunk(
  'appointments/fetchAppointments',
  async (userId: number) => {
    const response = await getAppointments(userId);
    return response as AppointmentData[];
  },
);

export const addNewAppointment = createAsyncThunk(
  'appointments/addNewAppointment',
  async (data: AddAppointment) => {
    // const response = await sendAppointment(data);
    const response = data;
    return response;
  },
);

// 1. if IDs are stored in a field other than id
// 2. if you want to sort IDs in a different order
// If not provided, the state.ids array will not be sorted, and no guarantees are made about the ordering.

// createEntityAdapter<AppointmentData>({
//  selectId: (appointment) => appointment.id
//  sortComparer: (a,b) => a.title.localeCompare(b.title)
// })
export const appointmentsAdapter = createEntityAdapter<AppointmentData>({
  sortComparer: (a, b) => a.id - b.id,
});

const appointmentsSlice = createSlice({
  name: 'appointments',
  initialState: appointmentsAdapter.getInitialState(initialAppointment),
  reducers: {
    // addNewAppointment: appointmentsAdapter.addOne,
  },
  extraReducers: builder => {
    builder.addCase(fetchAppointments.pending, state => {
      state.loading = 'pending';
    });
    builder.addCase(fetchAppointments.fulfilled, (state, action) => {
      // console.log('Appointments payload', action.payload);
      state.loading = 'succeeded';
      appointmentsAdapter.setAll(state, action.payload);
    });
    builder.addCase(fetchAppointments.rejected, state => {
      state.loading = 'failed';
    });
    builder.addCase(addNewAppointment.pending, state => {
      state.loading = 'pending';
    });
    builder.addCase(addNewAppointment.fulfilled, (state, action) => {
      state.loading = 'succeeded';
      appointmentsAdapter.addOne(state, action.payload);
    });
    builder.addCase(addNewAppointment.rejected, state => {
      state.loading = 'failed';
    });
  },
});

// export const {addNewAppointment} = appointmentsSlice.actions;

export const {
  selectById: selectAppointmentById,
  selectIds: selectAppointmentIds,
  selectEntities: selectAppointmentEntities,
  selectAll: selectAllAppointments,
  selectTotal: selectTotalAppointments,
} = appointmentsAdapter.getSelectors<RootState>(state => state.appointments);

export default appointmentsSlice.reducer;
