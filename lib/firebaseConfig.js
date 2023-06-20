const config = {  
  
  apiKey: "AIzaSyBjyJNgLCJTTm4-9fivd3e8qz_1mj0lXbQ",
  authDomain: "personal-web-89a88.firebaseapp.com",
  projectId: "personal-web-89a88",
  storageBucket: "personal-web-89a88.appspot.com",
  messagingSenderId: "3617033440",
  appId: "1:3617033440:web:1eacf92e8e1be5f5855485",
  measurementId: "G-8Y2ZH38JP3"
  
  
};
  
export function getFirebaseConfig() {
  if (!config || !config.apiKey) {
    throw new Error('No Firebase configuration object provided.');
  } else {
    return config;
  }
}