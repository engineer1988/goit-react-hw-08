import { useDispatch } from "react-redux";
import { logIn } from "../../redux/auth/operations";
import { useId } from "react";
import { Formik, Form, Field } from "formik";
import css from "./LoginForm.module.css";

export const LoginForm = () => {
  const emailFieldId = useId();
  const passwordFieldId = useId();

  const dispatch = useDispatch();

  const handleSubmit = (values, actions) => {
    dispatch(
      logIn({
        email: values.email,
        password: values.password,
      })
    );
    actions.resetForm();
  };

  return (
    <Formik
      initialValues={{
        email: "",
        password: "",
      }}
      onSubmit={handleSubmit}
    >
      <Form>
        <label htmlFor={emailFieldId} className={css.label}>
          Email
        </label>
        <Field type="email" name="email" id={emailFieldId} />

        <label htmlFor={passwordFieldId} className={css.label}>
          Password
        </label>
        <Field type="password" name="password" id={passwordFieldId} />

        <button type="submit">Log In</button>
      </Form>
    </Formik>
  );
};
