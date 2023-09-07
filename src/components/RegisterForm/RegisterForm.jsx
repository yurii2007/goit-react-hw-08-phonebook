import { LogFormElem } from "components/LoginForm/LoginForm.styled"
import { useDispatch } from "react-redux"
import { Link } from "react-router-dom"
import { register } from "redux/auth/operations";

export const RegisterForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const {username, email, password} = e.currentTarget;
    const user = {name: username.value, email: email.value, password: password.value};
    dispatch(register(user));
    e.target.reset()
  }
  return (
    <LogFormElem onSubmit={handleSubmit}>
  <div className="card_header">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
      <path fill="none" d="M0 0h24v24H0z"></path>
      <path fill="currentColor" d="M4 15h2v5h12V4H6v5H4V3a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-6zm6-4V8l5 4-5 4v-3H2v-2h8z"></path>
    </svg>
    <Link to='/login' className="form_heading">Log in</Link>
  </div>
  <div className="field">
    <label htmlFor="username">Username</label>
    <input name="username" type="text" placeholder="Username" id="username" />
  </div>
  <div className="field">
    <label htmlFor="email">Email</label>
    <input name="email" type="email" placeholder="Password" id="email" />
  </div>
  <div className="field">
    <label htmlFor="password">Password</label>
    <input name="password" type="password" placeholder="Password" id="password" />
  </div>
  <div>
    <button type="submit">Sign In</button>
  </div>
</LogFormElem>
  )
}
