import axios from 'axios';

const instance = axios.create({
  // THE API (cloud function) URL
  baseURL: 'http://localhost:5001/fir-60352/us-central1/api'});

  
// 'https://us-central1-aug-bc35b.cloudfunctions.net/api',

export default instance;
