
import './App.css';
import MyProfile from './pages/MyProfile';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  NavLink,
} from 'react-router-dom';
import Missions from './components/missions/missions';
import LOGO from './assets/planet.png';
import Rockets from './pages/Rockets';



function App() {
  return (
    <Router>
      <header>
        <nav>
          <div className="navleft">
            <NavLink to="/">
              <img className="logo" src={LOGO} alt="logo" />
            </NavLink>
            <NavLink to="/">
              <h1>Space Travelers Hub</h1>
            </NavLink>
          </div>

          <ul className="navright">
            <li>
              
              <NavLink to="/Missions">Missions</NavLink>
            </li>
            <li>
              
              <NavLink to="/Rockets">Rockets</NavLink>
            </li>
            
            <li>
              <NavLink to="/My Profile">My Profile</NavLink>
            </li>
          </ul>
        </nav>
        <hr />
      </header>
      <Switch>
        <Route path="/My Profile"><MyProfile /></Route>
        <Route path="/Missions"><Missions /></Route>
        <Route path="/Rockets"><Rockets /></Route>
      </Switch>
    </Router>
  );
}

export default App;
