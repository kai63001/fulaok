import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDFu5R-NhWnUAXB7Vgt1_G0tpkNvuODV-I",
  authDomain: "moonsblog-9a0e2.firebaseapp.com",
  projectId: "moonsblog-9a0e2",
  storageBucket: "moonsblog-9a0e2.appspot.com",
  messagingSenderId: "245106449963",
  appId: "1:245106449963:web:93d3ca825e8ac5454f146e",
  measurementId: "G-2FPW56WP7R"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default app;