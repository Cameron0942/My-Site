//? REACT
import React from 'react';
import ReactDOM from 'react-dom/client';

//? COMPONENTS
import App from './App';
import Background from './pages/Background';
import NavBar from './pages/NavBar';
import Body from './pages/Body';
import AboutMe from './components/AboutMe';

//? STYLES
import './index.css';

import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    {/* <App /> */}
    <div style={{ width: '100vw', height: '100vh' }}>
      <Background />
      <NavBar />
      <Body />
      <AboutMe />
      
      <footer style={{ textAlign: 'center', color: 'white' , minHeight: '2rem'}}>Cameron Burns 2023 — <a href='https://github.com/Cameron0942/my-site' target='_blank'  rel='noreferrer' style={{color: '#E6C892', textDecoration: 'none'}}>Designed & Coded by Cameron0942</a></footer>
    </div>
    
    </>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
