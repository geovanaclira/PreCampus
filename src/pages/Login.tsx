import LoginLayout from "../components/layouts/Login/LoginLayout";
import LoginHeader from "../components/layouts/Login/LoginHeader";
import  {LoginForm}  from "../components/layouts/Login/LoginForm";

function Login() {
  return (
    <LoginLayout>
      <LoginHeader />
      <LoginForm />
    </LoginLayout>
  );
}
export default Login;