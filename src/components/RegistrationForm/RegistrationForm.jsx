import { useDispatch } from "react-redux";
import { useState } from "react";
import { register } from "../../redux/auth/operations";
import toast from "react-hot-toast";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import s from "./RegistrationForm.module.css";
import ReactLoading from "react-loading";

const RegisterForm = () => {
  const dispatch = useDispatch();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const initialValues = {
    username: "",
    email: "",
    password: "",
  };

  const validationSchema = Yup.object({
    username: Yup.string()
      .min(3, "Username must be at least 3 characters")
      .required("Username is required"),
    email: Yup.string()
      .email("Invalid email format")
      .required("Email is required"),
    password: Yup.string().required("Password is required"),
  });

  const handleSubmit = async (values) => {
    console.log(values);
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
    <div className={s["form-container"]}>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        <Form>
          <h1>Registration</h1>
          <div>
            <label htmlFor="username">Username</label>{" "}
            <Field
              type="text"
              id="username"
              name="username"
              placeholder="Username"
              autoComplete="username"
            />
            <ErrorMessage
              name="username"
              component="div"
              className={s["error-message"]}
            />
          </div>
          <div>
            <label htmlFor="email">Email</label>
            <Field
              type="email"
              id="email"
              name="email"
              placeholder="Email"
              autoComplete="username"
            />
            <ErrorMessage
              name="email"
              component="div"
              className={s["error-message"]}
            />
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <Field
              type="password"
              id="password"
              name="password"
              placeholder="Password"
              autoComplete="current-password"
            />
            <ErrorMessage
              name="password"
              component="div"
              className={s["error-message"]}
            />
          </div>
          <button type="submit" disabled={isSubmitting}>
            {isSubmitting ? (
              <ReactLoading type="spin" color="#fff" height={16} width={16} />
            ) : (
              "Register"
            )}
          </button>
        </Form>
      </Formik>
    </div>
  );
};

export default RegisterForm;
