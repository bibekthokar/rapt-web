import Test from '../components/Test';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import LoginIndex from '../components/page/login';
import ProjectDashboard from '../components/page/dashboard/project';
import TowerIndex from '../components/page/dashboard/project/tower/TowerIndex';
function App() {
  return (
    <Router>
      <div className="App">
        <Route exact path="/project" component={ProjectDashboard} />
        <Route exact path="/login" component={LoginIndex} />
        <Route exact path="/project/tower" component={TowerIndex} />
      </div>
    </Router>
  );
}

export default App;
