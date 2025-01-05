import { useDispatch } from "react-redux";
import { useState } from "react";
import { register } from "../../redux/auth/operations";
import toast from "react-hot-toast";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import { TextField, Button, Box, Typography } from "@mui/material";
import ReactLoading from "react-loading";

const RegisterForm = () => {
  const dispatch = useDispatch();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const initialValues = {
    name: "",
    email: "",
    password: "",
  };

  const validationSchema = Yup.object({
    name: Yup.string()
      .min(3, "Name must be at least 3 characters")
      .required("Name is required"),
    email: Yup.string()
      .email("Invalid email format")
      .required("Email is required"),
    password: Yup.string()
      .min(6, "Password must be at least 6 characters")
      .required("Password is required"),
  });

  const handleSubmit = async (values) => {
    setIsSubmitting(true);
    try {
      const action = await dispatch(register(values));
      if (action.type === "auth/register/fulfilled") {
        toast.success("Registration successful!");
      }
    } catch (error) {
      console.error("Error during registration:", error);
      toast.error("Registration error! Please try again.");
    } finally {
      setIsSubmitting(false);
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
      <Typography variant="h5" align="center" sx={{ marginBottom: 2 }}>
        Register
      </Typography>

      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        <Form style={{ width: "100%" }}>
          <Box sx={{ marginBottom: 2 }}>
            <Field
              name="name"
              type="text"
              as={TextField}
              label="Name"
              fullWidth
              variant="outlined"
            />
            <ErrorMessage
              name="name"
              component="div"
              className="error-message"
              style={{ color: "red", fontSize: "12px" }}
            />
          </Box>

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
            disabled={isSubmitting}
          >
            {isSubmitting ? (
              <ReactLoading type="spin" color="#fff" height={16} width={16} />
            ) : (
              "Register"
            )}
          </Button>
        </Form>
      </Formik>
    </Box>
  );
};

export default RegisterForm;
