import React, { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [email, setEmail] = useState('');

  useEffect(() => {
    // Function to get URL parameter value by name
    const getParameterValue = (name) => {
      const params = new URLSearchParams(window.location.search);
      return params.get(name);
    };

    // Get the 'email' parameter from the URL
    const emailFromUrl = getParameterValue('email');

    // Set the email state if the parameter is present
    if (emailFromUrl) {
      setEmail(emailFromUrl);

      // Remove the 'email' parameter from the URL
      const urlWithoutEmail = window.location.href.replace(`email=${emailFromUrl}`, '');
      window.history.replaceState({}, document.title, urlWithoutEmail);
    }
  }, []);

  return (
    <div className="flex-container">
      <div className="left-part">
        <h1 className="text-4xl">Left Part</h1>
      </div>
      <div className="right-part">
        <h1 className="text-4xl">Right part</h1>
        <input type="email" value={email} readOnly />
      </div>
    </div>
  );
}

export default App;
