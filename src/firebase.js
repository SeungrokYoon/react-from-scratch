import { initializeApp } from 'firebase/app';
import apiKey from '../apiKey';

const firebaseConfig = {
  apiKey: apiKey.firebase,
  authDomain: 'modern-nats-ui.firebaseapp.com',
  projectId: 'modern-nats-ui',
  storageBucket: 'modern-nats-ui.appspot.com',
  messagingSenderId: '476445953823',
  appId: '1:476445953823:web:f803360e0a4abce4f8ea2a',
  measurementId: 'G-7LLKX4349C',
};

export default initializeApp(firebaseConfig);
