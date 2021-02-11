import logo from './logo.svg';
import './App.css';

import {
  HashRouter as Router,
  Switch,
  Route
} from 'react-router-dom';


import HomePage from './pages/HomePage';
import ErrorPage from './pages/ErrorPage';

function App() {
  return (
   <div>
    <Router>
      <Switch>
        <Route path='/' component={HomePage} />
        <Route path='/home' component={HomePage} />
        <Route path='/404' component={ErrorPage} />
        <Route component={ErrorPage} />
      </Switch>
    </Router>
   </div>
  );
}

export default App;
