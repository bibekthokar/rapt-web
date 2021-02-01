import Test from '../components/Test';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import LoginIndex from '../components/page/login';
import ProjectDashboard from '../components/page/dashboard/project';
function App() {
  return (
    <Router>
      <div className="App">
        <Route exact path="/project" component={ProjectDashboard} />
        <Route exact path="/login" component={LoginIndex} />
      </div>
    </Router>
  );
}

export default App;
