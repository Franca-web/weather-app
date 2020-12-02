import axios from 'axios';
import React, {useState} from 'react';

const APP_ID = "6ecad96bc440cb7b02fb1cc8115ae284"

function SearchWeather(){
    const [searchQuery, setSearchQuery] = useState("") 
    const search = (e) => {
        e.preventDefault()

        axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${searchQuery}&appid=${APP_ID}`)
        .then((search)=> {
            setSearchQuery(search.query)
       
        console.log(search.query)
    })
}
    return(
        <div className="container">
            <div className="content">
                <div className="left">
                    <form onSubmit ={search}>
                        <input value ={searchQuery} onChange={(e)=>setSearchQuery(e.target.value)} placeholder="enter location to search" type ="text"/>
                        <button type ="submit">Search</button>
                        
                    </form>
                </div>
            <div className="right">
        </div>
            
        

        </div>
        </div>

    )
}

export default SearchWeather;