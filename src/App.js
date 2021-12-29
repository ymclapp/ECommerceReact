import { useState, useEffect } from 'react';
import './App.css';
import { useSessionStorage } from './hooks/useSessionStorage';

//moved to useSessionStorage.js
//function getSessionStorageOrDefault(key, defaultValue) {
 // const stored = sessionStorage.getItem(key);
//  if(!stored) {
 //   return defaultValue;
 // }
 // return JSON.parse(stored);
//}

function App() {

  const [termsAccepted, setTermsAccepted] = useState(
    useSessionStorage('terms',false)
  );

//moved to useSessionStorage.js
 // useEffect(() => {
 //   sessionStorage.setItem('terms', JSON.stringify(termsAccepted));
 // }, [termsAccepted]);


  if (!termsAccepted) {
    return (
      <>
      <h1>Terms of Service</h1>
      <p>These are the terms for using the application.</p>
      <button
      onClick={() => {
        setTermsAccepted(true);
      }}
      >
        I accept
      </button>
      </>
    );
  }
  return (
    <div>This is the application</div>
  );
}

export default App;
