import React from 'react';
import { Link } from 'react-router-dom';



function Home() {
  return (
    <>
    <h1>Hi this is Home page</h1>
      <ul className="nav-links">
        <nav>
          <Link to="/">Home</Link>
        </nav>
        <nav>
          <Link to="/about">About Me</Link> 
        </nav>
        <nav>
          <Link to="/qualification">Qualification</Link> 
        </nav>
      </ul>
     
       
      
    </>
  );
}

export default Home;
