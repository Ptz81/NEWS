import styled from "styled-components";

export const TaskWrapper = styled.div`
display: flex;
align-items: center;
width: inherit;
width: 100%;
`
export const InputWrapper = styled.div`
   display: flex;
    align-items: center;
    label{
        text-transform: uppercase;
        font-weight: 600;
    }
`
export const Body = styled.p`
margin-right: 30px;
width: 500px;
`

export const Title = styled.p`
    margin-left: 20px;
    font-weight: 800;
    width: 200px;
`
export const ButtonWrapper = styled.div`
    margin-left: auto;
    display: flex;    
`
export const InputComponent = styled.input`
    margin-left: 20px;
    margin-bottom: 10px;
    width: 350px;
  padding: 10px;
  border: 1px solid var(--semiAccentColor);
  font-size: 14px;
  border-radius: 10px;
  background: var(--base);
  color: var(--accentColor);
  outline: none;
  z-index:9;
  
 :focus{
      border: 1px solid var(--accentColor);
      background:transparent;
    }
  ::placeholder{
        color: var(--lightGray);
        font-size: 14px;
        padding: 14px ;
    }
    :focus::placeholder {
    color: transparent;
  }
  /* ::before {
    content: "";
    background-repeat: no-repeat;
    background-position: left center; 
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    left: 15px; 
    width: 16px;
    height: 16px;
    z-index: 10; 
  } */
`;
    

