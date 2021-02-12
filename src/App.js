  // CSS imports 
import './App.css';
  // Library imports
import {
  HashRouter as Router,
  // BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';

  // Page imports
import HomePage from './pages/HomePage';
import ErrorPage from './pages/ErrorPage';

function App() {
  return (
    <Router>
   <div>
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/404' component={ErrorPage} />
        <Route component={ErrorPage} />
      </Switch>
   </div>
    </Router>
  );
}

export default App;
