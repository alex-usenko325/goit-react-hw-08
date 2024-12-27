import { Routes, Route } from "react-router-dom";
import Loyout from "./components/Loyout/Loyout";
import Home from "./pages/Home/Home";
import Registration from "./pages/Registration/Registration";
import Login from "./pages/Login/Login";
import Contacts from "./pages/Contacts/Contacts";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Loyout />}>
        <Route index element={<Home />}></Route>
        <Route path="contacts" element={<Contacts />}></Route>
      </Route>
      <Route path="login" element={<Login />}></Route>
      <Route path="register" element={<Registration />}></Route>
    </Routes>
  );
};

export default App;
