import React, {useEffect, useState} from 'react';
import axios from 'axios';



const APP_ID = "6ecad96bc440cb7b02fb1cc8115ae284"
function Home (){
    const [coords, setCoords] = useState({})
    const [weatherData, setWeatherData] = useState({})

    const getCurrentWeather = (coords) => {
        if (coords.longitude !==undefined){
        axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${coords.latitude}&lon=${coords.longitude}&appid=${APP_ID}`)
        .then((response)=>{
            setWeatherData(response.data)
            console.log(response.data)
        })
    } 
useEffect(()=>{
    navigator.geolocation.getCurrentPosition( (position)=> {
        setCoords(position.coords);
        getCurrentWeather()
        
    }, (error) =>{
        console.log("hey this is your err:", error)
    })
    
})

    return(
<div className='container'>
    <div className="content"></div>
        <div className="left">
            <h3>Fri, 27<br/>November</h3>
            <div className='currentWeatherInfo'>
                <p className='temp'>10&deg;</p>
            </div>
        </div>
        <div className='right'>sdjfk</div>
    .
</div>
    )
}
}
export default Home;