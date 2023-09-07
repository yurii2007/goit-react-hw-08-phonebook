import { LoginFormTemplate } from "components/LoginFormTemplate/LoginFormTemplate";
import { useDispatch } from "react-redux"
import { register } from "redux/auth/operations";

export const RegisterForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    const {username, email, password} = e.currentTarget;
    const user = {name: username.value, email: email.value, password: password.value};
    dispatch(register(user));
  }
  return <LoginFormTemplate isRegister={true} onSubmit={handleSubmit} />
}
