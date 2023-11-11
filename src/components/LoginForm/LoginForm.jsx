import { logIn } from '../../redux/auth/operations.js';
import { useDispatch } from "react-redux";
import { Button, FormMain, Heading, InputContainer, InputField, InputIcon } from "./LoginForm.styled";

export const LoginForm = () => {
  const dispatch = useDispatch();
  
 const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    
    const usernameValue = form.elements.username.value;
    const passwordValue = form.elements.password.value;
    
    console.log('Username:', usernameValue);
    console.log('Password:', passwordValue);
    
    dispatch(
      logIn({
        username: usernameValue,
        password: passwordValue,
      })
    );

    form.reset();
  };

  return (
    <FormMain onSubmit={handleSubmit} autoComplete="off">
      <Heading>Login</Heading>
      <InputContainer>
        <InputIcon
          viewBox="0 0 16 16"
          fill="#212121"
          height="16"
          width="16"
          xmlns="http://www.w3.org/2000/svg"
          className="inputIcon"
        >
        </InputIcon>
        <InputField
          placeholder="Username"
          id="username"
          name="username"
          type="username"
        />
      </InputContainer>
      <InputContainer>
        <InputIcon
          viewBox="0 0 16 16"
          fill="#212121"
          height="16"
          width="16"
          xmlns="http://www.w3.org/2000/svg"
          className="inputIcon"
        >
        
        </InputIcon>
        <InputField
          placeholder="Password"
          id="password"
          name="password"
          type="password"
        />
      </InputContainer>
      <Button id="button" type="submit">Submit</Button>
    </FormMain>
  );
};

export default LoginForm;