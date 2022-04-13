import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './Pages/Home';
import Goods from './Pages/Goods';
function App() {
  return (
    
    <Router>
    <div className="App">
      <Switch>
        <Route path='/' exact>
        <Home />
        </Route>
        <Route path="/goods">
          <Goods />
        </Route>
      </Switch>
    </div>
    </Router>
  );
}

export default App;
