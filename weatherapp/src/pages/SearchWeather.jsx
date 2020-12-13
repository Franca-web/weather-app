import React, {useState} from 'react';
import axios from 'axios';

function SearchWeather(){

        const APP_ID = "6ecad96bc440cb7b02fb1cc8115ae284";
        const [searchQuery, setSearchQuery] = useState("") ;
        const [weather, setWeather] = useState(null) ;

        const handleInputChange =(e)=>{
            setSearchQuery(e.target.value)
        }

        const getWeather =(e)=>{
            e.preventDefault()
            if(searchQuery){
                axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${searchQuery}&appid=${APP_ID}`)

              .then((res)=> {
                    // setSearchQuery(res.query)
                    setWeather(res.data)
            
                console.log(res.data)
            })
            }
        }
    
    // const search = (e) => {
    //     
    // if(searchQuery)




    return(
        <div className="container">
            <div className="content">
                <div className="left">
                    <form >
                        <input placeholder="enter location to search" onChange={handleInputChange} type ="text"/>
                        <button onClick={getWeather}>Search</button>
                        {
                weather &&(
                    <div>
                             <img src={weather.weather ? `http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`  : ""} alt="weathericon"/>
                             <h3> City {weather.name}</h3>
                             <h3> Country {weather.sys.country}  </h3>
                            <h3> Humidity {weather.main.humidity}</h3>
                            <h3> Presssure {weather.main.pressure}Pa</h3>
                            <h3> Weather Description {weather.weather[0].description}</h3>
                            
                    </div>
                )
            }
                    </form>
                </div>
            <div className="right">
       
        </div>
            
        

        </div> 
          
        </div>

    )
    
    }
export default SearchWeather;