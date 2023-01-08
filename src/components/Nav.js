import React from 'react';
import "./Nav.css";

export default function Nav() {
  const date = new Date();
  
  const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  const day = days[date.getDay()] 
  const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  const month = months[date.getMonth()]
    return(
        <div>
          <div className="nav">{ `${day} , ${date.getDate()}th ${month}` }</div>  
        </div>    
    )
}

