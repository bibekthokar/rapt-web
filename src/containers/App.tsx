import Test from '../components/Test';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import LoginIndex from '../components/page/login';
import ProjectDashboard from '../components/page/dashboard/project';
import TowerIndex from '../components/page/dashboard/project/tower/TowerIndex';
import SubTowerIndex from '../components/page/dashboard/project/tower/SubTowerIndex';
function App() {
  return (
    <Router>
      <div className="App">
        <Route exact path="/project" component={ProjectDashboard} />
        <Route exact path="/login" component={LoginIndex} />
        <Route exact path="/project/tower" component={TowerIndex} />
        <Route exact path="/project/tower/measurements" component={SubTowerIndex} />
      </div>
    </Router>
  );
}

export default App;
