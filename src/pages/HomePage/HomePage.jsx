import { Link } from "react-router-dom";
import s from "./HomePage.module.css";

const HomePage = () => {
  return (
    <div className={s.container}>
      <h1 className={s.heading}>Welcome to the Contact Book!</h1>
      <p className={s.paragraph}>
        This app will help you store and organize your contacts.
      </p>
      <p className={s.paragraph}>
        To get started, please register or log in to access your contacts.
      </p>
      <div className={s.buttonContainer}>
        <Link to="/register" className={s.button}>
          Register
        </Link>
        <Link to="/login" className={s.button}>
          Log In
        </Link>
      </div>
    </div>
  );
};

export default HomePage;
