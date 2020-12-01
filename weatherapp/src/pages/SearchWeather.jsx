import React, {useState} from 'react';

const APP_URL = "6ecad96bc440cb7b02fb1cc8115ae284"

function SearchWeather(){
    const [searchWeather, setSearchWeather] = useState("") 
    const search = (e) => {
        
        const APP_URL = `https://api.openweathermap.org/data/2.5/weather?q=${searchWeather}&appid=${APP_URL}`
        e.preventDefault()
        console.log(searchWeather)
    }
    return(
        <div className="container">
            <div className="content">
                <div className="left">
                    <form>
                        <input value ={searchWeather} onChange={(e)=>setSearchWeather(e.target.value)} placeholder="enter location to set" type ="text"/>
<button type ="submit">Search</button>
                        
                    </form>
                </div>
            </div>
        <h1>
            hey search weather
        </h1>

        </div>

    )
}
export default SearchWeather;