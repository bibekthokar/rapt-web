import { Button } from '@material-ui/core';
import Test from '../components/Test';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Test />
        <Button color="secondary" variant="contained">
          Hello World
        </Button>
      </header>
    </div>
  );
}

export default App;
