import { Formik, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useDispatch } from "react-redux";
import { addContact } from "../../redux/contacts/operations";
import { useState } from "react";
import { TextField, Button, Typography } from "@mui/material";
import toast from "react-hot-toast";
import styles from "./ContactForm.module.css";

const ContactForm = () => {
  const dispatch = useDispatch();
  const [error, setError] = useState(null);

  const validationSchema = Yup.object({
    name: Yup.string()
      .min(3, "Name must be at least 3 characters")
      .max(50, "Name is too long")
      .required("Required"),
    number: Yup.string()
      .min(3, "Number must be at least 3 characters")
      .max(50, "Number is too long")
      .required("Required"),
  });

  const handleSubmit = async (values, { resetForm }) => {
    try {
      setError(null);

      await dispatch(
        addContact({ name: values.name, number: values.number })
      ).unwrap();

      toast.success("Contact added successfully!");

      resetForm();
    } catch (err) {
      setError("Failed to add contact. Please try again.");

      toast.error("Failed to add contact. Please try again.");
      console.error("Error adding contact:", err);
    }
  };

  return (
    <Formik
      initialValues={{ name: "", number: "" }}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {({ handleChange, handleBlur, values }) => (
        <Form className={styles.form}>
          <Typography variant="h6" align="center" className={styles.title}>
            Add New Contact
          </Typography>

          <TextField
            fullWidth
            id="name"
            name="name"
            label="Name"
            value={values.name}
            onChange={handleChange}
            onBlur={handleBlur}
            helperText={<ErrorMessage name="name" />}
            variant="outlined"
            className={styles.input}
          />

          <TextField
            fullWidth
            id="number"
            name="number"
            label="Number"
            value={values.number}
            onChange={handleChange}
            onBlur={handleBlur}
            helperText={<ErrorMessage name="number" />}
            variant="outlined"
            className={styles.input}
          />

          {error && (
            <Typography color="error" className={styles.error}>
              {error}
            </Typography>
          )}

          <Button
            type="submit"
            variant="contained"
            color="primary"
            className={styles.button}
          >
            Add Contact
          </Button>
        </Form>
      )}
    </Formik>
  );
};

export default ContactForm;
