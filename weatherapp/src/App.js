import {Switch,Route} from 'react-router-dom'
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import Home from './pages/Home';
import SearchWeather from './pages/SearchWeather';
import './styles/variables.css';
import React, {useState} from 'react';
import Sidebar from './components/Sidebar';



import './App.css';

export const AppContext = React.createContext()


function App() {

  const [isLoading, setIsLoading] = useState(false);


  return (
<AppContext.Provider value={{isLoading, setIsLoading}}>

    <div className="App">
      <Switch>
        <Route path={"/"} exact={true} component={Home} />
        <Route path={"/login"} exact={true} component={Login} />
        <Route path={"/signup"} exact={true} component={SignUp} />
        <Route path={"/search"} exact={true} component={SearchWeather} />
      </Switch>
      
    </div>
     </AppContext.Provider>
  );
}

export default App;
