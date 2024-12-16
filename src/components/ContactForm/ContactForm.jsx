import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useDispatch } from "react-redux";
import { addContact } from "../../redux/contactsOps";
import { useState } from "react";
import s from "./ContactForm.module.css";

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
      resetForm();
    } catch (err) {
      setError("Failed to add contact. Please try again.");
      console.error("Error adding contact:", err);
    }
  };

  return (
    <Formik
      initialValues={{ name: "", number: "" }}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      <Form className={s.form}>
        <div className={s.inputGroup}>
          <label htmlFor="name" className={s.label}>
            Name
          </label>
          <Field type="text" name="name" id="name" className={s.input} />
          <ErrorMessage name="name" component="div" className={s.error} />
        </div>
        <div className={s.inputGroup}>
          <label htmlFor="number" className={s.label}>
            Number
          </label>
          <Field type="text" name="number" id="number" className={s.input} />
          <ErrorMessage name="number" component="div" className={s.error} />
        </div>
        {error && <div className={s.error}>{error}</div>}
        <button type="submit" className={s.button}>
          Add Contact
        </button>
      </Form>
    </Formik>
  );
};

export default ContactForm;
