import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  NavLink,
} from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import MyProfile from './pages/MyProfile';
import Missions from './components/missions/missions';
import LOGO from './assets/planet.png';
import Rockets from './pages/Rockets';
import fetchRockets from './actions';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchRockets());
  }, []);
  const [curActive, setCurActive] = useState('rockets');
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
            <li className="navlink">

              <NavLink onClick={() => setCurActive('missions')} style={curActive === 'missions' ? { textDecoration: 'underline' } : { textDecoration: 'none' }} to="/Missions">Missions</NavLink>
            </li>

            <li className="navlink">

              <NavLink onClick={() => setCurActive('rockets')} style={curActive === 'rockets' ? { textDecoration: 'underline' } : { textDecoration: 'none' }} to="/Rockets">Rockets</NavLink>
            </li>

            <li className="navlink">
              <NavLink onClick={() => setCurActive('profile')} style={curActive === 'profile' ? { textDecoration: 'underline' } : { textDecoration: 'none' }} to="/My Profile">My Profile</NavLink>
            </li>
          </ul>
        </nav>
        <hr />
      </header>
      <Switch>
        <Route path="/My Profile"><MyProfile /></Route>
        <Route path="/Missions"><Missions /></Route>
        <Route path="/Rockets"><Rockets /></Route>
        <Route path="/"><Rockets /></Route>
      </Switch>
    </Router>
  );
};

export default App;
