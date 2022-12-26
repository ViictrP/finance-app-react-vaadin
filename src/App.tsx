import './App.scss';
import { Input } from './components';
import Icon from './components/Icon';
import InputEmail from './components/form/InputEmail';
import InputPassword from './components/form/InputPassword';

function App() {
  return (
    <div className="App">
      <InputEmail
        showClear
        placeholder="username@email.com"
        onChange={(value) => console.log(value)}
      ></InputEmail>
      &nbsp;&nbsp;&nbsp;
      <InputPassword></InputPassword>
    </div>
  );
}

export default App;
