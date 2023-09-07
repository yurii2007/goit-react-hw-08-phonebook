import { useDispatch } from "react-redux"
import { logIn } from "redux/auth/operations";
import { LoginFormTemplate }  from "components/LoginFormTemplate/LoginFormTemplate";

export const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    const {email, password} = e.currentTarget;
    const user = {email: email.value, password: password.value};
    dispatch(logIn(user))
  }

  return <LoginFormTemplate isRegister={false} onSubmit={handleSubmit} />
}
