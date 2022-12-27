import { Button, Icon, InputEmail, InputPassword } from '../../components';
import './style.scss';

const HomePage = () => {
  return (
    <div className="app-container">
      <div className="home-container">
        <div className="card">
          <div className="mt-10 px-4 flex flex-col gap-4">
            <p className="text-3xl">Bem vindo de volta!</p>
            <p>digite seu e-mail e senha para acessar a plataforma.</p>
          </div>
          <div className="flex flex-col mt-10 text-start">
            <InputEmail
              showClear
              placeholder="username@email.com"
              onChange={(value) => console.log(value)}
            ></InputEmail>
            <InputPassword
              showClear
              placeholder="password"
              onChange={(value) => console.log(value)}
            ></InputPassword>
            <a href="#" className="my-4 text-start text-blue-500">Esqueceu a senha?</a>
          </div>
          <Button theme="primary">
            Send
            <Icon icon="vaadin:arrow-right" slot="suffix"></Icon>
          </Button>
          <p className="text-start mt-4">Novo por aqui? <a href="#" className="text-blue-500">Crie sua conta!</a></p>
        <p className="mt-20 text-gray-300">Finance App v1.0.0</p>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
