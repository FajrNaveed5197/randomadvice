import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import axios from "axios";

const App = () => {
  const [advice, setAdvice] = useState('');

  const fetchAdvice = () => {
    axios.get('https://api.adviceslip.com/advice')
      .then((response) => {
        const { advice } = response.data.slip;
        setAdvice(advice);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  useEffect(() => {
    fetchAdvice();
  }, []); // Empty dependency array means this effect runs once after the initial render

  return (
    <div className="backgroundhai">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-5 col-sm-8" style={{display:"flex", alignItems:"center"}}>
            <div className="card" style={{display:"flex", alignItems:"center", height:"50%", borderRadius:"20px"}}>
              <h1 className="heading">{advice}</h1>
              <button className="button mb-3" onClick={fetchAdvice}>
                <span>New Advice</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
