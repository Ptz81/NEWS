import { useDispatch } from "react-redux";
import { useAuth } from "../../hooks/useAuth";
import { Button, Username, Wrapper } from "./UserMenu.styled";
import { logOut } from "../../redux/auth/operations";

export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();


  return (
    <Wrapper>
      <Username>Welcome! {user.name}</Username>
      <Button type="button" onClick={() => dispatch(logOut())}>
        logout
      </Button>
    </Wrapper>
  );
};