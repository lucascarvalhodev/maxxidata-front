import React from "react";
import { Formik, Form, Field, ErrorMessage, FormikHelpers } from "formik";
import * as Yup from "yup";
import Button from "../Button";
import { IUser } from "../../alias/IUser";

const schema = Yup.object().shape({
  email: Yup.string().email().min(4).max(150).required(),
  password: Yup.string().min(4).max(150).required(),
});

interface IProps {
  onSubmit(value: IUser, action: FormikHelpers<IUser>): void;
  loading: boolean;
}

const FormSignIn: React.FC<IProps> = ({ onSubmit, loading }) => {
  const initialValues: IUser = {
    email: "lucasdecarvalho13@hotmail.com",
    password: "123123",
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={schema}
      onSubmit={(values, action: FormikHelpers<IUser>) => {
        onSubmit(values, action);
      }}
    >
      <Form>
        <div className="form-group">
          <label htmlFor="emailInput">Email address</label>
          <Field
            name="email"
            data-testid="email"
            type="email"
            className="form-control"
            id="emailInput"
            placeholder="Enter email"
          />
          <small className="form-text text-danger">
            <ErrorMessage name="email" />
          </small>
        </div>
        <div className="form-group">
          <label htmlFor="passwordInput">Password</label>
          <Field
            name="password"
            data-testid="password"
            type="password"
            className="form-control"
            id="passwordInput"
            placeholder="Enter password"
          />
          <small className="form-text text-danger">
            <ErrorMessage name="password" />
          </small>
        </div>
        <Button type="submit" loading={loading} className="btn-block mt-4 mb-3">
          Submit
        </Button>
      </Form>
    </Formik>
  );
};

export default FormSignIn;
