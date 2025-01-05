import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import Home from "./pages/Home/Home";
import Registration from "./pages/Registration/Registration";
import Login from "./pages/Login/Login";
import Contacts from "./pages/Contacts/Contacts";
import PrivateRoute from "./routes/PrivateRoute";
import RestrictedRoute from "./routes/RestrictedRoute";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route
          path="contacts"
          element={
            <PrivateRoute>
              <Contacts />
            </PrivateRoute>
          }
        />
      </Route>
      <Route
        path="login"
        element={
          <RestrictedRoute>
            <Login />
          </RestrictedRoute>
        }
      />
      <Route
        path="register"
        element={
          <RestrictedRoute>
            <Registration />
          </RestrictedRoute>
        }
      />
    </Routes>
  );
};

export default App;
