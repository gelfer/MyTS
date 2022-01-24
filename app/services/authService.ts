import axios from 'axios';
import config from '../config';
import {Credential, RegisterData} from '../types/user';

export function userLogin(credentials: Credential) {
  return new Promise(async (resolve, reject) => {
    try {
      console.log('credentials', credentials);
      const response = await axios.post(`${config.apiUrl}/login`, credentials);
      resolve(response.data);
    } catch (error) {
      console.log('error', error);
      reject({err: error});
    }
  });
}

export function userRegister(data: RegisterData) {
  return new Promise(async (resolve, reject) => {
    try {
      console.log('data', data);
      let x = {
        name: 'morpheus',
        job: 'leader',
      };
      const response = await axios.post(`${config.apiUrl}/users`, x);
      resolve(response.data);
    } catch (error) {
      console.log('error', error);
      reject({err: error});
    }
  });
}
