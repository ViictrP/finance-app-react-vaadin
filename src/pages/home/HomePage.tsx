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
            <p className="my-4">Esqueceu a senha?</p>
          </div>
          <Button theme="primary">
            Send
            <Icon icon="vaadin:arrow-right" slot="suffix"></Icon>
          </Button>
          <p className="text-start mt-4">Novo por aqui? Crie sua conta!</p>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
