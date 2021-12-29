import { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {

  const [termsAccepted, setTermsAccepted] = useState(false);
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
