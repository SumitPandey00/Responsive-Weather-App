import React,{useState} from 'react';
import './App.css';
import axios from 'axios';
import Nav from "./components/Nav.js"

function App() {

  const [data,setData] = useState({})
  const [city,setCity] = useState('')


  function searchCity(event) {
    event.preventDefault();
    const url = `http://api.weatherapi.com/v1/current.json?key=e893692528f845dfad844704220412&q=${city}&aqi=yes`;
    axios.get(url).then((response) => {
        setData(response.data)
        console.log(response.data)
    })
      setCity('');
  }


  return (
    <div className='app'>
      <Nav />
          <div className="Container">
            <form onSubmit={searchCity} className="form">
            <input
            value={city}
            onChange={event => setCity(event.target.value)}
            placeholder='Enter City'
            type="text"
            />
            </form>
          <div  className='top3'>
            <div> 
            <div  className="Temprature">{data.current.temp_c}°C</div>
            <div  className="Weather">{data.current.condition.text}</div>
            </div>
            <div  className="Location">{data.location.name}</div>
            </div>
            <div className='center-stats'>
            <div className='stats'>
              <div className='feelslike'>
                <h3>{data.current.feelslike_c}</h3>
                <p>feelslike</p>
              </div>
              <div  className="Humidity">
              <h3>{data.current.humidity}</h3>
              <p>Humidity</p>
            </div>
            <div  className="Wind">
            <h3>{data.current.wind_kph}</h3>
            <p>wind</p>

            </div>
            </div>
            </div>            
            
          


        </div>
    </div>
  );
}

export default App;
