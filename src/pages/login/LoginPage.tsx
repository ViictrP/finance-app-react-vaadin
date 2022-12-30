import { Button, Icon, InputEmail, InputPassword } from '../../components';
import { useCallback, useState } from 'react';

interface FormData {
  username: string;
  password: string;
}

const LoginPage = () => {
  const [data, setData] = useState<Partial<FormData>>();

  const handleSubmit = () => {
    console.log(data);
  };

  const onDataChanged = useCallback((value: string, key: string) => {
    setData(oldValue => ({
      ...oldValue,
      [key]: value
    }));
  }, [setData]);

  return (
    <div className="app-container">
      <div className="home-container">
        <div className="card">
          <p className="mt-4 font-black text-2xl">Finance <span className="text-green-500">App</span></p>
          <div className="mt-10 px-4 flex flex-col gap-4">
            <p className="text-3xl">Bem vindo!</p>
            <p>digite seu e-mail e senha para acessar a plataforma.</p>
          </div>
          <div className="flex flex-col mt-10 text-start">
            <InputEmail
              showClear
              placeholder="usuario@email.com"
              onChange={(value) => onDataChanged(value, 'username')}
            ></InputEmail>
            <InputPassword
              showClear
              placeholder="senha"
              onChange={(value) => onDataChanged(value, 'password')}
            ></InputPassword>
            <a href="#" className="my-4 text-start text-blue-500">Esqueceu a senha?</a>
          </div>
          <Button theme="primary" onClick={handleSubmit}>
            Entrar
            <Icon icon="vaadin:arrow-right" slot="suffix"></Icon>
          </Button>
          <p className="text-start mt-4">Novo por aqui? <a href="#" className="text-blue-500">Crie sua conta!</a></p>
          <p className="mt-20 text-gray-300">Finance App v1.0.0</p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
