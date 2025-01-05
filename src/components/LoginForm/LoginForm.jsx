import { useDispatch } from "react-redux";
import { login } from "../../redux/auth/operations";
import toast from "react-hot-toast";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import { TextField, Button, Box, Typography } from "@mui/material";

const LoginForm = () => {
  const dispatch = useDispatch();

  const initialValues = {
    email: "",
    password: "",
  };

  const validationSchema = Yup.object({
    email: Yup.string()
      .email("Invalid email format")
      .required("Email is required"),
    password: Yup.string().required("Password is required"),
  });

  const handleSubmit = async (values) => {
    try {
      const action = await dispatch(login(values));
      if (action.type === "auth/login/fulfilled") {
        toast.success("Login successful!");
      }
    } catch {
      toast.error("Invalid email or password!");
    }
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        backgroundColor: "#f4f6f9",
        padding: "20px",
        borderRadius: "8px",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
        width: "100%",
        maxWidth: "400px",
      }}
    >
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        <Form style={{ width: "100%" }}>
          <Typography variant="h5" align="center" sx={{ marginBottom: 2 }}>
            Log In
          </Typography>

          <Box sx={{ marginBottom: 2 }}>
            <Field
              name="email"
              type="email"
              as={TextField}
              label="Email"
              fullWidth
              variant="outlined"
            />
            <ErrorMessage
              name="email"
              component="div"
              className="error-message"
              style={{ color: "red", fontSize: "12px" }}
            />
          </Box>

          <Box sx={{ marginBottom: 2 }}>
            <Field
              name="password"
              type="password"
              as={TextField}
              label="Password"
              fullWidth
              variant="outlined"
            />
            <ErrorMessage
              name="password"
              component="div"
              className="error-message"
              style={{ color: "red", fontSize: "12px" }}
            />
          </Box>

          <Button
            type="submit"
            variant="contained"
            color="primary"
            fullWidth
            sx={{
              padding: "10px",
              fontSize: "14px",
              textTransform: "none",
              marginTop: 1,
            }}
          >
            Log In
          </Button>
        </Form>
      </Formik>
    </Box>
  );
};

export default LoginForm;
