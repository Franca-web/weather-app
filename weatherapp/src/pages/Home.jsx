import React, {useEffect, useState} from 'react';
import axios from 'axios';

import '../styles/home.css'
import weatherIcon1 from '../images/weather-icon1.png'
import weatherIcon2 from '../images/weather-icon2.png'
import weatherIcon3 from '../images/weather-icon3.png'
import weatherIcon4 from '../images/weather-icon4.png'
import weatherIcon5 from '../images/weather-icon5.png'
import weatherIcon6 from '../images/weather-icon6.png'





const APP_ID = "6ecad96bc440cb7b02fb1cc8115ae284"
function Home () {
    const [coords, setCoords] = useState({})
    const [weatherData, setWeatherData] = useState({})

    const getCurrentWeather = () => {
        if (coords.longitude !==undefined) {
        axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${coords.latitude}&lon=${coords.longitude}&appid=${APP_ID}`)
        .then((response)=> {
            setWeatherData(response.data)
            console.log(response.data)
        })
    } 
}
useEffect(()=>{
    navigator.geolocation.getCurrentPosition( (position)=> {
        setCoords(position.coords);
        getCurrentWeather()
        
    }, (error)=> {
        console.log("hey this is your err:", error) 
    })
    
}, [])

    return(
<div className="container">
    <div className="content">
        <div className="left">
            <h3>Fri, 27<br/>November</h3>
            <div className="currentWeatherInfo">
            <p className="temp">-10&deg;</p>
                        <img src={weatherIcon1} alt="Weather Icon"/>
                        {/* <p className="description">Cloudy with a little rainy drops</p> */}
                        </div>
                        <div className="weekWeatherInfo">
                        <div className="weather-info">
                            <h5>MON</h5>
                            <img src={weatherIcon2} alt="Weather Info 2" />
                            <p>12&deg;</p>
                        </div>
                        <div className="weather-info">
                            <h5>TUE</h5>
                            <img src={weatherIcon3} alt="Weather Info 3" />
                            <p>12&deg;</p>
                        </div>
                        <div className="weather-info">
                            <h5>WED</h5>
                            <img src={weatherIcon4} alt="Weather Info 4" />
                            <p>12&deg;</p>
                        </div>
                        <div className="weather-info">
                            <h5>THUR</h5>
                            <img src={weatherIcon5} alt="Weather Info 5" />
                            <p>12&deg;</p>
                        </div>
                        <div className="weather-info">
                            <h5>FRI</h5>
                            <img src={weatherIcon6} alt="Weather Info 6" />
                            <p>12&deg;</p>
                        </div>




</div>
            </div>
            <div className="right">sdfjk</div>
                
            </div>
        </div>
        
    

    )
}

export default Home;