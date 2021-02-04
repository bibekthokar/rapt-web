import { useState, lazy, Suspense } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Login from './Login';

const Dashboard = lazy(() => import('./Dashboard'));

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
      </div>
    </Router>
  );
}

export default App;
