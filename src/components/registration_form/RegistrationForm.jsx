import { useDispatch } from "react-redux";
import { register } from "../../redux/auth/operations";
import { useId } from "react";
import { Formik, Form, Field } from "formik";
import css from "./RegistrationForm.module.css";

export const RegistrationForm = () => {
  const nameFieldId = useId();
  const emailFieldId = useId();
  const passwordFieldId = useId();

  const dispatch = useDispatch();

  const handleSubmit = (values, actions) => {
    dispatch(
      register({
        name: values.name,
        email: values.email,
        password: values.password,
      })
    );
    actions.resetForm();
  };

  return (
    <Formik
      initialValues={{
        name: "",
        email: "",
        password: "",
      }}
      onSubmit={handleSubmit}
      autoComplete="off"
    >
      <Form>
        <label htmlFor={nameFieldId} className={css.label}>
          Username
        </label>
        <Field type="text" name="name" id={nameFieldId} className={css.field} />
        <label htmlFor={emailFieldId} className={css.label}>
          Email
        </label>
        <Field
          type="email"
          name="email"
          id={emailFieldId}
          className={css.field}
        />
        <label htmlFor={passwordFieldId} className={css.label}>
          Password
        </label>
        <Field
          type="password"
          name="password"
          id={passwordFieldId}
          className={css.field}
        />
        <div>
          <button type="submit">Register</button>
        </div>
      </Form>
    </Formik>
  );
};
