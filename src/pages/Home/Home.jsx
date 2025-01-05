import { Link } from "react-router-dom";
import { Button, Typography, Box } from "@mui/material";
import { keyframes } from "@emotion/react";

const bounce = keyframes`
  0% { transform: translateY(0); }
  50% { transform: translateY(-10px); }
  100% { transform: translateY(0); }
`;

const Home = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        textAlign: "center",
      }}
    >
      <Typography variant="h3" component="h1" sx={{ marginBottom: 4 }}>
        Welcome to the Contact Management System
      </Typography>
      <Typography variant="body1" sx={{ marginBottom: 2 }}>
        This application provides a comprehensive solution for managing and
        organizing your contacts effectively.
      </Typography>
      <Typography variant="body1" sx={{ marginBottom: 4 }}>
        To begin utilizing this system, please register or log in to access your
        contact list.
      </Typography>

      <Box sx={{ display: "flex", gap: 2 }}>
        <Button
          component={Link}
          to="/register"
          variant="contained"
          color="primary"
          sx={{
            textTransform: "none",
            padding: "12px 24px",
            fontSize: "16px",
            backgroundColor: "#0073e6",
            "&:hover": {
              backgroundColor: "#005bb5",
            },
            animation: `${bounce} 1s ease infinite`,
          }}
        >
          Register Now
        </Button>
        <Button
          component={Link}
          to="/login"
          variant="outlined"
          color="secondary"
          sx={{
            textTransform: "none",
            padding: "12px 24px",
            fontSize: "16px",
            borderColor: "#ff4081",
            "&:hover": {
              borderColor: "#e60073",
              color: "#e60073",
            },
            animation: `${bounce} 1s ease infinite`,
          }}
        >
          Log In
        </Button>
      </Box>
    </Box>
  );
};

export default Home;
