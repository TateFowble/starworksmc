import logo from './logo.svg';
import './App.css';

import {
  HashRouter as Router,
  Switch,
  Route
} from 'react-router-dom';


import Homepage from './pages/Homepage';

function App() {
  return (
   <div>
     <Router>
      <Switch>
        <Route path='/' component={Homepage} />
        <Route path='/home' component={Homepage} />
        <Route path='/404' component={Homepage} />
        <Route component={Homepage} />
      </Switch>
      </Router>
   </div>
  );
}

export default App;
