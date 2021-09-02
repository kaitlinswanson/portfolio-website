import React from "react";
import "./App.css";
import Main from './Main';

import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBIW7NjKMQVQ3dy1sB6vxCvnm4gF1vPa5c",
  authDomain: "portfolio-6f5ea.firebaseapp.com",
  projectId: "portfolio-6f5ea",
  storageBucket: "portfolio-6f5ea.appspot.com",
  messagingSenderId: "832525904884",
  appId: "1:832525904884:web:0cd71aa1506785171727a1",
  measurementId: "G-26KEMGRLCB",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);



//try usiong links to direct to created pages for each individual project so they can be used as resume links
function App() {


 
  return <div className="App">
    
    <Main 
    />
      
      </div>;
}

export default App;
