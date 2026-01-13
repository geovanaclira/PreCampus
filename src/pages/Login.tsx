import LoginHeader from "../components_temp/layouts/Login/LoginHeader";
import { LoginForm } from "../components_temp/layouts/Login/LoginForm";
import AuthLayout from "../components_temp/layouts/Auth/AuthLayout";

function Login() {
  return (
    <AuthLayout>
      <LoginHeader />
      <LoginForm />
    </AuthLayout>
  );
}

export default Login;
