import { Routes, Route } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import Layout from "./components/Layout/Layout";
import Home from "./pages/Home/Home";
import Registration from "./pages/Registration/Registration";
import Login from "./pages/Login/Login";
import Contacts from "./pages/Contacts/Contacts";
import PrivateRoute from "./routes/PrivateRoute";
import RestrictedRoute from "./routes/RestrictedRoute";
import { refreshUser } from "./redux/auth/operations";
import { PuffLoader } from "react-spinners";

const App = () => {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const isRefreshing = useSelector((state) => state.auth.isRefreshing);

  useEffect(() => {
    if (isLoggedIn && !isRefreshing) {
      dispatch(refreshUser());
    }
  }, [dispatch, isLoggedIn, isRefreshing]);

  if (isRefreshing) {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
        }}
      >
        <PuffLoader color="#36d7b7" size={60} />
      </div>
    );
  }

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
