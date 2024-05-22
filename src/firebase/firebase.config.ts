import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyDWY-56yY3AoapHho--7sg4m_PiOvN4t3Y',
  authDomain: 'hookreact-fc32a.firebaseapp.com',
  projectId: 'hookreact-fc32a',
  storageBucket: 'hookreact-fc32a.appspot.com',
  messagingSenderId: '742827510392',
  appId: '1:742827510392:web:cb207f18cb0761cc077b8d',
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
