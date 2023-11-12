import { styled } from "styled-components";

export const FormMain = styled.form`
  margin-left: auto;
  margin-right: auto;
  width: 280px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: transparent;
  padding: 30px 30px 30px 30px;
  border-radius: 30px;
  border: 2px solid var(--accentColor);
  box-shadow: 0px 0px 40px rgba(0, 0, 0, 0.062);
  box-sizing: border-box;
`;

export const Heading = styled.label`
  font-size: 2.5em;
  color: var(--accentColor);
  font-weight: 700;
  margin: 15px 0 30px 0;
`;

export const InputContainer = styled.div`
  width: 100%;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const InputIcon = styled.svg`
  position: absolute;
  left: 10px;
`;

export const InputField = styled.input`
  width: 100%;
  height: 40px;
  background-color: transparent;
  border: none;
  border-bottom: 2px solid rgb(173, 173, 173);
  border-radius: 30px;
  margin: 10px 0;
  color: black;
  font-size: 0.8em;
  font-weight: 500;
  box-sizing: border-box;
  padding-left: 30px;

  &:focus {
    outline: none;
    border-bottom: 2px solid var(--semiAccentColor);
  }

  &::placeholder {
    color: var(--mainColor);
    font-size: 1em;
    font-weight: 500;
  }
`;

export const Button = styled.button`
  position: relative;
  width: 100%;
  border: 2px solid var(--accentColor);
  background-color: var(--accentColor);
  height: 40px;
  color: white;
  font-size: 0.8em;
  font-weight: 500;
  letter-spacing: 1px;
  border-radius: 30px;
  margin: 10px;
  cursor: pointer;
  overflow: hidden;

  &::after {
    content: "";
    position: absolute;
    background-color: rgba(255, 255, 255, 0.253);
    height: 100%;
    width: 150px;
    top: 0;
    left: -200px;
    border-bottom-right-radius: 100px;
    border-top-left-radius: 100px;
    filter: blur(10px);
    transition-duration: 0.5s;
  }

  &:hover::after {
    transform: translateX(600px);
    transition-duration: 0.5s;
  }
`;