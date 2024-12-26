// src/components/LoginForm/LoginForm.jsx
import { useDispatch } from "react-redux";
import { login } from "../../redux/auth/operations";
import toast from "react-hot-toast"; // для повідомлень
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import s from "./LoginForm.module.css"; // імпортуємо стилі

const LoginForm = () => {
  const dispatch = useDispatch();

  const initialValues = {
    email: "",
    password: "",
  };

  const validationSchema = Yup.object({
    email: Yup.string()
      .email("Невірний формат email")
      .required("Email є обов'язковим"),
    password: Yup.string().required("Пароль є обов'язковим"),
  });

  const handleSubmit = async (values) => {
    try {
      const action = await dispatch(login(values)); // Викликає асинхронну операцію логіну
      if (action.type === "auth/login/fulfilled") {
        toast.success("Успішний вхід!");
        // Логіка після успішного входу (наприклад, редирект на головну сторінку)
      }
    } catch {
      toast.error("Невірний email або пароль!");
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
          <h1>Вхід</h1>
          <div>
            <label htmlFor="email">Email</label>
            <Field type="email" id="email" name="email" placeholder="Email" />
            <ErrorMessage
              name="email"
              component="div"
              className={s["error-message"]}
            />
          </div>
          <div>
            <label htmlFor="password">Пароль</label>
            <Field
              type="password"
              id="password"
              name="password"
              placeholder="Пароль"
            />
            <ErrorMessage
              name="password"
              component="div"
              className={s["error-message"]}
            />
          </div>
          <button type="submit">Увійти</button>
        </Form>
      </Formik>
    </div>
  );
};
export default LoginForm;
