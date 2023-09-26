import React, { useState, useEffect } from 'react';
import logo from '../logo.svg';
import { useLocation } from 'react-router-dom';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

function Home() {
  const { state } = useLocation();
  const formData = state.formData;
  const { email, firstname } = formData;

  // State variable to track whether the delay is complete
  const [delayComplete, setDelayComplete] = useState(false);

  // Simulate a 5-second delay before showing content
  useEffect(() => {
    const delayTimer = setTimeout(() => {
      setDelayComplete(true);
    }, 5000);

    // Clean up the timer if the component unmounts
    return () => clearTimeout(delayTimer);
  }, []);

  // Render loading skeleton during the delay
  if (!delayComplete) {
    return (
      <header className="App-header">
        <Skeleton height={300} width={300} circle={true} />
        <Skeleton height={30} width={500} />
        <Skeleton height={30} width={300} />
        <Skeleton height={30} width={300} />
      </header>
    );
  }

  // After the delay, display the content
  return (
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <h1>Welcome to the Home Page {firstname ? firstname : email}</h1>
      <p>This is the <code>Home</code> page</p>
      <navigationbar />
      <a
        className="App-link"
        href="about"
        target="_self"
        rel="noopener noreferrer"
      >
        Go to About Page
      </a>
    </header>
  );
}

export default Home;
