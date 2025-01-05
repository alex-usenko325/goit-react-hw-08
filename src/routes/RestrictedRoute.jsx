import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { PuffLoader } from "react-spinners";

const RestrictedRoute = ({ children }) => {
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const isRefreshing = useSelector((state) => state.auth.isRefreshing);

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

  return !isLoggedIn ? children : <Navigate to="/contacts" />;
};

export default RestrictedRoute;
