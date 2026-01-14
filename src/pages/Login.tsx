import LoginHeader from "../components/layouts/Login/LoginHeader";
import { LoginForm } from "../components/layouts/Login/LoginForm";
import AuthLayout from "../components/layouts/Auth/AuthLayout";

function Login() {
  return (
    <AuthLayout>
      <LoginHeader />
      <LoginForm />
    </AuthLayout>
  );
}

export default Login;
