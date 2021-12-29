import { useState } from 'react';
import './App.css';

function getSessionStorageOrDefault(key, defaultValue) {
  const stored = sessionStorage.getItem(key);
  if(!stored) {
    return defaultValue;
  }
  return JSON.parse(stored);
}

function App() {

  const [termsAccepted, setTermsAccepted] = useState(
    getSessionStorageOrDefault('terms',false)
  );

  
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
