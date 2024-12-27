import RegistrationForm from "../../components/RegistrationForm/RegistrationForm";
import { Link } from "react-router-dom";

const Registration = () => {
  return (
    <div>
      <Link to="/">
        <span>Go</span>Back
      </Link>
      <RegistrationForm />
    </div>
  );
};

export default Registration;
