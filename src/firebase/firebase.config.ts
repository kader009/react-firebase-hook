import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: import.meta.env.VITE_HOOK_apiKey,
  authDomain: import.meta.env.VITE_HOOK_authDomain,
  projectId: import.meta.env.VITE_HOOK_projectId,
  storageBucket: import.meta.env.VITE_HOOK_storageBucket,
  messagingSenderId: import.meta.env.VITE_HOOK_messagingSenderId,
  appId: import.meta.env.VITE_HOOK_appId,
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
