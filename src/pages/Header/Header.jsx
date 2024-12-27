import { NavLink } from "react-router-dom";
import { FiLogIn } from "react-icons/fi"; // Імпортуємо іконку
import s from "./Header.module.css";

const Header = () => {
  return (
    <header className={s.header}>
      <ul className={s.nav}>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/contacts">Contacts</NavLink>
      </ul>
      <NavLink to="/login" className={s.iconLink}>
        <FiLogIn size={24} /> {/* Додаємо іконку */}
      </NavLink>
    </header>
  );
};

export default Header;
