import { useState, lazy, Suspense } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Login from './Login';

const Dashboard = lazy(() => import('./Dashboard'));

// import LoginIndex from '../components/page/login';
// import ProjectDashboard from '../components/page/dashboard/project';
// import TowerIndex from '../components/page/dashboard/project/tower/TowerIndex';
function App() {
  const [isLogin, setIsLogin] = useState(false);

  return (
    <Router>
      <div className="App">
        {isLogin ? (
          <Suspense fallback={null}>
            <Route exact path="/" component={Dashboard} />
          </Suspense>
        ) : (
          <Route
            exact
            path={['/', '/login']}
            render={() => <Login toggleLogin={setIsLogin} />}
          />
        )}
        {/* <Route exact path="/project" component={ProjectDashboard} />
        <Route exact path="/login" component={LoginIndex} />
        <Route exact path="/project/tower" component={TowerIndex} /> */}
      </div>
    </Router>
  );
}

export default App;
