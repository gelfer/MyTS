import axios from 'axios';
import {AddAppointment} from '../types/appointments';

export function getAppointments(userId: number) {
  return new Promise(async (resolve, reject) => {
    try {
      // console.log('userId', userId);
      const response = await axios.get('https://reqres.in/api/users');
      resolve(response.data.data);
    } catch (error) {
      console.log('error', error);
      reject({err: error});
    }
  });
}

export function sendAppointment(data: AddAppointment) {
  return new Promise(async (resolve, reject) => {
    try {
      const response = await axios.post('https://reqres.in/api/users', data);
      // resolve(response.status);
      resolve(response);
    } catch (error) {
      console.log('error', error);
      reject({err: error});
    }
  });
}
