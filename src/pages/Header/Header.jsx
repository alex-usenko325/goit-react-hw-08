import { NavLink } from "react-router-dom";
import { FiLogIn, FiLogOut } from "react-icons/fi";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../redux/auth/operations";
import { AppBar, Toolbar, Box, Button } from "@mui/material";

const Header = () => {
  const dispatch = useDispatch();
  const isAuthenticated = useSelector((state) => state.auth.isLoggedIn);

  const handleLogout = () => {
    dispatch(logout());
  };

  const handleLoginClick = () => {
    if (!isAuthenticated) {
      window.location.href = "/login";
    }
  };

  return (
    <AppBar position="static" color="primary">
      <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
        <Box sx={{ display: "flex", gap: 2 }}>
          <Button
            component={NavLink}
            to="/"
            color="inherit"
            sx={{ textTransform: "none" }}
          >
            Home
          </Button>
          <Button
            component={NavLink}
            to="/contacts"
            color="inherit"
            sx={{ textTransform: "none" }}
          >
            Contacts
          </Button>
        </Box>

        <Box sx={{ display: "flex", gap: 2 }}>
          {!isAuthenticated ? (
            <Button
              onClick={handleLoginClick}
              color="inherit"
              startIcon={<FiLogIn />}
              sx={{ textTransform: "none" }}
            >
              Login
            </Button>
          ) : (
            <Button
              onClick={handleLogout}
              color="inherit"
              startIcon={<FiLogOut />}
              sx={{ textTransform: "none" }}
            >
              Logout
            </Button>
          )}
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
