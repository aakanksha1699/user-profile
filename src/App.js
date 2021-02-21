import './App.css';
import React,{Component} from 'react';

class App extends Component{
  render(){
    return(
      <div className="container">
        <svg id="back" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M16 7H3.83L9.42 1.41L8 0L0 8L8 16L9.41 14.59L3.83 9H16V7Z" fill="#07A6F0"/>
        </svg>

        <svg id="close" width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M14 1.41L12.59 0L7 5.59L1.41 0L0 1.41L5.59 7L0 12.59L1.41 14L7 8.41L12.59 14L14 12.59L8.41 7L14 1.41Z" fill="white"/>
        </svg>

        <div className="profile">User Profile</div>
        <div className="pers">Provide user infomation so, we personalised account for you. </div>
        
        <div className="info">
        <div className="name"><input type="text" placeholder="Enter your full name"></input></div>
        <svg id="line1" width="360" height="1" viewBox="0 0 360 1" fill="none" xmlns="http://www.w3.org/2000/svg">
        <line x1="-4.37114e-08" y1="0.500061" x2="360" y2="0.50003" stroke="#07A6F0"/>
        </svg>

        <div className="dob"><input type="text" placeholder="Date of birth"></input></div>
        <svg id="line2" width="360" height="1" viewBox="0 0 360 1" fill="none" xmlns="http://www.w3.org/2000/svg">
        <line x1="-4.37114e-08" y1="0.500061" x2="360" y2="0.50003" stroke="#9798C2"/>
        </svg>

        <div className="gender">Gender</div>
          <input type="radio" id="male" value="Male"/>
          <input type="radio" id="female" value="Female"/>
       
       </div> 
       <button type="submit" id="cont">Continue</button>
      </div>
    );
  }
}

export default App;