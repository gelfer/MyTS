const env = process.env.NODE_ENV || 'defaultConfig';
let baseUrl = 'https://reqres.in';
let webClientId = 'xxx';

let config = {
  apiUrl: `${baseUrl}/api`,
  webClientId,
};

if (env === 'production') {
  baseUrl = 'https://reqres.in';
  config = {
    apiUrl: `${baseUrl}/api`,
    webClientId,
  };
}

export default {
  ...config,
};
