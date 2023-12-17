import React, { useState, useEffect } from 'react';
import logo from '../logo.svg';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

function About() {
    // State variable to track whether the delay is complete
  const [delayComplete, setDelayComplete] = useState(false);

  // Simulate a 5-second delay before showing content
  useEffect(() => {
    const delayTimer = setTimeout(() => {
      setDelayComplete(true);
    }, 4000);

    // Clean up the timer if the component unmounts
    return () => clearTimeout(delayTimer);
  }, []);

  // Render loading skeleton during the delay
  if (!delayComplete) {
    return (
      <header className="App-header">
        <Skeleton height={300} width={300} circle={true} />
        <Skeleton height={50} width={300} />
        <Skeleton height={150} width={1250} />
        <Skeleton height={50} width={300} />
        <Skeleton height={350} width={1250} />
        <a
            className="App-link"
            href="home"
            target="_self"
            rel="noopener noreferrer"
            >
            Go to Home page
            </a>
      </header>
    );  
  }

    return (
        <header className="App-header">        
            <img src={logo} className="App-logo" alt="logo" />
            <h1>About Us</h1>

            <h4>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent rutrum dignissim nunc, ut feugiat turpis ullamcorper eget. Integer rutrum gravida pretium. Nam hendrerit magna quis aliquet varius. Proin aliquet malesuada odio, vel gravida nibh pellentesque nec. Vestibulum eu sem pulvinar, ultrices tellus in, fringilla felis. Ut egestas nulla et dolor facilisis pretium.</h4>
            <br/><br/>
            <h2>Who we are</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent rutrum dignissim nunc, ut feugiat turpis ullamcorper eget. Integer rutrum gravida pretium. Nam hendrerit magna quis aliquet varius. Proin aliquet malesuada odio, vel gravida nibh pellentesque nec. Vestibulum eu sem pulvinar, ultrices tellus in, fringilla felis. Ut egestas nulla et dolor facilisis pretium. Nullam vel diam imperdiet, fringilla nisl at, vestibulum turpis. Vivamus ut imperdiet sapien. Sed nec elementum mi, eget rhoncus eros. Sed semper dolor et eleifend aliquam. Donec urna lacus, convallis vitae libero vel, mollis vulputate est. Nulla ac rutrum purus.</p>
            <br/><br/>
            <a
            className="App-link"
            href="home"
            target="_self"
            rel="noopener noreferrer"
            >
            Go to Home page
            </a>
            <br/><br/>
        </header>
    );
}

export default About;