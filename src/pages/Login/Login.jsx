import LoginForm from "../../components/LoginForm/LoginForm";
import { Link } from "react-router-dom";
import { Button, Box, Typography, Container } from "@mui/material";

const Login = () => {
  return (
    <Container
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        textAlign: "center",
        backgroundColor: "#f4f6f9", // Легкий фон для кращого вигляду
        padding: "20px",
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "flex-start",
          width: "100%",
          marginBottom: 4,
        }}
      >
        <Link to="/" style={{ textDecoration: "none" }}>
          <Button
            variant="text"
            color="primary"
            sx={{
              fontSize: "16px",
              fontWeight: "bold",
              textTransform: "none",
              display: "flex",
              alignItems: "center",
              padding: "8px 16px",
              "&:hover": {
                color: "#005bb5",
              },
            }}
          >
            &larr; Go Back
          </Button>
        </Link>
      </Box>

      <Box
        sx={{
          backgroundColor: "white",
          borderRadius: 2,
          boxShadow: 2,
          padding: 4,
          width: "100%",
          maxWidth: "400px", // Максимальна ширина для форми
        }}
      >
        <Typography variant="h4" sx={{ marginBottom: 3 }}>
          Log In to Your Account
        </Typography>

        <LoginForm />
      </Box>
    </Container>
  );
};

export default Login;
