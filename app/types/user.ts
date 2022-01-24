type SliceState = {
  loading: 'idle' | 'pending' | 'succeeded' | 'failed';
  data: {};
  authenticated: boolean;
};

export const initialUser: SliceState = {
  loading: 'idle',
  data: {},
  authenticated: false,
};

export interface Credential {
  email: string;
  password: string;
}

export interface RegisterData {
  idNumber: string;
  firstName: string;
  lastName: string;
  tel: string;
  sex: string;
  birthDate: string;
}

export interface UserData {
  id: number;
  email: string;
  first_name: string;
  last_name: string;
  avatar: string;
}
