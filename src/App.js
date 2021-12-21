
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



function App() {
  return (
    <Router>
      <header>
        <nav>
          <div>
            <NavLink to="/">
              <img src={LOGO} alt="logo" />
            </NavLink>
            <NavLink to="/">
              <h1>Space Travelers Hub</h1>
            </NavLink>
          </div>

          <ul>
            <li>
              
              <NavLink to="/Missions">Missions</NavLink>
            </li>
            |
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
      </Switch>
    </Router>
  );
}

export default App;
