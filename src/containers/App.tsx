import { Button } from '@material-ui/core';
import Test from '../components/Test';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Index from '../components/page/login';
function App() {
  return (
    <Router>
      <div className="App">
        <Route exact path="/login" component={Index} />
      </div>
    </Router>
  );
}

export default App;
