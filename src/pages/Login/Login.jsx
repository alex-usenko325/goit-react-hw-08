import LoginForm from "../../components/LoginForm/LoginForm";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div>
      <Link to="/">
        <span>Go</span>Back
      </Link>
      <LoginForm />
    </div>
  );
};

export default Login;
