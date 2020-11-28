import {Switch,Route} from 'react-router-dom'
import Login from './pages/Login'
import SignUp from './pages/SignUp'
import Home from './pages/Home'





import './App.css';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path={"/"} exact={true} component={Home} />
        <Route path={"/login"} exact={true} component={Login} />
        <Route path={"/signup"} exact={true} component={SignUp} />
      </Switch>
      
    </div>
  );
}

export default App;
