import './App.scss';
import Button from './components/Button';
import InputEmail from './components/form/InputEmail';
import InputPassword from './components/form/InputPassword';
import Icon from './components/Icon';

function App() {
  return (
    <div className="App">
      <InputEmail
        showClear
        placeholder="username@email.com"
        onChange={(value) => console.log(value)}
      ></InputEmail>
      &nbsp;&nbsp;&nbsp;
      <InputPassword
        showClear
        placeholder="password"
        onChange={(value) => console.log(value)}
      ></InputPassword>
      &nbsp;&nbsp;&nbsp;
      <Button theme="primary">
        Send
        <Icon icon="vaadin:arrow-right" slot="suffix"></Icon>
      </Button>
    </div>
  );
}

export default App;
