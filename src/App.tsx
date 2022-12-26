import './App.scss';
import { Button, Icon, InputEmail, InputPassword } from './components';

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
