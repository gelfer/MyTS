type SliceState = {
  loading: 'idle' | 'pending' | 'succeeded' | 'failed';
};

export const initialAppointment: SliceState = {
  loading: 'idle',
};

export interface AddAppointment {
  id: number; // when use real db, no need to send this
  email: string;
  first_name: string;
  last_name: string;
  avatar: string;
}

export interface AppointmentData {
  id: number;
  email: string;
  first_name: string;
  last_name: string;
  avatar: string;
}
