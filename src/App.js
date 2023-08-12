import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [email, setEmail] = useState('');

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const emailParam = params.get('email');

    if (emailParam) {
      setEmail(emailParam);
      const newParams = new URLSearchParams(params);
      newParams.delete('email');
      window.history.replaceState({}, '', `${window.location.pathname}?${newParams}`);
    }
  }, []);

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  return (
    <div className="flex-container">
      <div className="left-part">
        <h1 className="text-4xl">My Part</h1>
      </div>
      <div className="right-part">
        <h1 className="text-4xl">Right part</h1>
        <input type="email" value={email} onChange={handleEmailChange} />
      </div>
    </div>
  );
}

export default App;
