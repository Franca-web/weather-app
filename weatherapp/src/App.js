import {Switch,Route, BrowserRouter as Router} from 'react-router-dom'
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import Home from './pages/Home';
import SearchWeather from './pages/SearchWeather';
import './styles/variables.css';
import React from 'react';
//import Sidebar from './components/Sidebar';
import Navbar from './components/Navbar';




function App() {

 


  return (


    <div className="App">
      <Router>
        <Navbar/>
      <Switch>
      
        <Route path={"/"} exact={true} component={Home} />
        <Route path={"/login"} exact={true} component={Login} />
        <Route path={"/signup"} exact={true} component={SignUp} />
        <Route path={"/search"} exact={true} component={SearchWeather} />
      </Switch>
      </Router>
      
    </div>

  );
}

export default App;
