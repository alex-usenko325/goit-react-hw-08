import { Outlet } from "react-router-dom";
import Header from "../../pages/Header/Header";

const Loyout = () => {
  return (
    <div>
      <Header />
      <Outlet />
    </div>
  );
};

export default Loyout;
