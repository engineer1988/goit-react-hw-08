import DocumentTitle from "../../components/DocumentTitle";
import { LoginForm } from "../../components/login_form/LoginForm";

export default function LoginPage() {
  return (
    <div>
      <DocumentTitle>Login</DocumentTitle>
      <LoginForm />
    </div>
  );
}
