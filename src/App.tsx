import './App.scss';
import { Input } from './components';

function App() {
  return (
    <div className="App">
      <Input label="Test" onChange={(value) => console.log(value)} />
    </div>
  );
}

export default App;
