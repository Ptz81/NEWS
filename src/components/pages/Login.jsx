import { LoginForm } from '../LoginForm/LoginForm.jsx';
import { Helmet } from 'react-helmet';
import { TitleNews } from './pages.styled.js';


export default function Login() {
  return (
    <div>
      <Helmet>
        <TitleNews>Login</TitleNews>
      </Helmet>
      <LoginForm />
    </div>
  );
}